import requests
from typing import Any,List,Optional
from sdk.models import operations
from . import utils

class Intent:
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

    
    def add_media_intent_handling(self, request: operations.AddMediaIntentHandlingRequest) -> operations.AddMediaIntentHandlingResponse:
        r"""addMedia
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/intent/addMedia"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddMediaIntentHandlingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.add_media_intent_handling_invocation_responses = out

        return res

    
    def play_media_intent_handling(self, request: operations.PlayMediaIntentHandlingRequest) -> operations.PlayMediaIntentHandlingResponse:
        r"""playMedia
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/intent/playMedia"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayMediaIntentHandlingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.play_media_intent_handling_invocation_responses = out

        return res

    
    def update_media_affinity_intent_handling(self, request: operations.UpdateMediaAffinityIntentHandlingRequest) -> operations.UpdateMediaAffinityIntentHandlingResponse:
        r"""updateMediaAffinity
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/intent/updateMediaAffinity"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateMediaAffinityIntentHandlingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.update_media_affinity_intent_handling_invocation_responses = out

        return res

    