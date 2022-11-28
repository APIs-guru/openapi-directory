import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils

class Users:
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

    
    def users_add_email_for_authenticated(self, request: operations.UsersAddEmailForAuthenticatedRequest) -> operations.UsersAddEmailForAuthenticatedResponse:
        r"""Add an email address for the authenticated user
        This endpoint is accessible with the `user` scope.
        https://docs.github.com/enterprise-server@3.0/rest/reference/users#add-an-email-address-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/emails"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersAddEmailForAuthenticatedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Email]])
                res.emails = out
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
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def users_check_following_for_user(self, request: operations.UsersCheckFollowingForUserRequest) -> operations.UsersCheckFollowingForUserResponse:
        r"""Check if a user follows another user
        https://docs.github.com/enterprise-server@3.0/rest/reference/users#check-if-a-user-follows-another-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}/following/{target_user}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersCheckFollowingForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def users_check_person_is_followed_by_authenticated(self, request: operations.UsersCheckPersonIsFollowedByAuthenticatedRequest) -> operations.UsersCheckPersonIsFollowedByAuthenticatedResponse:
        r"""Check if a person is followed by the authenticated user
        https://docs.github.com/enterprise-server@3.0/rest/reference/users#check-if-a-person-is-followed-by-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/following/{username}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersCheckPersonIsFollowedByAuthenticatedResponse(status_code=r.status_code, content_type=content_type)
        
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
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def users_create_gpg_key_for_authenticated(self, request: operations.UsersCreateGpgKeyForAuthenticatedRequest) -> operations.UsersCreateGpgKeyForAuthenticatedResponse:
        r"""Create a GPG key for the authenticated user
        Adds a GPG key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:gpg_key` [scope](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        https://docs.github.com/enterprise-server@3.0/rest/reference/users#create-a-gpg-key-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/gpg_keys"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersCreateGpgKeyForAuthenticatedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GpgKey])
                res.gpg_key = out
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
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def users_create_public_ssh_key_for_authenticated(self, request: operations.UsersCreatePublicSSHKeyForAuthenticatedRequest) -> operations.UsersCreatePublicSSHKeyForAuthenticatedResponse:
        r"""Create a public SSH key for the authenticated user
        Adds a public SSH key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:public_key` [scope](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        https://docs.github.com/enterprise-server@3.0/rest/reference/users#create-a-public-ssh-key-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/keys"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersCreatePublicSSHKeyForAuthenticatedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Key])
                res.key = out
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
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def users_delete_email_for_authenticated(self, request: operations.UsersDeleteEmailForAuthenticatedRequest) -> operations.UsersDeleteEmailForAuthenticatedResponse:
        r"""Delete an email address for the authenticated user
        This endpoint is accessible with the `user` scope.
        https://docs.github.com/enterprise-server@3.0/rest/reference/users#delete-an-email-address-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/emails"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersDeleteEmailForAuthenticatedResponse(status_code=r.status_code, content_type=content_type)
        
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
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def users_delete_gpg_key_for_authenticated(self, request: operations.UsersDeleteGpgKeyForAuthenticatedRequest) -> operations.UsersDeleteGpgKeyForAuthenticatedResponse:
        r"""Delete a GPG key for the authenticated user
        Removes a GPG key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:gpg_key` [scope](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        https://docs.github.com/enterprise-server@3.0/rest/reference/users#delete-a-gpg-key-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/gpg_keys/{gpg_key_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersDeleteGpgKeyForAuthenticatedResponse(status_code=r.status_code, content_type=content_type)
        
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
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def users_delete_public_ssh_key_for_authenticated(self, request: operations.UsersDeletePublicSSHKeyForAuthenticatedRequest) -> operations.UsersDeletePublicSSHKeyForAuthenticatedResponse:
        r"""Delete a public SSH key for the authenticated user
        Removes a public SSH key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:public_key` [scope](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        https://docs.github.com/enterprise-server@3.0/rest/reference/users#delete-a-public-ssh-key-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/keys/{key_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersDeletePublicSSHKeyForAuthenticatedResponse(status_code=r.status_code, content_type=content_type)
        
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
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def users_follow(self, request: operations.UsersFollowRequest) -> operations.UsersFollowResponse:
        r"""Follow a user
        Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see \"[HTTP verbs](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#http-verbs).\"
        
        Following a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.
        https://docs.github.com/enterprise-server@3.0/rest/reference/users#follow-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/following/{username}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersFollowResponse(status_code=r.status_code, content_type=content_type)
        
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
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def users_get_authenticated(self) -> operations.UsersGetAuthenticatedResponse:
        r"""Get the authenticated user
        If the authenticated user is authenticated through basic authentication or OAuth with the `user` scope, then the response lists public and private profile information.
        
        If the authenticated user is authenticated through OAuth without the `user` scope, then the response lists only public profile information.
        https://docs.github.com/enterprise-server@3.0/rest/reference/users#get-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersGetAuthenticatedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.users_get_authenticated_200_application_json_one_of = out
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

    
    def users_get_by_username(self, request: operations.UsersGetByUsernameRequest) -> operations.UsersGetByUsernameResponse:
        r"""Get a user
        Provides publicly available information about someone with a GitHub account.
        
        GitHub Apps with the `Plan` user permission can use this endpoint to retrieve information about a user's GitHub Enterprise Server plan. The GitHub App must be authenticated as a user. See \"[Identifying and authorizing users for GitHub Apps](https://docs.github.com/enterprise-server@3.0/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)\" for details about authentication. For an example response, see 'Response with GitHub Enterprise Server plan information' below\"
        
        The `email` key in the following response is the publicly visible email address from your GitHub Enterprise Server [profile page](https://github.com/settings/profile). When setting up your profile, you can select a primary email address to be “public” which provides an email entry for this endpoint. If you do not set a public email address for `email`, then it will have a value of `null`. You only see publicly visible email addresses when authenticated with GitHub Enterprise Server. For more information, see [Authentication](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#authentication).
        
        The Emails API enables you to list all of your email addresses, and toggle a primary email to be visible publicly. For more information, see \"[Emails API](https://docs.github.com/enterprise-server@3.0/rest/reference/users#emails)\".
        https://docs.github.com/enterprise-server@3.0/rest/reference/users#get-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersGetByUsernameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.users_get_by_username_200_application_json_one_of = out
        elif r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.users_get_by_username_202_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def users_get_context_for_user(self, request: operations.UsersGetContextForUserRequest) -> operations.UsersGetContextForUserResponse:
        r"""Get contextual information for a user
        Provides hovercard information when authenticated through basic auth or OAuth with the `repo` scope. You can find out more about someone in relation to their pull requests, issues, repositories, and organizations.
        
        The `subject_type` and `subject_id` parameters provide context for the person's hovercard, which returns more information than without the parameters. For example, if you wanted to find out more about `octocat` who owns the `Spoon-Knife` repository via cURL, it would look like this:
        
        ```shell
         curl -u username:token
          https://api.github.com/users/octocat/hovercard?subject_type=repository&subject_id=1300192
        ```
        https://docs.github.com/enterprise-server@3.0/rest/reference/users#get-contextual-information-for-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}/hovercard", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersGetContextForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Hovercard])
                res.hovercard = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def users_get_gpg_key_for_authenticated(self, request: operations.UsersGetGpgKeyForAuthenticatedRequest) -> operations.UsersGetGpgKeyForAuthenticatedResponse:
        r"""Get a GPG key for the authenticated user
        View extended details for a single GPG key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        https://docs.github.com/enterprise-server@3.0/rest/reference/users#get-a-gpg-key-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/gpg_keys/{gpg_key_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersGetGpgKeyForAuthenticatedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GpgKey])
                res.gpg_key = out
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

    
    def users_get_public_ssh_key_for_authenticated(self, request: operations.UsersGetPublicSSHKeyForAuthenticatedRequest) -> operations.UsersGetPublicSSHKeyForAuthenticatedResponse:
        r"""Get a public SSH key for the authenticated user
        View extended details for a single public SSH key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        https://docs.github.com/enterprise-server@3.0/rest/reference/users#get-a-public-ssh-key-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/keys/{key_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersGetPublicSSHKeyForAuthenticatedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Key])
                res.key = out
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

    
    def users_list(self, request: operations.UsersListRequest) -> operations.UsersListResponse:
        r"""List users
        Lists all users, in the order that they signed up on GitHub Enterprise Server. This list includes personal user accounts and organization accounts.
        
        Note: Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of users.
        https://docs.github.com/enterprise-server@3.0/rest/reference/users#list-users - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SimpleUser]])
                res.simple_users = out
        elif r.status_code == 304:
            pass

        return res

    
    def users_list_emails_for_authenticated(self, request: operations.UsersListEmailsForAuthenticatedRequest) -> operations.UsersListEmailsForAuthenticatedResponse:
        r"""List email addresses for the authenticated user
        Lists all of your email addresses, and specifies which one is visible to the public. This endpoint is accessible with the `user:email` scope.
        https://docs.github.com/enterprise-server@3.0/rest/reference/users#list-email-addresses-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/emails"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersListEmailsForAuthenticatedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Email]])
                res.emails = out
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

    
    def users_list_followed_by_authenticated(self, request: operations.UsersListFollowedByAuthenticatedRequest) -> operations.UsersListFollowedByAuthenticatedResponse:
        r"""List the people the authenticated user follows
        Lists the people who the authenticated user follows.
        https://docs.github.com/enterprise-server@3.0/rest/reference/users#list-the-people-the-authenticated-user-follows - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/following"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersListFollowedByAuthenticatedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SimpleUser]])
                res.simple_users = out
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

    
    def users_list_followers_for_authenticated_user(self, request: operations.UsersListFollowersForAuthenticatedUserRequest) -> operations.UsersListFollowersForAuthenticatedUserResponse:
        r"""List followers of the authenticated user
        Lists the people following the authenticated user.
        https://docs.github.com/enterprise-server@3.0/rest/reference/users#list-followers-of-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/followers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersListFollowersForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SimpleUser]])
                res.simple_users = out
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

    
    def users_list_followers_for_user(self, request: operations.UsersListFollowersForUserRequest) -> operations.UsersListFollowersForUserResponse:
        r"""List followers of a user
        Lists the people following the specified user.
        https://docs.github.com/enterprise-server@3.0/rest/reference/users#list-followers-of-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}/followers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersListFollowersForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SimpleUser]])
                res.simple_users = out

        return res

    
    def users_list_following_for_user(self, request: operations.UsersListFollowingForUserRequest) -> operations.UsersListFollowingForUserResponse:
        r"""List the people a user follows
        Lists the people who the specified user follows.
        https://docs.github.com/enterprise-server@3.0/rest/reference/users#list-the-people-a-user-follows - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}/following", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersListFollowingForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SimpleUser]])
                res.simple_users = out

        return res

    
    def users_list_gpg_keys_for_authenticated(self, request: operations.UsersListGpgKeysForAuthenticatedRequest) -> operations.UsersListGpgKeysForAuthenticatedResponse:
        r"""List GPG keys for the authenticated user
        Lists the current user's GPG keys. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        https://docs.github.com/enterprise-server@3.0/rest/reference/users#list-gpg-keys-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/gpg_keys"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersListGpgKeysForAuthenticatedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GpgKey]])
                res.gpg_keys = out
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

    
    def users_list_gpg_keys_for_user(self, request: operations.UsersListGpgKeysForUserRequest) -> operations.UsersListGpgKeysForUserResponse:
        r"""List GPG keys for a user
        Lists the GPG keys for a user. This information is accessible by anyone.
        https://docs.github.com/enterprise-server@3.0/rest/reference/users#list-gpg-keys-for-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}/gpg_keys", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersListGpgKeysForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GpgKey]])
                res.gpg_keys = out

        return res

    
    def users_list_public_emails_for_authenticated(self, request: operations.UsersListPublicEmailsForAuthenticatedRequest) -> operations.UsersListPublicEmailsForAuthenticatedResponse:
        r"""List public email addresses for the authenticated user
        Lists your publicly visible email address, which you can set with the [Set primary email visibility for the authenticated user](https://docs.github.com/enterprise-server@3.0/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user) endpoint. This endpoint is accessible with the `user:email` scope.
        https://docs.github.com/enterprise-server@3.0/rest/reference/users#list-public-email-addresses-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/public_emails"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersListPublicEmailsForAuthenticatedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Email]])
                res.emails = out
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

    
    def users_list_public_keys_for_user(self, request: operations.UsersListPublicKeysForUserRequest) -> operations.UsersListPublicKeysForUserResponse:
        r"""List public keys for a user
        Lists the _verified_ public SSH keys for a user. This is accessible by anyone.
        https://docs.github.com/enterprise-server@3.0/rest/reference/users#list-public-keys-for-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}/keys", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersListPublicKeysForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.KeySimple]])
                res.key_simples = out

        return res

    
    def users_list_public_ssh_keys_for_authenticated(self, request: operations.UsersListPublicSSHKeysForAuthenticatedRequest) -> operations.UsersListPublicSSHKeysForAuthenticatedResponse:
        r"""List public SSH keys for the authenticated user
        Lists the public SSH keys for the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        https://docs.github.com/enterprise-server@3.0/rest/reference/users#list-public-ssh-keys-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/keys"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersListPublicSSHKeysForAuthenticatedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Key]])
                res.keys = out
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

    
    def users_unfollow(self, request: operations.UsersUnfollowRequest) -> operations.UsersUnfollowResponse:
        r"""Unfollow a user
        Unfollowing a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.
        https://docs.github.com/enterprise-server@3.0/rest/reference/users#unfollow-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/following/{username}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersUnfollowResponse(status_code=r.status_code, content_type=content_type)
        
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
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def users_update_authenticated(self, request: operations.UsersUpdateAuthenticatedRequest) -> operations.UsersUpdateAuthenticatedResponse:
        r"""Update the authenticated user
        **Note:** If your email is set to private and you send an `email` parameter as part of this request to update your profile, your privacy settings are still enforced: the email address will not be displayed on your public profile or via the API.
        https://docs.github.com/enterprise-server@3.0/rest/reference/users/#update-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersUpdateAuthenticatedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PrivateUser])
                res.private_user = out
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
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    