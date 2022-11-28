import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class AttendeesSignins:
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

    
    def delete_signin_signin_id_(self, request: operations.DeleteSigninSigninIDRequest) -> operations.DeleteSigninSigninIDResponse:
        r"""Delete a signin record
        Delete a signin record      
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/signin/{signinId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSigninSigninIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvalidToken])
                res.invalid_token = out

        return res

    
    def get_signin_signin_id_(self, request: operations.GetSigninSigninIDRequest) -> operations.GetSigninSigninIDResponse:
        r"""Retrieve the information associated with a signin record
        Retrieve the information associated with a signin record
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/signin/{signinId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSigninSigninIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Signin])
                res.signin = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvalidToken])
                res.invalid_token = out

        return res

    
    def get_signins(self, request: operations.GetSigninsRequest) -> operations.GetSigninsResponse:
        r"""Get signin info
        Returns a list of signin objects sorted by signin ID descending.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/signins"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSigninsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Signin]])
                res.signins = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvalidToken])
                res.invalid_token = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.KeyFailure])
                res.key_failure = out

        return res

    
    def post_signin(self, request: operations.PostSigninRequest) -> operations.PostSigninResponse:
        r"""Create a new signin record
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/signin"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSigninResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SigninResponse])
                res.signin_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvalidToken])
                res.invalid_token = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.KeyFailure])
                res.key_failure = out

        return res

    
    def put_signin_signin_id_(self, request: operations.PutSigninSigninIDRequest) -> operations.PutSigninSigninIDResponse:
        r"""Update a signin record
        Update a signin record
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/signin/{signinId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSigninSigninIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserRecord])
                res.user_record = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvalidToken])
                res.invalid_token = out

        return res

    