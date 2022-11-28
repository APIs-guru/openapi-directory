import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class TeamMembers:
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

    
    def delete_user_user_id_(self, request: operations.DeleteUserUserIDRequest) -> operations.DeleteUserUserIDResponse:
        r"""Delete a team member's user record
        To preserve referential integrity in the database, the user account  will not be deleted from the database. Rather, the password will be set to the empty string, effectively preventing that user from logging in. Furthermore, all active sessions for that user will be deleted, as will any password reset tokens. 
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/{userId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserUserIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvalidToken])
                res.invalid_token = out

        return res

    
    def get_user_user_id_(self, request: operations.GetUserUserIDRequest) -> operations.GetUserUserIDResponse:
        r"""Retrieve the information associated with a team member's user record
        Retrieve the information associated with a user's account
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/{userId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserUserIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserRecord])
                res.user_record = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvalidToken])
                res.invalid_token = out

        return res

    
    def get_users(self) -> operations.GetUsersResponse:
        r"""Retrieve the information associated with all team members' user records
        Retrieve the information associated with all team members' user records
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UserRecord]])
                res.user_records = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvalidToken])
                res.invalid_token = out

        return res

    
    def post_user(self, request: operations.PostUserRequest) -> operations.PostUserResponse:
        r"""Create a user
        Use this endpoint to create a team member (user) record
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateUserResponse])
                res.create_user_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvalidToken])
                res.invalid_token = out

        return res

    