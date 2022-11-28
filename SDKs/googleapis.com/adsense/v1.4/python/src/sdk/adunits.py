import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Adunits:
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

    
    def adsense_adunits_customchannels_list(self, request: operations.AdsenseAdunitsCustomchannelsListRequest) -> operations.AdsenseAdunitsCustomchannelsListResponse:
        r"""List all custom channels which the specified ad unit belongs to.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/adclients/{adClientId}/adunits/{adUnitId}/customchannels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAdunitsCustomchannelsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomChannels])
                res.custom_channels = out

        return res

    
    def adsense_adunits_get(self, request: operations.AdsenseAdunitsGetRequest) -> operations.AdsenseAdunitsGetResponse:
        r"""Gets the specified ad unit in the specified ad client.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/adclients/{adClientId}/adunits/{adUnitId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAdunitsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AdUnit])
                res.ad_unit = out

        return res

    
    def adsense_adunits_get_ad_code(self, request: operations.AdsenseAdunitsGetAdCodeRequest) -> operations.AdsenseAdunitsGetAdCodeResponse:
        r"""Get ad code for the specified ad unit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/adclients/{adClientId}/adunits/{adUnitId}/adcode", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAdunitsGetAdCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AdCode])
                res.ad_code = out

        return res

    
    def adsense_adunits_list(self, request: operations.AdsenseAdunitsListRequest) -> operations.AdsenseAdunitsListResponse:
        r"""List all ad units in the specified ad client for this AdSense account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/adclients/{adClientId}/adunits", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAdunitsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AdUnits])
                res.ad_units = out

        return res

    