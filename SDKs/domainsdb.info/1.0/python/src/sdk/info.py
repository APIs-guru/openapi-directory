import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Info:
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

    
    def get_info_tld_(self) -> operations.GetInfoTldResponse:
        r"""Returns overall Tld info
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/info/tld/"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInfoTldResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ZoneInfo]])
                res.zone_infos = out

        return res

    
    def get_info_tld_zone_(self, request: operations.GetInfoTldZoneRequest) -> operations.GetInfoTldZoneResponse:
        r"""Returns statistics for specific zone
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/info/tld/{zone}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInfoTldZoneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ZoneInfo])
                res.zone_info = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_info_item(self, request: operations.GetAPIInfoItemRequest) -> operations.GetAPIInfoItemResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/info/api"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIInfoItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIKeyInfo])
                res.api_key_info = out

        return res

    
    def get_statistics_collection(self, request: operations.GetStatisticsCollectionRequest) -> operations.GetStatisticsCollectionResponse:
        r"""Returns overall stagtistics
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/info/stat/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatisticsCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ZoneStats]])
                res.zone_stats = out

        return res

    
    def get_statistics_item(self, request: operations.GetStatisticsItemRequest) -> operations.GetStatisticsItemResponse:
        r"""Returns statistics for specific zone
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/info/stat/{zone}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatisticsItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ZoneStats])
                res.zone_stats = out
        elif r.status_code == 404:
            pass

        return res

    