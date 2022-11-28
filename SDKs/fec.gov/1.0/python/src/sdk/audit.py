import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Audit:
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

    
    def get_audit_case_(self, request: operations.GetAuditCaseRequest) -> operations.GetAuditCaseResponse:
        r"""
        This endpoint contains Final Audit Reports approved by the Commission since inception.
        The search can be based on information about the audited committee (Name, FEC ID Number, Type, 
        Election Cycle) or the issues covered in the report.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/audit-case/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAuditCaseResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuditCasePage])
                res.audit_case_page = out

        return res

    
    def get_audit_category_(self, request: operations.GetAuditCategoryRequest) -> operations.GetAuditCategoryResponse:
        r"""
        This lists the options for the categories and subcategories available in the /audit-search/ endpoint.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/audit-category/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAuditCategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuditCategoryPage])
                res.audit_category_page = out

        return res

    
    def get_audit_primary_category_(self, request: operations.GetAuditPrimaryCategoryRequest) -> operations.GetAuditPrimaryCategoryResponse:
        r"""
        This lists the options for the primary categories available in the /audit-search/ endpoint.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/audit-primary-category/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAuditPrimaryCategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuditPrimaryCategoryPage])
                res.audit_primary_category_page = out

        return res

    
    def get_names_audit_candidates_(self, request: operations.GetNamesAuditCandidatesRequest) -> operations.GetNamesAuditCandidatesResponse:
        r"""
        Search for candidates or committees by name. If you're looking for information on a
        particular person or group, using a name to find the `candidate_id` or `committee_id` on
        this endpoint can be a helpful first step.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/names/audit_candidates/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNamesAuditCandidatesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuditCandidateSearchList])
                res.audit_candidate_search_list = out

        return res

    
    def get_names_audit_committees_(self, request: operations.GetNamesAuditCommitteesRequest) -> operations.GetNamesAuditCommitteesResponse:
        r"""
        Search for candidates or committees by name. If you're looking for information on a
        particular person or group, using a name to find the `candidate_id` or `committee_id` on
        this endpoint can be a helpful first step.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/names/audit_committees/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNamesAuditCommitteesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuditCommitteeSearchList])
                res.audit_committee_search_list = out

        return res

    