import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Committee:
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

    
    def get_candidate_candidate_id_committees_(self, request: operations.GetCandidateCandidateIDCommitteesRequest) -> operations.GetCandidateCandidateIDCommitteesResponse:
        r"""
        This endpoint is useful for finding detailed information about a particular committee or
        filer. Use the `committee_id` to find the most recent information about the committee.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/candidate/{candidate_id}/committees/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCandidateCandidateIDCommitteesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitteeDetailPage])
                res.committee_detail_page = out

        return res

    
    def get_candidate_candidate_id_committees_history_(self, request: operations.GetCandidateCandidateIDCommitteesHistoryRequest) -> operations.GetCandidateCandidateIDCommitteesHistoryResponse:
        r"""
        Explore a filer's characteristics over time. This can be particularly useful if the
        committees change treasurers, designation, or `committee_type`.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/candidate/{candidate_id}/committees/history/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCandidateCandidateIDCommitteesHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitteeHistoryPage])
                res.committee_history_page = out

        return res

    
    def get_candidate_candidate_id_committees_history_cycle_(self, request: operations.GetCandidateCandidateIDCommitteesHistoryCycleRequest) -> operations.GetCandidateCandidateIDCommitteesHistoryCycleResponse:
        r"""
        Explore a filer's characteristics over time. This can be particularly useful if the
        committees change treasurers, designation, or `committee_type`.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/candidate/{candidate_id}/committees/history/{cycle}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCandidateCandidateIDCommitteesHistoryCycleResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitteeHistoryPage])
                res.committee_history_page = out

        return res

    
    def get_committee_committee_id_(self, request: operations.GetCommitteeCommitteeIDRequest) -> operations.GetCommitteeCommitteeIDResponse:
        r"""
        This endpoint is useful for finding detailed information about a particular committee or
        filer. Use the `committee_id` to find the most recent information about the committee.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/committee/{committee_id}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommitteeCommitteeIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitteeDetailPage])
                res.committee_detail_page = out

        return res

    
    def get_committee_committee_id_history_(self, request: operations.GetCommitteeCommitteeIDHistoryRequest) -> operations.GetCommitteeCommitteeIDHistoryResponse:
        r"""
        Explore a filer's characteristics over time. This can be particularly useful if the
        committees change treasurers, designation, or `committee_type`.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/committee/{committee_id}/history/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommitteeCommitteeIDHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitteeHistoryPage])
                res.committee_history_page = out

        return res

    
    def get_committee_committee_id_history_cycle_(self, request: operations.GetCommitteeCommitteeIDHistoryCycleRequest) -> operations.GetCommitteeCommitteeIDHistoryCycleResponse:
        r"""
        Explore a filer's characteristics over time. This can be particularly useful if the
        committees change treasurers, designation, or `committee_type`.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/committee/{committee_id}/history/{cycle}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommitteeCommitteeIDHistoryCycleResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitteeHistoryPage])
                res.committee_history_page = out

        return res

    
    def get_committees_(self, request: operations.GetCommitteesRequest) -> operations.GetCommitteesResponse:
        r"""
        Fetch basic information about committees and filers. Use parameters to filter for
        particular characteristics.
        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/committees/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommitteesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitteePage])
                res.committee_page = out

        return res

    