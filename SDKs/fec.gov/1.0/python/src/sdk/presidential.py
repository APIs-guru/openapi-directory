import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Presidential:
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

    
    def get_presidential_contributions_by_candidate_(self, request: operations.GetPresidentialContributionsByCandidateRequest) -> operations.GetPresidentialContributionsByCandidateResponse:
        r"""
        Net receipts per candidate.
        
        Filter with `contributor_state='US'` for national totals
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/presidential/contributions/by_candidate/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPresidentialContributionsByCandidateResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PresidentialByCandidatePage])
                res.presidential_by_candidate_page = out

        return res

    
    def get_presidential_contributions_by_size_(self, request: operations.GetPresidentialContributionsBySizeRequest) -> operations.GetPresidentialContributionsBySizeResponse:
        r"""
        Contribution receipts by size per candidate.
        
        Filter by candidate_id, election_year and/or size
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/presidential/contributions/by_size/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPresidentialContributionsBySizeResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PresidentialBySizePage])
                res.presidential_by_size_page = out

        return res

    
    def get_presidential_contributions_by_state_(self, request: operations.GetPresidentialContributionsByStateRequest) -> operations.GetPresidentialContributionsByStateResponse:
        r"""
        Contribution receipts by state per candidate.
        
        Filter by candidate_id and/or election_year
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/presidential/contributions/by_state/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPresidentialContributionsByStateResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PresidentialByStatePage])
                res.presidential_by_state_page = out

        return res

    
    def get_presidential_coverage_end_date_(self, request: operations.GetPresidentialCoverageEndDateRequest) -> operations.GetPresidentialCoverageEndDateResponse:
        r"""
        Coverage end date per candidate.
        
        Filter by candidate_id and/or election_year
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/presidential/coverage_end_date/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPresidentialCoverageEndDateResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PresidentialCoveragePage])
                res.presidential_coverage_page = out

        return res

    
    def get_presidential_financial_summary_(self, request: operations.GetPresidentialFinancialSummaryRequest) -> operations.GetPresidentialFinancialSummaryResponse:
        r"""
        Financial summary per candidate.
        
        Filter by candidate_id and/or election_year
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/presidential/financial_summary/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPresidentialFinancialSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PresidentialSummaryPage])
                res.presidential_summary_page = out

        return res

    