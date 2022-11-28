import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Filings:
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

    
    def get_candidate_candidate_id_filings_(self, request: operations.GetCandidateCandidateIDFilingsRequest) -> operations.GetCandidateCandidateIDFilingsResponse:
        r"""
        All official records and reports filed by or delivered to the FEC.
        
        Note: because the filings data includes many records, counts for large
        result sets are approximate; you will want to page through the records until no records are returned.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/candidate/{candidate_id}/filings/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCandidateCandidateIDFilingsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FilingsPage])
                res.filings_page = out

        return res

    
    def get_committee_committee_id_filings_(self, request: operations.GetCommitteeCommitteeIDFilingsRequest) -> operations.GetCommitteeCommitteeIDFilingsResponse:
        r"""
        All official records and reports filed by or delivered to the FEC.
        
        Note: because the filings data includes many records, counts for large
        result sets are approximate; you will want to page through the records until no records are returned.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/committee/{committee_id}/filings/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommitteeCommitteeIDFilingsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FilingsPage])
                res.filings_page = out

        return res

    
    def get_filings_(self, request: operations.GetFilingsRequest) -> operations.GetFilingsResponse:
        r"""
        All official records and reports filed by or delivered to the FEC.
        
        Note: because the filings data includes many records, counts for large
        result sets are approximate; you will want to page through the records until no records are returned.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/filings/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFilingsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FilingsPage])
                res.filings_page = out

        return res

    
    def get_operations_log_(self, request: operations.GetOperationsLogRequest) -> operations.GetOperationsLogResponse:
        r"""
        The Operations log contains details of each report loaded into the database. It is primarily
        used as status check to determine when all of the data processes, from initial entry through
        review are complete.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/operations-log/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOperationsLogResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OperationsLogPage])
                res.operations_log_page = out

        return res

    