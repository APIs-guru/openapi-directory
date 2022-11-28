import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Electioneering:
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

    
    def get_electioneering_(self, request: operations.GetElectioneeringRequest) -> operations.GetElectioneeringResponse:
        r"""
        An electioneering communication is any broadcast, cable or satellite communication that fulfills each of the following conditions:
        
        _The communication refers to a clearly identified federal candidate._
        
        _The communication is publicly distributed by a television station, radio station, cable television system or satellite system for a fee._
        
        _The communication is distributed within 60 days prior to a general election or 30 days prior to a primary election to federal office._
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/electioneering/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetElectioneeringResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ElectioneeringPage])
                res.electioneering_page = out

        return res

    
    def get_electioneering_aggregates_(self, request: operations.GetElectioneeringAggregatesRequest) -> operations.GetElectioneeringAggregatesResponse:
        r"""Electioneering communications costs aggregates
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/electioneering/aggregates/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetElectioneeringAggregatesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ElectioneeringByCandidatePage])
                res.electioneering_by_candidate_page = out

        return res

    
    def get_electioneering_by_candidate_(self, request: operations.GetElectioneeringByCandidateRequest) -> operations.GetElectioneeringByCandidateResponse:
        r"""Electioneering costs aggregated by candidate
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/electioneering/by_candidate/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetElectioneeringByCandidateResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ElectioneeringByCandidatePage])
                res.electioneering_by_candidate_page = out

        return res

    
    def get_electioneering_totals_by_candidate_(self, request: operations.GetElectioneeringTotalsByCandidateRequest) -> operations.GetElectioneeringTotalsByCandidateResponse:
        r"""
        Total electioneering communications spent on candidates by cycle
        or candidate election year
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/electioneering/totals/by_candidate/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetElectioneeringTotalsByCandidateResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EcTotalsByCandidatePage])
                res.ec_totals_by_candidate_page = out

        return res

    