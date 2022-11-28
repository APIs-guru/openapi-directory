import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Data:
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

    
    def analytics_data_ga_get(self, request: operations.AnalyticsDataGaGetRequest) -> operations.AnalyticsDataGaGetResponse:
        r"""Returns Analytics data for a view (profile).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data/ga"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsDataGaGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GaData])
                res.ga_data = out

        return res

    
    def analytics_data_mcf_get(self, request: operations.AnalyticsDataMcfGetRequest) -> operations.AnalyticsDataMcfGetResponse:
        r"""Returns Analytics Multi-Channel Funnels data for a view (profile).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data/mcf"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsDataMcfGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.McfData])
                res.mcf_data = out

        return res

    
    def analytics_data_realtime_get(self, request: operations.AnalyticsDataRealtimeGetRequest) -> operations.AnalyticsDataRealtimeGetResponse:
        r"""Returns real time data for a view (profile).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data/realtime"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalyticsDataRealtimeGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RealtimeData])
                res.realtime_data = out

        return res

    