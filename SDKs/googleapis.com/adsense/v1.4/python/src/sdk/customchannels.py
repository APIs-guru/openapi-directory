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

    
    def adsense_customchannels_adunits_list(self, request: operations.AdsenseCustomchannelsAdunitsListRequest) -> operations.AdsenseCustomchannelsAdunitsListResponse:
        r"""List all ad units in the specified custom channel.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/adclients/{adClientId}/customchannels/{customChannelId}/adunits", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseCustomchannelsAdunitsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AdUnits])
                res.ad_units = out

        return res

    
    def adsense_customchannels_get(self, request: operations.AdsenseCustomchannelsGetRequest) -> operations.AdsenseCustomchannelsGetResponse:
        r"""Get the specified custom channel from the specified ad client.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/adclients/{adClientId}/customchannels/{customChannelId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseCustomchannelsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomChannel])
                res.custom_channel = out

        return res

    
    def adsense_customchannels_list(self, request: operations.AdsenseCustomchannelsListRequest) -> operations.AdsenseCustomchannelsListResponse:
        r"""List all custom channels in the specified ad client for this AdSense account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/adclients/{adClientId}/customchannels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseCustomchannelsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomChannels])
                res.custom_channels = out

        return res

    