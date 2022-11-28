import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils

class Apps:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def apps_add_repo_to_installation(self, request: operations.AppsAddRepoToInstallationRequest) -> operations.AppsAddRepoToInstallationResponse:
        r"""Add a repository to an app installation
        Add a single repository to an installation. The authenticated user must have admin access to the repository.
        
        You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@2.22/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.
        https://docs.github.com/enterprise-server@2.22/rest/reference/apps#add-a-repository-to-an-app-installation - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/installations/{installation_id}/repositories/{repository_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AppsAddRepoToInstallationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def apps_check_authorization(self, request: operations.AppsCheckAuthorizationRequest) -> operations.AppsCheckAuthorizationResponse:
        r"""Check an authorization
        **Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).
        
        OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.
        https://docs.github.com/enterprise-server@2.22/rest/reference/apps#check-an-authorization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/applications/{client_id}/tokens/{access_token}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AppsCheckAuthorizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppsCheckAuthorizationAuthorization])
                res.authorization = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def apps_check_token(self, request: operations.AppsCheckTokenRequest) -> operations.AppsCheckTokenResponse:
        r"""Check a token
        OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication) to use this endpoint, where the username is the OAuth application `client_id` and the password is its `client_secret`. Invalid tokens will return `404 NOT FOUND`.
        https://docs.github.com/enterprise-server@2.22/rest/reference/apps#check-a-token - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/applications/{client_id}/token", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AppsCheckTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Authorization])
                res.authorization = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def apps_create_content_attachment(self, request: operations.AppsCreateContentAttachmentRequest) -> operations.AppsCreateContentAttachmentResponse:
        r"""Create a content attachment
        Creates an attachment under a content reference URL in the body or comment of an issue or pull request. Use the `id` and `repository` `full_name` of the content reference from the [`content_reference` event](https://docs.github.com/enterprise-server@2.22/webhooks/event-payloads/#content_reference) to create an attachment.
        
        The app must create a content attachment within six hours of the content reference URL being posted. See \"[Using content attachments](https://docs.github.com/enterprise-server@2.22/apps/using-content-attachments/)\" for details about content attachments.
        
        You must use an [installation access token](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
        https://docs.github.com/enterprise-server@2.22/rest/reference/apps#create-a-content-attachment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/content_references/{content_reference_id}/attachments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AppsCreateContentAttachmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContentReferenceAttachment])
                res.content_reference_attachment = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppsCreateContentAttachment415ApplicationJSON])
                res.apps_create_content_attachment_415_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def apps_create_from_manifest(self, request: operations.AppsCreateFromManifestRequest) -> operations.AppsCreateFromManifestResponse:
        r"""Create a GitHub App from a manifest
        Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.
        https://docs.github.com/enterprise-server@2.22/rest/reference/apps#create-a-github-app-from-a-manifest - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/app-manifests/{code}/conversions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AppsCreateFromManifestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.git_hub_app = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationErrorSimple])
                res.validation_error_simple = out

        return res

    
    def apps_create_installation_access_token(self, request: operations.AppsCreateInstallationAccessTokenRequest) -> operations.AppsCreateInstallationAccessTokenResponse:
        r"""Create an installation access token for an app
        Creates an installation access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of `401 - Unauthorized`, and requires creating a new installation token. By default the installation token has access to all repositories that the installation can access. To restrict the access to specific repositories, you can provide the `repository_ids` when creating the token. When you omit `repository_ids`, the response does not contain the `repositories` key.
        
        You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
        https://docs.github.com/enterprise-server@2.22/rest/reference/apps/#create-an-installation-access-token-for-an-app - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/app/installations/{installation_id}/access_tokens", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AppsCreateInstallationAccessTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InstallationToken])
                res.installation_token = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppsCreateInstallationAccessToken415ApplicationJSON])
                res.apps_create_installation_access_token_415_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def apps_delete_authorization(self, request: operations.AppsDeleteAuthorizationRequest) -> operations.AppsDeleteAuthorizationResponse:
        r"""Delete an app authorization
        OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid OAuth `access_token` as an input parameter and the grant for the token's owner will be deleted.
        Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).
        https://docs.github.com/enterprise-server@2.22/rest/reference/apps#delete-an-app-authorization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/applications/{client_id}/grant", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AppsDeleteAuthorizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def apps_delete_installation(self, request: operations.AppsDeleteInstallationRequest) -> operations.AppsDeleteInstallationResponse:
        r"""Delete an installation for the authenticated app
        Uninstalls a GitHub App on a user, organization, or business account. If you prefer to temporarily suspend an app's access to your account's resources, then we recommend the \"[Suspend an app installation](https://docs.github.com/enterprise-server@2.22/rest/reference/apps/#suspend-an-app-installation)\" endpoint.
        
        You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
        https://docs.github.com/enterprise-server@2.22/rest/reference/apps#delete-an-installation-for-the-authenticated-app - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/app/installations/{installation_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AppsDeleteInstallationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def apps_delete_token(self, request: operations.AppsDeleteTokenRequest) -> operations.AppsDeleteTokenResponse:
        r"""Delete an app token
        OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.
        https://docs.github.com/enterprise-server@2.22/rest/reference/apps#delete-an-app-token - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/applications/{client_id}/token", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AppsDeleteTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def apps_get_authenticated(self) -> operations.AppsGetAuthenticatedResponse:
        r"""Get the authenticated app
        Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the \"[List installations for the authenticated app](https://docs.github.com/enterprise-server@2.22/rest/reference/apps#list-installations-for-the-authenticated-app)\" endpoint.
        
        You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
        https://docs.github.com/enterprise-server@2.22/rest/reference/apps#get-the-authenticated-app - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/app"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AppsGetAuthenticatedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.integration = out

        return res

    
    def apps_get_by_slug(self, request: operations.AppsGetBySlugRequest) -> operations.AppsGetBySlugResponse:
        r"""Get an app
        **Note**: The `:app_slug` is just the URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., `https://github.com/settings/apps/:app_slug`).
        
        If the GitHub App you specify is public, you can access this endpoint without authenticating. If the GitHub App you specify is private, you must authenticate with a [personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or an [installation access token](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
        https://docs.github.com/enterprise-server@2.22/rest/reference/apps/#get-an-app - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apps/{app_slug}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AppsGetBySlugResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.integration = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppsGetBySlug415ApplicationJSON])
                res.apps_get_by_slug_415_application_json_object = out

        return res

    
    def apps_get_installation(self, request: operations.AppsGetInstallationRequest) -> operations.AppsGetInstallationResponse:
        r"""Get an installation for the authenticated app
        Enables an authenticated GitHub App to find an installation's information using the installation id. The installation's account type (`target_type`) will be either an organization or a user account, depending which account the repository belongs to.
        
        You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
        https://docs.github.com/enterprise-server@2.22/rest/reference/apps#get-an-installation-for-the-authenticated-app - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/app/installations/{installation_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AppsGetInstallationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InstallationGhes2])
                res.installation_ghes_2 = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppsGetInstallation415ApplicationJSON])
                res.apps_get_installation_415_application_json_object = out

        return res

    
    def apps_get_org_installation(self, request: operations.AppsGetOrgInstallationRequest) -> operations.AppsGetOrgInstallationResponse:
        r"""Get an organization installation for the authenticated app
        Enables an authenticated GitHub App to find the organization's installation information.
        
        You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
        https://docs.github.com/enterprise-server@2.22/rest/reference/apps#get-an-organization-installation-for-the-authenticated-app - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/installation", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AppsGetOrgInstallationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InstallationGhes2])
                res.installation_ghes_2 = out

        return res

    
    def apps_get_repo_installation(self, request: operations.AppsGetRepoInstallationRequest) -> operations.AppsGetRepoInstallationResponse:
        r"""Get a repository installation for the authenticated app
        Enables an authenticated GitHub App to find the repository's installation information. The installation's account type will be either an organization or a user account, depending which account the repository belongs to.
        
        You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
        https://docs.github.com/enterprise-server@2.22/rest/reference/apps#get-a-repository-installation-for-the-authenticated-app - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/installation", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AppsGetRepoInstallationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InstallationGhes2])
                res.installation_ghes_2 = out
        elif r.status_code == 301:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def apps_get_user_installation(self, request: operations.AppsGetUserInstallationRequest) -> operations.AppsGetUserInstallationResponse:
        r"""Get a user installation for the authenticated app
        Enables an authenticated GitHub App to find the user’s installation information.
        
        You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
        https://docs.github.com/enterprise-server@2.22/rest/reference/apps#get-a-user-installation-for-the-authenticated-app - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}/installation", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AppsGetUserInstallationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InstallationGhes2])
                res.installation_ghes_2 = out

        return res

    
    def apps_list_installation_repos_for_authenticated_user(self, request: operations.AppsListInstallationReposForAuthenticatedUserRequest) -> operations.AppsListInstallationReposForAuthenticatedUserResponse:
        r"""List repositories accessible to the user access token
        List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access for an installation.
        
        The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
        
        You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.
        
        The access the user has to each repository is included in the hash under the `permissions` key.
        https://docs.github.com/enterprise-server@2.22/rest/reference/apps#list-repositories-accessible-to-the-user-access-token - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/installations/{installation_id}/repositories", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppsListInstallationReposForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppsListInstallationReposForAuthenticatedUser200ApplicationJSON])
                res.apps_list_installation_repos_for_authenticated_user_200_application_json_object = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def apps_list_installations(self, request: operations.AppsListInstallationsRequest) -> operations.AppsListInstallationsResponse:
        r"""List installations for the authenticated app
        You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
        
        The permissions the installation has are included under the `permissions` key.
        https://docs.github.com/enterprise-server@2.22/rest/reference/apps#list-installations-for-the-authenticated-app - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/app/installations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppsListInstallationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.InstallationGhes2]])
                res.installation_ghes_2s = out

        return res

    
    def apps_list_installations_for_authenticated_user(self, request: operations.AppsListInstallationsForAuthenticatedUserRequest) -> operations.AppsListInstallationsForAuthenticatedUserResponse:
        r"""List app installations accessible to the user access token
        Lists installations of your GitHub App that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.
        
        You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.
        
        The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
        
        You can find the permissions for the installation under the `permissions` key.
        https://docs.github.com/enterprise-server@2.22/rest/reference/apps#list-app-installations-accessible-to-the-user-access-token - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/installations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppsListInstallationsForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppsListInstallationsForAuthenticatedUser200ApplicationJSON])
                res.apps_list_installations_for_authenticated_user_200_application_json_object = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppsListInstallationsForAuthenticatedUser415ApplicationJSON])
                res.apps_list_installations_for_authenticated_user_415_application_json_object = out

        return res

    
    def apps_list_repos_accessible_to_installation(self, request: operations.AppsListReposAccessibleToInstallationRequest) -> operations.AppsListReposAccessibleToInstallationResponse:
        r"""List repositories accessible to the app installation
        List repositories that an app installation can access.
        
        You must use an [installation access token](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
        https://docs.github.com/enterprise-server@2.22/rest/reference/apps#list-repositories-accessible-to-the-app-installation - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/installation/repositories"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AppsListReposAccessibleToInstallationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppsListReposAccessibleToInstallation200ApplicationJSON])
                res.apps_list_repos_accessible_to_installation_200_application_json_object = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def apps_remove_repo_from_installation(self, request: operations.AppsRemoveRepoFromInstallationRequest) -> operations.AppsRemoveRepoFromInstallationResponse:
        r"""Remove a repository from an app installation
        Remove a single repository from an installation. The authenticated user must have admin access to the repository.
        
        You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@2.22/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.
        https://docs.github.com/enterprise-server@2.22/rest/reference/apps#remove-a-repository-from-an-app-installation - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/installations/{installation_id}/repositories/{repository_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AppsRemoveRepoFromInstallationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def apps_reset_authorization(self, request: operations.AppsResetAuthorizationRequest) -> operations.AppsResetAuthorizationResponse:
        r"""Reset an authorization
        **Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).
        
        OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the \"token\" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.
        https://docs.github.com/enterprise-server@2.22/rest/reference/apps#reset-an-authorization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/applications/{client_id}/tokens/{access_token}", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AppsResetAuthorizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Authorization])
                res.authorization = out

        return res

    
    def apps_reset_token(self, request: operations.AppsResetTokenRequest) -> operations.AppsResetTokenResponse:
        r"""Reset a token
        OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the \"token\" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.
        https://docs.github.com/enterprise-server@2.22/rest/reference/apps#reset-a-token - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/applications/{client_id}/token", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AppsResetTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Authorization])
                res.authorization = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def apps_revoke_authorization_for_application(self, request: operations.AppsRevokeAuthorizationForApplicationRequest) -> operations.AppsRevokeAuthorizationForApplicationResponse:
        r"""Revoke an authorization for an application
        **Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).
        
        OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.
        https://docs.github.com/enterprise-server@2.22/rest/reference/apps#revoke-an-authorization-for-an-application - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/applications/{client_id}/tokens/{access_token}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AppsRevokeAuthorizationForApplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def apps_revoke_grant_for_application(self, request: operations.AppsRevokeGrantForApplicationRequest) -> operations.AppsRevokeGrantForApplicationResponse:
        r"""Revoke a grant for an application
        **Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).
        
        OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid token as `:access_token` and the grant for the token's owner will be deleted.
        
        Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the Applications settings page under \"Authorized OAuth Apps\" on GitHub Enterprise Server](https://github.com/settings/applications#authorized).
        https://docs.github.com/enterprise-server@2.22/rest/reference/apps#revoke-a-grant-for-an-application - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/applications/{client_id}/grants/{access_token}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AppsRevokeGrantForApplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def apps_revoke_installation_access_token(self) -> operations.AppsRevokeInstallationAccessTokenResponse:
        r"""Revoke an installation access token
        Revokes the installation token you're using to authenticate as an installation and access this endpoint.
        
        Once an installation token is revoked, the token is invalidated and cannot be used. Other endpoints that require the revoked installation token must have a new installation token to work. You can create a new token using the \"[Create an installation access token for an app](https://docs.github.com/enterprise-server@2.22/rest/reference/apps#create-an-installation-access-token-for-an-app)\" endpoint.
        
        You must use an [installation access token](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
        https://docs.github.com/enterprise-server@2.22/rest/reference/apps#revoke-an-installation-access-token - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/installation/token"
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AppsRevokeInstallationAccessTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def apps_suspend_installation(self, request: operations.AppsSuspendInstallationRequest) -> operations.AppsSuspendInstallationResponse:
        r"""Suspend an app installation
        Suspends a GitHub App on a user, organization, or business account, which blocks the app from accessing the account's resources. When a GitHub App is suspended, the app's access to the GitHub Enterprise Server API or webhook events is blocked for that account.
        
        You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
        https://docs.github.com/enterprise-server@2.22/rest/reference/apps#suspend-an-app-installation - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/app/installations/{installation_id}/suspended", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AppsSuspendInstallationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def apps_unsuspend_installation(self, request: operations.AppsUnsuspendInstallationRequest) -> operations.AppsUnsuspendInstallationResponse:
        r"""Unsuspend an app installation
        Removes a GitHub App installation suspension.
        
        You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
        https://docs.github.com/enterprise-server@2.22/rest/reference/apps#unsuspend-an-app-installation - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/app/installations/{installation_id}/suspended", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AppsUnsuspendInstallationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    