import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Candidate:
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

    
    def get_candidate_candidate_id_(self, request: operations.GetCandidateCandidateIDRequest) -> operations.GetCandidateCandidateIDResponse:
        r"""
        This endpoint is useful for finding detailed information about a particular candidate. Use the
        `candidate_id` to find the most recent information about that candidate.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/candidate/{candidate_id}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCandidateCandidateIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CandidateDetailPage])
                res.candidate_detail_page = out

        return res

    
    def get_candidate_candidate_id_history_(self, request: operations.GetCandidateCandidateIDHistoryRequest) -> operations.GetCandidateCandidateIDHistoryResponse:
        r"""
        Find out a candidate's characteristics over time. This is particularly useful if the
        candidate runs for the same office in different districts or you want to know more about a candidate's
        previous races.
        
        This information is organized by `candidate_id`, so it won't help you find a candidate
        who ran for different offices over time; candidates get a new ID for each office.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/candidate/{candidate_id}/history/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCandidateCandidateIDHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CandidateHistoryPage])
                res.candidate_history_page = out

        return res

    
    def get_candidate_candidate_id_history_cycle_(self, request: operations.GetCandidateCandidateIDHistoryCycleRequest) -> operations.GetCandidateCandidateIDHistoryCycleResponse:
        r"""
        Find out a candidate's characteristics over time. This is particularly useful if the
        candidate runs for the same office in different districts or you want to know more about a candidate's
        previous races.
        
        This information is organized by `candidate_id`, so it won't help you find a candidate
        who ran for different offices over time; candidates get a new ID for each office.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/candidate/{candidate_id}/history/{cycle}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCandidateCandidateIDHistoryCycleResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CandidateHistoryPage])
                res.candidate_history_page = out

        return res

    
    def get_candidate_candidate_id_totals_(self, request: operations.GetCandidateCandidateIDTotalsRequest) -> operations.GetCandidateCandidateIDTotalsResponse:
        r"""
        This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
        which are aggregated by two-year period. We refer to two-year periods as a `cycle`.
        
        The cycle is named after the even-numbered year and includes the year before it. To obtain
        totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
        is the next year — for example, in 2015, the current cycle is 2016.
        
        For presidential and Senate candidates, multiple two-year cycles exist between elections.
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/candidate/{candidate_id}/totals/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCandidateCandidateIDTotalsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitteeTotalsPage])
                res.committee_totals_page = out

        return res

    
    def get_candidates_(self, request: operations.GetCandidatesRequest) -> operations.GetCandidatesResponse:
        r"""
        Fetch basic information about candidates, and use parameters to filter results to the
        candidates you're looking for.
        
        Each result reflects a unique FEC candidate ID. That ID is particular to the candidate for a
        particular office sought. If a candidate runs for the same office multiple times, the ID
        stays the same. If the same person runs for another office — for example, a House
        candidate runs for a Senate office — that candidate will get a unique ID for each office.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/candidates/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCandidatesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CandidatePage])
                res.candidate_page = out

        return res

    
    def get_candidates_search_(self, request: operations.GetCandidatesSearchRequest) -> operations.GetCandidatesSearchResponse:
        r"""
        Fetch basic information about candidates and their principal committees.
        
        Each result reflects a unique FEC candidate ID. That ID is assigned to the candidate for a
        particular office sought. If a candidate runs for the same office over time, that ID
        stays the same. If the same person runs for multiple offices — for example, a House
        candidate runs for a Senate office — that candidate will get a unique ID for each office.
        
        The candidate endpoints primarily use data from FEC registration
        [Form 1](http://www.fec.gov/pdf/forms/fecfrm1.pdf) for committee information and
        [Form 2](http://www.fec.gov/pdf/forms/fecfrm2.pdf) for candidate information.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/candidates/search/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCandidatesSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CandidatePage])
                res.candidate_page = out

        return res

    
    def get_candidates_totals_(self, request: operations.GetCandidatesTotalsRequest) -> operations.GetCandidatesTotalsResponse:
        r"""
        Aggregated candidate receipts and disbursements grouped by cycle.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/candidates/totals/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCandidatesTotalsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CandidateHistoryTotalPage])
                res.candidate_history_total_page = out

        return res

    
    def get_candidates_totals_by_office_(self, request: operations.GetCandidatesTotalsByOfficeRequest) -> operations.GetCandidatesTotalsByOfficeResponse:
        r""" Aggregated candidate receipts and disbursements grouped by office by cycle.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/candidates/totals/by_office/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCandidatesTotalsByOfficeResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TotalByOfficePage])
                res.total_by_office_page = out

        return res

    
    def get_candidates_totals_by_office_by_party_(self, request: operations.GetCandidatesTotalsByOfficeByPartyRequest) -> operations.GetCandidatesTotalsByOfficeByPartyResponse:
        r""" Aggregated candidate receipts and disbursements grouped by office by party by cycle.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/candidates/totals/by_office/by_party/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCandidatesTotalsByOfficeByPartyResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TotalByOfficeByPartyPage])
                res.total_by_office_by_party_page = out

        return res

    
    def get_committee_committee_id_candidates_(self, request: operations.GetCommitteeCommitteeIDCandidatesRequest) -> operations.GetCommitteeCommitteeIDCandidatesResponse:
        r"""
        This endpoint is useful for finding detailed information about a particular candidate. Use the
        `candidate_id` to find the most recent information about that candidate.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/committee/{committee_id}/candidates/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommitteeCommitteeIDCandidatesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CandidateDetailPage])
                res.candidate_detail_page = out

        return res

    
    def get_committee_committee_id_candidates_history_(self, request: operations.GetCommitteeCommitteeIDCandidatesHistoryRequest) -> operations.GetCommitteeCommitteeIDCandidatesHistoryResponse:
        r"""
        Find out a candidate's characteristics over time. This is particularly useful if the
        candidate runs for the same office in different districts or you want to know more about a candidate's
        previous races.
        
        This information is organized by `candidate_id`, so it won't help you find a candidate
        who ran for different offices over time; candidates get a new ID for each office.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/committee/{committee_id}/candidates/history/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommitteeCommitteeIDCandidatesHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CandidateHistoryPage])
                res.candidate_history_page = out

        return res

    
    def get_committee_committee_id_candidates_history_cycle_(self, request: operations.GetCommitteeCommitteeIDCandidatesHistoryCycleRequest) -> operations.GetCommitteeCommitteeIDCandidatesHistoryCycleResponse:
        r"""
        Find out a candidate's characteristics over time. This is particularly useful if the
        candidate runs for the same office in different districts or you want to know more about a candidate's
        previous races.
        
        This information is organized by `candidate_id`, so it won't help you find a candidate
        who ran for different offices over time; candidates get a new ID for each office.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/committee/{committee_id}/candidates/history/{cycle}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommitteeCommitteeIDCandidatesHistoryCycleResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CandidateHistoryPage])
                res.candidate_history_page = out

        return res

    