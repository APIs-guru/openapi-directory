import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class OauthAuthorizations:
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

    
    def oauth_authorizations_create_authorization(self, request: operations.OauthAuthorizationsCreateAuthorizationRequest) -> operations.OauthAuthorizationsCreateAuthorizationResponse:
        r"""Create a new authorization
        **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.1/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
        
        **Warning:** Apps must use the [web application flow](https://docs.github.com/enterprise-server@3.1/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub Enterprise Server SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub Enterprise Server SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).
        
        Creates OAuth tokens using [Basic Authentication](https://docs.github.com/enterprise-server@3.1/rest/overview/other-authentication-methods#basic-authentication). If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see \"[Working with two-factor authentication](https://docs.github.com/enterprise-server@3.1/rest/overview/other-authentication-methods#working-with-two-factor-authentication).\"
        
        To create tokens for a particular OAuth application using this endpoint, you must authenticate as the user you want to create an authorization for and provide the app's client ID and secret, found on your OAuth application's settings page. If your OAuth application intends to create multiple tokens for one user, use `fingerprint` to differentiate between them.
        
        You can also create tokens on GitHub Enterprise Server from the [personal access tokens settings](https://github.com/settings/tokens) page. Read more about these tokens in [the GitHub Help documentation](https://help.github.com/articles/creating-an-access-token-for-command-line-use).
        
        Organizations that enforce SAML SSO require personal access tokens to be allowed. Read more about allowing tokens in [the GitHub Help documentation](https://help.github.com/articles/about-identity-and-access-management-with-saml-single-sign-on).
        https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations#create-a-new-authorization - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/authorizations"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OauthAuthorizationsCreateAuthorizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Authorization])
                res.authorization = out
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
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def oauth_authorizations_delete_authorization(self, request: operations.OauthAuthorizationsDeleteAuthorizationRequest) -> operations.OauthAuthorizationsDeleteAuthorizationResponse:
        r"""Delete an authorization
        **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.1/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
        https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations#delete-an-authorization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/authorizations/{authorization_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OauthAuthorizationsDeleteAuthorizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
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

    
    def oauth_authorizations_delete_grant(self, request: operations.OauthAuthorizationsDeleteGrantRequest) -> operations.OauthAuthorizationsDeleteGrantResponse:
        r"""Delete a grant
        **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.1/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
        
        Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for your user. Once deleted, the application has no access to your account and is no longer listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).
        https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations#delete-a-grant - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/applications/grants/{grant_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OauthAuthorizationsDeleteGrantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
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

    
    def oauth_authorizations_get_authorization(self, request: operations.OauthAuthorizationsGetAuthorizationRequest) -> operations.OauthAuthorizationsGetAuthorizationResponse:
        r"""Get a single authorization
        **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.1/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
        https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations#get-a-single-authorization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/authorizations/{authorization_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OauthAuthorizationsGetAuthorizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Authorization])
                res.authorization = out
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

    
    def oauth_authorizations_get_grant(self, request: operations.OauthAuthorizationsGetGrantRequest) -> operations.OauthAuthorizationsGetGrantResponse:
        r"""Get a single grant
        **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.1/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
        https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations#get-a-single-grant - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/applications/grants/{grant_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OauthAuthorizationsGetGrantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ApplicationGrant])
                res.application_grant = out
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

    
    def oauth_authorizations_get_or_create_authorization_for_app(self, request: operations.OauthAuthorizationsGetOrCreateAuthorizationForAppRequest) -> operations.OauthAuthorizationsGetOrCreateAuthorizationForAppResponse:
        r"""Get-or-create an authorization for a specific app
        **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.1/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
        
        **Warning:** Apps must use the [web application flow](https://docs.github.com/enterprise-server@3.1/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub Enterprise Server SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub Enterprise Server SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).
        
        Creates a new authorization for the specified OAuth application, only if an authorization for that application doesn't already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. It returns the user's existing authorization for the application if one is present. Otherwise, it creates and returns a new one.
        
        If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see \"[Working with two-factor authentication](https://docs.github.com/enterprise-server@3.1/rest/overview/other-authentication-methods#working-with-two-factor-authentication).\"
        
        **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.1/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
        https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations#get-or-create-an-authorization-for-a-specific-app - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/authorizations/clients/{client_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OauthAuthorizationsGetOrCreateAuthorizationForAppResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Authorization])
                res.authorization = out
        elif r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Authorization])
                res.authorization = out
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
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def oauth_authorizations_get_or_create_authorization_for_app_and_fingerprint(self, request: operations.OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequest) -> operations.OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse:
        r"""Get-or-create an authorization for a specific app and fingerprint
        **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.1/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
        
        **Warning:** Apps must use the [web application flow](https://docs.github.com/enterprise-server@3.1/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub Enterprise Server SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub Enterprise Server SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).
        
        This method will create a new authorization for the specified OAuth application, only if an authorization for that application and fingerprint do not already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. `fingerprint` is a unique string to distinguish an authorization from others created for the same client ID and user. It returns the user's existing authorization for the application if one is present. Otherwise, it creates and returns a new one.
        
        If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see \"[Working with two-factor authentication](https://docs.github.com/enterprise-server@3.1/rest/overview/other-authentication-methods#working-with-two-factor-authentication).\"
        https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations#get-or-create-an-authorization-for-a-specific-app-and-fingerprint - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/authorizations/clients/{client_id}/{fingerprint}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Authorization])
                res.authorization = out
        elif r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Authorization])
                res.authorization = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def oauth_authorizations_list_authorizations(self, request: operations.OauthAuthorizationsListAuthorizationsRequest) -> operations.OauthAuthorizationsListAuthorizationsResponse:
        r"""List your authorizations
        **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.1/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
        https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations#list-your-authorizations - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/authorizations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OauthAuthorizationsListAuthorizationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Authorization]])
                res.authorizations = out
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
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def oauth_authorizations_list_grants(self, request: operations.OauthAuthorizationsListGrantsRequest) -> operations.OauthAuthorizationsListGrantsResponse:
        r"""List your grants
        **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.1/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
        
        You can use this API to list the set of OAuth applications that have been granted access to your account. Unlike the [list your authorizations](https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations#list-your-authorizations) API, this API does not manage individual tokens. This API will return one entry for each OAuth application that has been granted access to your account, regardless of the number of tokens an application has generated for your user. The list of OAuth applications returned matches what is shown on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized). The `scopes` returned are the union of scopes authorized for the application. For example, if an application has one token with `repo` scope and another token with `user` scope, the grant will return `[\"repo\", \"user\"]`.
        https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations#list-your-grants - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/applications/grants"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OauthAuthorizationsListGrantsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ApplicationGrant]])
                res.application_grants = out
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
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def oauth_authorizations_update_authorization(self, request: operations.OauthAuthorizationsUpdateAuthorizationRequest) -> operations.OauthAuthorizationsUpdateAuthorizationResponse:
        r"""Update an existing authorization
        **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@3.1/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
        
        If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see \"[Working with two-factor authentication](https://docs.github.com/enterprise-server@3.1/rest/overview/other-authentication-methods#working-with-two-factor-authentication).\"
        
        You can only send one of these scope keys at a time.
        https://docs.github.com/enterprise-server@3.1/rest/reference/oauth-authorizations#update-an-existing-authorization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/authorizations/{authorization_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OauthAuthorizationsUpdateAuthorizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Authorization])
                res.authorization = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    