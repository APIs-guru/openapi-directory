import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://fec.gov/v1",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    
    def config_security(self, security: shared.Security):
        self.client = utils.configure_security_client(security)

    
    def get_audit_case_(self, request: operations.GetAuditCaseRequest) -> operations.GetAuditCaseResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/audit-case/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAuditCaseResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuditCasePage])
                res.audit_case_page = out

        return res

    
    def get_audit_category_(self, request: operations.GetAuditCategoryRequest) -> operations.GetAuditCategoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/audit-category/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAuditCategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuditCategoryPage])
                res.audit_category_page = out

        return res

    
    def get_audit_primary_category_(self, request: operations.GetAuditPrimaryCategoryRequest) -> operations.GetAuditPrimaryCategoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/audit-primary-category/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAuditPrimaryCategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuditPrimaryCategoryPage])
                res.audit_primary_category_page = out

        return res

    
    def get_calendar_dates_(self, request: operations.GetCalendarDatesRequest) -> operations.GetCalendarDatesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/calendar-dates/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCalendarDatesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarDatePage])
                res.calendar_date_page = out

        return res

    
    def get_calendar_dates_export_(self, request: operations.GetCalendarDatesExportRequest) -> operations.GetCalendarDatesExportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/calendar-dates/export/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCalendarDatesExportResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarDatePage])
                res.calendar_date_page = out

        return res

    
    def get_candidate_candidate_id_(self, request: operations.GetCandidateCandidateIDRequest) -> operations.GetCandidateCandidateIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/candidate/{candidate_id}/", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCandidateCandidateIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CandidateDetailPage])
                res.candidate_detail_page = out

        return res

    
    def get_candidate_candidate_id_committees_(self, request: operations.GetCandidateCandidateIDCommitteesRequest) -> operations.GetCandidateCandidateIDCommitteesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/candidate/{candidate_id}/committees/", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCandidateCandidateIDCommitteesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitteeDetailPage])
                res.committee_detail_page = out

        return res

    
    def get_candidate_candidate_id_committees_history_(self, request: operations.GetCandidateCandidateIDCommitteesHistoryRequest) -> operations.GetCandidateCandidateIDCommitteesHistoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/candidate/{candidate_id}/committees/history/", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCandidateCandidateIDCommitteesHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitteeHistoryPage])
                res.committee_history_page = out

        return res

    
    def get_candidate_candidate_id_committees_history_cycle_(self, request: operations.GetCandidateCandidateIDCommitteesHistoryCycleRequest) -> operations.GetCandidateCandidateIDCommitteesHistoryCycleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/candidate/{candidate_id}/committees/history/{cycle}/", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCandidateCandidateIDCommitteesHistoryCycleResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitteeHistoryPage])
                res.committee_history_page = out

        return res

    
    def get_candidate_candidate_id_filings_(self, request: operations.GetCandidateCandidateIDFilingsRequest) -> operations.GetCandidateCandidateIDFilingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/candidate/{candidate_id}/filings/", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCandidateCandidateIDFilingsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FilingsPage])
                res.filings_page = out

        return res

    
    def get_candidate_candidate_id_history_(self, request: operations.GetCandidateCandidateIDHistoryRequest) -> operations.GetCandidateCandidateIDHistoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/candidate/{candidate_id}/history/", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCandidateCandidateIDHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CandidateHistoryPage])
                res.candidate_history_page = out

        return res

    
    def get_candidate_candidate_id_history_cycle_(self, request: operations.GetCandidateCandidateIDHistoryCycleRequest) -> operations.GetCandidateCandidateIDHistoryCycleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/candidate/{candidate_id}/history/{cycle}/", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCandidateCandidateIDHistoryCycleResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CandidateHistoryPage])
                res.candidate_history_page = out

        return res

    
    def get_candidate_candidate_id_totals_(self, request: operations.GetCandidateCandidateIDTotalsRequest) -> operations.GetCandidateCandidateIDTotalsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/candidate/{candidate_id}/totals/", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCandidateCandidateIDTotalsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitteeTotalsPage])
                res.committee_totals_page = out

        return res

    
    def get_candidates_(self, request: operations.GetCandidatesRequest) -> operations.GetCandidatesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/candidates/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCandidatesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CandidatePage])
                res.candidate_page = out

        return res

    
    def get_candidates_search_(self, request: operations.GetCandidatesSearchRequest) -> operations.GetCandidatesSearchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/candidates/search/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCandidatesSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CandidatePage])
                res.candidate_page = out

        return res

    
    def get_candidates_totals_(self, request: operations.GetCandidatesTotalsRequest) -> operations.GetCandidatesTotalsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/candidates/totals/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCandidatesTotalsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CandidateHistoryTotalPage])
                res.candidate_history_total_page = out

        return res

    
    def get_candidates_totals_by_office_(self, request: operations.GetCandidatesTotalsByOfficeRequest) -> operations.GetCandidatesTotalsByOfficeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/candidates/totals/by_office/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCandidatesTotalsByOfficeResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TotalByOfficePage])
                res.total_by_office_page = out

        return res

    
    def get_candidates_totals_by_office_by_party_(self, request: operations.GetCandidatesTotalsByOfficeByPartyRequest) -> operations.GetCandidatesTotalsByOfficeByPartyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/candidates/totals/by_office/by_party/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCandidatesTotalsByOfficeByPartyResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TotalByOfficeByPartyPage])
                res.total_by_office_by_party_page = out

        return res

    
    def get_committee_committee_id_(self, request: operations.GetCommitteeCommitteeIDRequest) -> operations.GetCommitteeCommitteeIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/committee/{committee_id}/", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommitteeCommitteeIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitteeDetailPage])
                res.committee_detail_page = out

        return res

    
    def get_committee_committee_id_candidates_(self, request: operations.GetCommitteeCommitteeIDCandidatesRequest) -> operations.GetCommitteeCommitteeIDCandidatesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/committee/{committee_id}/candidates/", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommitteeCommitteeIDCandidatesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CandidateDetailPage])
                res.candidate_detail_page = out

        return res

    
    def get_committee_committee_id_candidates_history_(self, request: operations.GetCommitteeCommitteeIDCandidatesHistoryRequest) -> operations.GetCommitteeCommitteeIDCandidatesHistoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/committee/{committee_id}/candidates/history/", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommitteeCommitteeIDCandidatesHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CandidateHistoryPage])
                res.candidate_history_page = out

        return res

    
    def get_committee_committee_id_candidates_history_cycle_(self, request: operations.GetCommitteeCommitteeIDCandidatesHistoryCycleRequest) -> operations.GetCommitteeCommitteeIDCandidatesHistoryCycleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/committee/{committee_id}/candidates/history/{cycle}/", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommitteeCommitteeIDCandidatesHistoryCycleResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CandidateHistoryPage])
                res.candidate_history_page = out

        return res

    
    def get_committee_committee_id_filings_(self, request: operations.GetCommitteeCommitteeIDFilingsRequest) -> operations.GetCommitteeCommitteeIDFilingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/committee/{committee_id}/filings/", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommitteeCommitteeIDFilingsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FilingsPage])
                res.filings_page = out

        return res

    
    def get_committee_committee_id_history_(self, request: operations.GetCommitteeCommitteeIDHistoryRequest) -> operations.GetCommitteeCommitteeIDHistoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/committee/{committee_id}/history/", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommitteeCommitteeIDHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitteeHistoryPage])
                res.committee_history_page = out

        return res

    
    def get_committee_committee_id_history_cycle_(self, request: operations.GetCommitteeCommitteeIDHistoryCycleRequest) -> operations.GetCommitteeCommitteeIDHistoryCycleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/committee/{committee_id}/history/{cycle}/", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommitteeCommitteeIDHistoryCycleResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitteeHistoryPage])
                res.committee_history_page = out

        return res

    
    def get_committee_committee_id_reports_(self, request: operations.GetCommitteeCommitteeIDReportsRequest) -> operations.GetCommitteeCommitteeIDReportsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/committee/{committee_id}/reports/", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommitteeCommitteeIDReportsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitteeReportsPage])
                res.committee_reports_page = out

        return res

    
    def get_committee_committee_id_totals_(self, request: operations.GetCommitteeCommitteeIDTotalsRequest) -> operations.GetCommitteeCommitteeIDTotalsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/committee/{committee_id}/totals/", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommitteeCommitteeIDTotalsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitteeTotalsPage])
                res.committee_totals_page = out

        return res

    
    def get_committees_(self, request: operations.GetCommitteesRequest) -> operations.GetCommitteesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/committees/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommitteesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitteePage])
                res.committee_page = out

        return res

    
    def get_communication_costs_(self, request: operations.GetCommunicationCostsRequest) -> operations.GetCommunicationCostsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/communication_costs/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommunicationCostsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommunicationCostPage])
                res.communication_cost_page = out

        return res

    
    def get_communication_costs_aggregates_(self, request: operations.GetCommunicationCostsAggregatesRequest) -> operations.GetCommunicationCostsAggregatesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/communication_costs/aggregates/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommunicationCostsAggregatesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommunicationCostByCandidatePage])
                res.communication_cost_by_candidate_page = out

        return res

    
    def get_communication_costs_by_candidate_(self, request: operations.GetCommunicationCostsByCandidateRequest) -> operations.GetCommunicationCostsByCandidateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/communication_costs/by_candidate/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommunicationCostsByCandidateResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommunicationCostByCandidatePage])
                res.communication_cost_by_candidate_page = out

        return res

    
    def get_communication_costs_totals_by_candidate_(self, request: operations.GetCommunicationCostsTotalsByCandidateRequest) -> operations.GetCommunicationCostsTotalsByCandidateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/communication_costs/totals/by_candidate/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommunicationCostsTotalsByCandidateResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CcTotalsByCandidatePage])
                res.cc_totals_by_candidate_page = out

        return res

    
    def get_efile_filings_(self, request: operations.GetEfileFilingsRequest) -> operations.GetEfileFilingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/efile/filings/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEfileFilingsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EFilingsPage])
                res.e_filings_page = out

        return res

    
    def get_efile_reports_house_senate_(self, request: operations.GetEfileReportsHouseSenateRequest) -> operations.GetEfileReportsHouseSenateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/efile/reports/house-senate/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEfileReportsHouseSenateResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseF3FilingPage])
                res.base_f3_filing_page = out

        return res

    
    def get_efile_reports_pac_party_(self, request: operations.GetEfileReportsPacPartyRequest) -> operations.GetEfileReportsPacPartyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/efile/reports/pac-party/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEfileReportsPacPartyResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseF3XFilingPage])
                res.base_f3_x_filing_page = out

        return res

    
    def get_efile_reports_presidential_(self, request: operations.GetEfileReportsPresidentialRequest) -> operations.GetEfileReportsPresidentialResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/efile/reports/presidential/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEfileReportsPresidentialResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseF3PFilingPage])
                res.base_f3_p_filing_page = out

        return res

    
    def get_election_dates_(self, request: operations.GetElectionDatesRequest) -> operations.GetElectionDatesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/election-dates/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetElectionDatesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetElectionDatesDefaultApplicationJSON])
                res.get_election_dates_default_application_json_object = out

        return res

    
    def get_electioneering_(self, request: operations.GetElectioneeringRequest) -> operations.GetElectioneeringResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/electioneering/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetElectioneeringResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ElectioneeringPage])
                res.electioneering_page = out

        return res

    
    def get_electioneering_aggregates_(self, request: operations.GetElectioneeringAggregatesRequest) -> operations.GetElectioneeringAggregatesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/electioneering/aggregates/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetElectioneeringAggregatesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ElectioneeringByCandidatePage])
                res.electioneering_by_candidate_page = out

        return res

    
    def get_electioneering_by_candidate_(self, request: operations.GetElectioneeringByCandidateRequest) -> operations.GetElectioneeringByCandidateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/electioneering/by_candidate/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetElectioneeringByCandidateResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ElectioneeringByCandidatePage])
                res.electioneering_by_candidate_page = out

        return res

    
    def get_electioneering_totals_by_candidate_(self, request: operations.GetElectioneeringTotalsByCandidateRequest) -> operations.GetElectioneeringTotalsByCandidateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/electioneering/totals/by_candidate/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetElectioneeringTotalsByCandidateResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EcTotalsByCandidatePage])
                res.ec_totals_by_candidate_page = out

        return res

    
    def get_elections_(self, request: operations.GetElectionsRequest) -> operations.GetElectionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/elections/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetElectionsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ElectionPage])
                res.election_page = out

        return res

    
    def get_elections_search_(self, request: operations.GetElectionsSearchRequest) -> operations.GetElectionsSearchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/elections/search/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetElectionsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ElectionsListPage])
                res.elections_list_page = out

        return res

    
    def get_elections_summary_(self, request: operations.GetElectionsSummaryRequest) -> operations.GetElectionsSummaryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/elections/summary/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetElectionsSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ElectionSummary])
                res.election_summary = out

        return res

    
    def get_filings_(self, request: operations.GetFilingsRequest) -> operations.GetFilingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/filings/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFilingsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FilingsPage])
                res.filings_page = out

        return res

    
    def get_legal_search_(self, request: operations.GetLegalSearchRequest) -> operations.GetLegalSearchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/legal/search/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLegalSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLegalSearchDefaultApplicationJSON])
                res.get_legal_search_default_application_json_object = out

        return res

    
    def get_names_audit_candidates_(self, request: operations.GetNamesAuditCandidatesRequest) -> operations.GetNamesAuditCandidatesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/names/audit_candidates/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNamesAuditCandidatesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuditCandidateSearchList])
                res.audit_candidate_search_list = out

        return res

    
    def get_names_audit_committees_(self, request: operations.GetNamesAuditCommitteesRequest) -> operations.GetNamesAuditCommitteesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/names/audit_committees/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNamesAuditCommitteesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuditCommitteeSearchList])
                res.audit_committee_search_list = out

        return res

    
    def get_names_candidates_(self, request: operations.GetNamesCandidatesRequest) -> operations.GetNamesCandidatesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/names/candidates/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNamesCandidatesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CandidateSearchList])
                res.candidate_search_list = out

        return res

    
    def get_names_committees_(self, request: operations.GetNamesCommitteesRequest) -> operations.GetNamesCommitteesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/names/committees/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNamesCommitteesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitteeSearchList])
                res.committee_search_list = out

        return res

    
    def get_operations_log_(self, request: operations.GetOperationsLogRequest) -> operations.GetOperationsLogResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/operations-log/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOperationsLogResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OperationsLogPage])
                res.operations_log_page = out

        return res

    
    def get_presidential_contributions_by_candidate_(self, request: operations.GetPresidentialContributionsByCandidateRequest) -> operations.GetPresidentialContributionsByCandidateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/presidential/contributions/by_candidate/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPresidentialContributionsByCandidateResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PresidentialByCandidatePage])
                res.presidential_by_candidate_page = out

        return res

    
    def get_presidential_contributions_by_size_(self, request: operations.GetPresidentialContributionsBySizeRequest) -> operations.GetPresidentialContributionsBySizeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/presidential/contributions/by_size/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPresidentialContributionsBySizeResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PresidentialBySizePage])
                res.presidential_by_size_page = out

        return res

    
    def get_presidential_contributions_by_state_(self, request: operations.GetPresidentialContributionsByStateRequest) -> operations.GetPresidentialContributionsByStateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/presidential/contributions/by_state/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPresidentialContributionsByStateResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PresidentialByStatePage])
                res.presidential_by_state_page = out

        return res

    
    def get_presidential_coverage_end_date_(self, request: operations.GetPresidentialCoverageEndDateRequest) -> operations.GetPresidentialCoverageEndDateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/presidential/coverage_end_date/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPresidentialCoverageEndDateResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PresidentialCoveragePage])
                res.presidential_coverage_page = out

        return res

    
    def get_presidential_financial_summary_(self, request: operations.GetPresidentialFinancialSummaryRequest) -> operations.GetPresidentialFinancialSummaryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/presidential/financial_summary/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPresidentialFinancialSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PresidentialSummaryPage])
                res.presidential_summary_page = out

        return res

    
    def get_rad_analyst_(self, request: operations.GetRadAnalystRequest) -> operations.GetRadAnalystResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/rad-analyst/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRadAnalystResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RadAnalystPage])
                res.rad_analyst_page = out

        return res

    
    def get_reporting_dates_(self, request: operations.GetReportingDatesRequest) -> operations.GetReportingDatesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/reporting-dates/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReportingDatesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReportingDatesDefaultApplicationJSON])
                res.get_reporting_dates_default_application_json_object = out

        return res

    
    def get_reports_entity_type_(self, request: operations.GetReportsEntityTypeRequest) -> operations.GetReportsEntityTypeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/reports/{entity_type}/", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReportsEntityTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitteeReportsPage])
                res.committee_reports_page = out

        return res

    
    def get_schedules_schedule_a_(self, request: operations.GetSchedulesScheduleARequest) -> operations.GetSchedulesScheduleAResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/schedules/schedule_a/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleAResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleAPage])
                res.schedule_a_page = out

        return res

    
    def get_schedules_schedule_a_by_employer_(self, request: operations.GetSchedulesScheduleAByEmployerRequest) -> operations.GetSchedulesScheduleAByEmployerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/schedules/schedule_a/by_employer/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleAByEmployerResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleAByEmployerPage])
                res.schedule_a_by_employer_page = out

        return res

    
    def get_schedules_schedule_a_by_occupation_(self, request: operations.GetSchedulesScheduleAByOccupationRequest) -> operations.GetSchedulesScheduleAByOccupationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/schedules/schedule_a/by_occupation/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleAByOccupationResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleAByOccupationPage])
                res.schedule_a_by_occupation_page = out

        return res

    
    def get_schedules_schedule_a_by_size_(self, request: operations.GetSchedulesScheduleABySizeRequest) -> operations.GetSchedulesScheduleABySizeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/schedules/schedule_a/by_size/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleABySizeResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleABySizePage])
                res.schedule_a_by_size_page = out

        return res

    
    def get_schedules_schedule_a_by_size_by_candidate_(self, request: operations.GetSchedulesScheduleABySizeByCandidateRequest) -> operations.GetSchedulesScheduleABySizeByCandidateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/schedules/schedule_a/by_size/by_candidate/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleABySizeByCandidateResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleABySizeCandidatePage])
                res.schedule_a_by_size_candidate_page = out

        return res

    
    def get_schedules_schedule_a_by_state_(self, request: operations.GetSchedulesScheduleAByStateRequest) -> operations.GetSchedulesScheduleAByStateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/schedules/schedule_a/by_state/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleAByStateResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleAByStatePage])
                res.schedule_a_by_state_page = out

        return res

    
    def get_schedules_schedule_a_by_state_by_candidate_(self, request: operations.GetSchedulesScheduleAByStateByCandidateRequest) -> operations.GetSchedulesScheduleAByStateByCandidateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/schedules/schedule_a/by_state/by_candidate/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleAByStateByCandidateResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleAByStateCandidatePage])
                res.schedule_a_by_state_candidate_page = out

        return res

    
    def get_schedules_schedule_a_by_state_by_candidate_totals_(self, request: operations.GetSchedulesScheduleAByStateByCandidateTotalsRequest) -> operations.GetSchedulesScheduleAByStateByCandidateTotalsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/schedules/schedule_a/by_state/by_candidate/totals/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleAByStateByCandidateTotalsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleAByStateCandidatePage])
                res.schedule_a_by_state_candidate_page = out

        return res

    
    def get_schedules_schedule_a_by_state_totals_(self, request: operations.GetSchedulesScheduleAByStateTotalsRequest) -> operations.GetSchedulesScheduleAByStateTotalsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/schedules/schedule_a/by_state/totals/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleAByStateTotalsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleAByStateRecipientTotalsPage])
                res.schedule_a_by_state_recipient_totals_page = out

        return res

    
    def get_schedules_schedule_a_by_zip_(self, request: operations.GetSchedulesScheduleAByZipRequest) -> operations.GetSchedulesScheduleAByZipResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/schedules/schedule_a/by_zip/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleAByZipResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleAByZipPage])
                res.schedule_a_by_zip_page = out

        return res

    
    def get_schedules_schedule_a_efile_(self, request: operations.GetSchedulesScheduleAEfileRequest) -> operations.GetSchedulesScheduleAEfileResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/schedules/schedule_a/efile/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleAEfileResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleAEfilePage])
                res.schedule_a_efile_page = out

        return res

    
    def get_schedules_schedule_a_sub_id_(self, request: operations.GetSchedulesScheduleASubIDRequest) -> operations.GetSchedulesScheduleASubIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/schedules/schedule_a/{sub_id}/", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleASubIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleAPage])
                res.schedule_a_page = out

        return res

    
    def get_schedules_schedule_b_(self, request: operations.GetSchedulesScheduleBRequest) -> operations.GetSchedulesScheduleBResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/schedules/schedule_b/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleBResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleBPage])
                res.schedule_b_page = out

        return res

    
    def get_schedules_schedule_b_by_purpose_(self, request: operations.GetSchedulesScheduleBByPurposeRequest) -> operations.GetSchedulesScheduleBByPurposeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/schedules/schedule_b/by_purpose/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleBByPurposeResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleBByPurposePage])
                res.schedule_b_by_purpose_page = out

        return res

    
    def get_schedules_schedule_b_by_recipient_(self, request: operations.GetSchedulesScheduleBByRecipientRequest) -> operations.GetSchedulesScheduleBByRecipientResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/schedules/schedule_b/by_recipient/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleBByRecipientResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleBByRecipientPage])
                res.schedule_b_by_recipient_page = out

        return res

    
    def get_schedules_schedule_b_by_recipient_id_(self, request: operations.GetSchedulesScheduleBByRecipientIDRequest) -> operations.GetSchedulesScheduleBByRecipientIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/schedules/schedule_b/by_recipient_id/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleBByRecipientIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleBByRecipientIDPage])
                res.schedule_b_by_recipient_id_page = out

        return res

    
    def get_schedules_schedule_b_efile_(self, request: operations.GetSchedulesScheduleBEfileRequest) -> operations.GetSchedulesScheduleBEfileResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/schedules/schedule_b/efile/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleBEfileResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleBEfilePage])
                res.schedule_b_efile_page = out

        return res

    
    def get_schedules_schedule_b_sub_id_(self, request: operations.GetSchedulesScheduleBSubIDRequest) -> operations.GetSchedulesScheduleBSubIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/schedules/schedule_b/{sub_id}/", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleBSubIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleBPage])
                res.schedule_b_page = out

        return res

    
    def get_schedules_schedule_c_(self, request: operations.GetSchedulesScheduleCRequest) -> operations.GetSchedulesScheduleCResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/schedules/schedule_c/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleCResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSchedulesScheduleCDefaultApplicationJSON])
                res.get_schedules_schedule_c_default_application_json_object = out

        return res

    
    def get_schedules_schedule_c_sub_id_(self, request: operations.GetSchedulesScheduleCSubIDRequest) -> operations.GetSchedulesScheduleCSubIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/schedules/schedule_c/{sub_id}/", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleCSubIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSchedulesScheduleCSubIDDefaultApplicationJSON])
                res.get_schedules_schedule_c_sub_id_default_application_json_object = out

        return res

    
    def get_schedules_schedule_d_(self, request: operations.GetSchedulesScheduleDRequest) -> operations.GetSchedulesScheduleDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/schedules/schedule_d/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSchedulesScheduleDDefaultApplicationJSON])
                res.get_schedules_schedule_d_default_application_json_object = out

        return res

    
    def get_schedules_schedule_d_sub_id_(self, request: operations.GetSchedulesScheduleDSubIDRequest) -> operations.GetSchedulesScheduleDSubIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/schedules/schedule_d/{sub_id}/", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleDSubIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSchedulesScheduleDSubIDDefaultApplicationJSON])
                res.get_schedules_schedule_d_sub_id_default_application_json_object = out

        return res

    
    def get_schedules_schedule_e_(self, request: operations.GetSchedulesScheduleERequest) -> operations.GetSchedulesScheduleEResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/schedules/schedule_e/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleEResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleEPage])
                res.schedule_e_page = out

        return res

    
    def get_schedules_schedule_e_by_candidate_(self, request: operations.GetSchedulesScheduleEByCandidateRequest) -> operations.GetSchedulesScheduleEByCandidateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/schedules/schedule_e/by_candidate/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleEByCandidateResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleEByCandidatePage])
                res.schedule_e_by_candidate_page = out

        return res

    
    def get_schedules_schedule_e_efile_(self, request: operations.GetSchedulesScheduleEEfileRequest) -> operations.GetSchedulesScheduleEEfileResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/schedules/schedule_e/efile/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleEEfileResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleEEfilePage])
                res.schedule_e_efile_page = out

        return res

    
    def get_schedules_schedule_e_totals_by_candidate_(self, request: operations.GetSchedulesScheduleETotalsByCandidateRequest) -> operations.GetSchedulesScheduleETotalsByCandidateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/schedules/schedule_e/totals/by_candidate/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleETotalsByCandidateResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IeTotalsByCandidatePage])
                res.ie_totals_by_candidate_page = out

        return res

    
    def get_schedules_schedule_f_(self, request: operations.GetSchedulesScheduleFRequest) -> operations.GetSchedulesScheduleFResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/schedules/schedule_f/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleFResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSchedulesScheduleFDefaultApplicationJSON])
                res.get_schedules_schedule_f_default_application_json_object = out

        return res

    
    def get_schedules_schedule_f_sub_id_(self, request: operations.GetSchedulesScheduleFSubIDRequest) -> operations.GetSchedulesScheduleFSubIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/schedules/schedule_f/{sub_id}/", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleFSubIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSchedulesScheduleFSubIDDefaultApplicationJSON])
                res.get_schedules_schedule_f_sub_id_default_application_json_object = out

        return res

    
    def get_state_election_office_(self, request: operations.GetStateElectionOfficeRequest) -> operations.GetStateElectionOfficeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/state-election-office/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStateElectionOfficeResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StateElectionOfficeInfoPage])
                res.state_election_office_info_page = out

        return res

    
    def get_totals_by_entity_(self, request: operations.GetTotalsByEntityRequest) -> operations.GetTotalsByEntityResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/totals/by_entity/"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTotalsByEntityResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EntityReceiptDisbursementTotalsPage])
                res.entity_receipt_disbursement_totals_page = out

        return res

    
    def get_totals_entity_type_(self, request: operations.GetTotalsEntityTypeRequest) -> operations.GetTotalsEntityTypeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/totals/{entity_type}/", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTotalsEntityTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitteeTotalsPage])
                res.committee_totals_page = out

        return res

    