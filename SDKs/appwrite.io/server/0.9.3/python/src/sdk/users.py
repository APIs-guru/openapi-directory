import requests
from typing import Any,Optional
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

    
    def users_create(self, request: operations.UsersCreateRequest) -> operations.UsersCreateResponse:
        r"""Create User
        Create a new user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out

        return res

    
    def users_delete(self, request: operations.UsersDeleteRequest) -> operations.UsersDeleteResponse:
        r"""Delete User
        Delete a user by its unique ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def users_delete_session(self, request: operations.UsersDeleteSessionRequest) -> operations.UsersDeleteSessionResponse:
        r"""Delete User Session
        Delete a user sessions by its unique ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/sessions/{sessionId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersDeleteSessionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def users_delete_sessions(self, request: operations.UsersDeleteSessionsRequest) -> operations.UsersDeleteSessionsResponse:
        r"""Delete User Sessions
        Delete all user's sessions by using the user's unique ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/sessions", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersDeleteSessionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def users_get(self, request: operations.UsersGetRequest) -> operations.UsersGetResponse:
        r"""Get User
        Get a user by its unique ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out

        return res

    
    def users_get_logs(self, request: operations.UsersGetLogsRequest) -> operations.UsersGetLogsResponse:
        r"""Get User Logs
        Get a user activity logs list by its unique ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/logs", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersGetLogsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LogList])
                res.log_list = out

        return res

    
    def users_get_prefs(self, request: operations.UsersGetPrefsRequest) -> operations.UsersGetPrefsResponse:
        r"""Get User Preferences
        Get the user preferences by its unique ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/prefs", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersGetPrefsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.preferences = out

        return res

    
    def users_get_sessions(self, request: operations.UsersGetSessionsRequest) -> operations.UsersGetSessionsResponse:
        r"""Get User Sessions
        Get the user sessions list by its unique ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/sessions", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersGetSessionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SessionList])
                res.session_list = out

        return res

    
    def users_list(self, request: operations.UsersListRequest) -> operations.UsersListResponse:
        r"""List Users
        Get a list of all the project's users. You can use the query params to filter your results.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserList])
                res.user_list = out

        return res

    
    def users_update_prefs(self, request: operations.UsersUpdatePrefsRequest) -> operations.UsersUpdatePrefsResponse:
        r"""Update User Preferences
        Update the user preferences by its unique ID. You can pass only the specific settings you wish to update.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/prefs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersUpdatePrefsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.preferences = out

        return res

    
    def users_update_status(self, request: operations.UsersUpdateStatusRequest) -> operations.UsersUpdateStatusResponse:
        r"""Update User Status
        Update the user status by its unique ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/status", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersUpdateStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out

        return res

    
    def users_update_verification(self, request: operations.UsersUpdateVerificationRequest) -> operations.UsersUpdateVerificationResponse:
        r"""Update Email Verification
        Update the user email verification status by its unique ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/verification", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersUpdateVerificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out

        return res

    