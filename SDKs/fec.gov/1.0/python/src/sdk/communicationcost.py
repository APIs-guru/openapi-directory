import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class CommunicationCost:
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

    
    def get_communication_costs_(self, request: operations.GetCommunicationCostsRequest) -> operations.GetCommunicationCostsResponse:
        r"""
        52 U.S.C. 30118 allows \"communications by a corporation to its stockholders and executive or administrative personnel and their families or by a labor organization to its members and their families on any subject,\" including the express advocacy of the election or defeat of any Federal candidate.  The costs of such communications must be reported to the Federal Election Commission under certain circumstances.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/communication_costs/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommunicationCostsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommunicationCostPage])
                res.communication_cost_page = out

        return res

    
    def get_communication_costs_aggregates_(self, request: operations.GetCommunicationCostsAggregatesRequest) -> operations.GetCommunicationCostsAggregatesResponse:
        r"""Communication cost aggregated by candidate ID and committee ID.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/communication_costs/aggregates/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommunicationCostsAggregatesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommunicationCostByCandidatePage])
                res.communication_cost_by_candidate_page = out

        return res

    
    def get_communication_costs_by_candidate_(self, request: operations.GetCommunicationCostsByCandidateRequest) -> operations.GetCommunicationCostsByCandidateResponse:
        r"""Communication cost aggregated by candidate ID and committee ID.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/communication_costs/by_candidate/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommunicationCostsByCandidateResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommunicationCostByCandidatePage])
                res.communication_cost_by_candidate_page = out

        return res

    
    def get_communication_costs_totals_by_candidate_(self, request: operations.GetCommunicationCostsTotalsByCandidateRequest) -> operations.GetCommunicationCostsTotalsByCandidateResponse:
        r"""
        Total communications costs aggregated across committees on supported or opposed candidates by cycle or candidate election year.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/communication_costs/totals/by_candidate/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommunicationCostsTotalsByCandidateResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CcTotalsByCandidatePage])
                res.cc_totals_by_candidate_page = out

        return res

    