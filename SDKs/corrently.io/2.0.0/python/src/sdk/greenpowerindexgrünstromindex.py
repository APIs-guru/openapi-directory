import requests
from typing import Optional
from sdk.models import operations
from . import utils

class GreenPowerIndexGrünstromIndex:
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

    
    def gsi_besthour(self, request: operations.GsiBesthourRequest) -> operations.GsiBesthourResponse:
        r"""Get best hour (with most regional green energy) in a given timeframe.
        Simple Wrapper around the GreenPowerIndex for easy integration into almost any SmartHome system that allows access to a JSON/REST Service This endpoint is designed to indicate if a device should be turned on or off. (Switch state).
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/gsi/bestHour"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GsiBesthourResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.gsi_besthour_200_application_json_boolean = out

        return res

    
    def gsi_dispatch(self, request: operations.GsiDispatchRequest) -> operations.GsiDispatchResponse:
        r"""Dispatch (Green Energy Distribution Schedule)
        Dispatch of green energy has two aspects to consider:
          - Availability of gerneration facility (depends on weather and installed capacity)
          - Demand of energy
        Using the green power index (GrünstromIndex) we have received a tool to automate distribution of energy in order to prevent redispatch situations. Doing this alows to opimize resource usage (tactical) and leverage data for investment planning (strategic).
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/gsi/dispatch"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GsiDispatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GsiDispatch200ApplicationJSON])
                res.gsi_dispatch_200_application_json_object = out

        return res

    
    def gsi_marketdata(self, request: operations.GsiMarketdataRequest) -> operations.GsiMarketdataResponse:
        r"""Marketdata
        Compatible to awattar (https://api.awattar.de/v1/marketdata) API interface but data comes from GreenPowerIndex instead of EPEXSpot.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/gsi/marketdata"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GsiMarketdataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GsiMarketdata200ApplicationJSON])
                res.gsi_marketdata_200_application_json_object = out

        return res

    
    def gsi_prediction(self, request: operations.GsiPredictionRequest) -> operations.GsiPredictionResponse:
        r"""Prediction
        Retrieval the GreenPowerIndex (GrünstromIndex) for a given city (by zipcode) in Germany.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/gsi/prediction"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GsiPredictionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GsiPrediction200ApplicationJSON])
                res.gsi_prediction_200_application_json_object = out

        return res

    