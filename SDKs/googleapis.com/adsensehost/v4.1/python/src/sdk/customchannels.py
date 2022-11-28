import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Customchannels:
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

    
    def adsensehost_customchannels_delete(self, request: operations.AdsensehostCustomchannelsDeleteRequest) -> operations.AdsensehostCustomchannelsDeleteResponse:
        r"""Delete a specific custom channel from the host AdSense account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/adclients/{adClientId}/customchannels/{customChannelId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsensehostCustomchannelsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomChannel])
                res.custom_channel = out

        return res

    
    def adsensehost_customchannels_get(self, request: operations.AdsensehostCustomchannelsGetRequest) -> operations.AdsensehostCustomchannelsGetResponse:
        r"""Get a specific custom channel from the host AdSense account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/adclients/{adClientId}/customchannels/{customChannelId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsensehostCustomchannelsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomChannel])
                res.custom_channel = out

        return res

    
    def adsensehost_customchannels_insert(self, request: operations.AdsensehostCustomchannelsInsertRequest) -> operations.AdsensehostCustomchannelsInsertResponse:
        r"""Add a new custom channel to the host AdSense account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/adclients/{adClientId}/customchannels", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsensehostCustomchannelsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomChannel])
                res.custom_channel = out

        return res

    
    def adsensehost_customchannels_list(self, request: operations.AdsensehostCustomchannelsListRequest) -> operations.AdsensehostCustomchannelsListResponse:
        r"""List all host custom channels in this AdSense account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/adclients/{adClientId}/customchannels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsensehostCustomchannelsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomChannels])
                res.custom_channels = out

        return res

    
    def adsensehost_customchannels_patch(self, request: operations.AdsensehostCustomchannelsPatchRequest) -> operations.AdsensehostCustomchannelsPatchResponse:
        r"""Update a custom channel in the host AdSense account. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/adclients/{adClientId}/customchannels", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsensehostCustomchannelsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomChannel])
                res.custom_channel = out

        return res

    
    def adsensehost_customchannels_update(self, request: operations.AdsensehostCustomchannelsUpdateRequest) -> operations.AdsensehostCustomchannelsUpdateResponse:
        r"""Update a custom channel in the host AdSense account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/adclients/{adClientId}/customchannels", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsensehostCustomchannelsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomChannel])
                res.custom_channel = out

        return res

    