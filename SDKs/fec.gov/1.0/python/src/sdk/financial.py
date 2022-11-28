import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Financial:
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

    
    def get_committee_committee_id_reports_(self, request: operations.GetCommitteeCommitteeIDReportsRequest) -> operations.GetCommitteeCommitteeIDReportsResponse:
        r"""
        Each report represents the summary information from Form 3, Form 3X and Form 3P.
        These reports have key statistics that illuminate the financial status of a given committee.
        Things like cash on hand, debts owed by committee, total receipts, and total disbursements
        are especially helpful for understanding a committee's financial dealings.
        
        By default, this endpoint includes both amended and final versions of each report. To restrict
        to only the final versions of each report, use `is_amended=false`; to retrieve only reports that
        have been amended, use `is_amended=true`.
        
        Several different reporting structures exist, depending on the type of organization that
        submits financial information. To see an example of these reporting requirements,
        look at the summary and detailed summary pages of Form 3, Form 3X, and Form 3P.
        
        DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
        label these fields while conveying clear meaning to ensure accessibility for all users.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/committee/{committee_id}/reports/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommitteeCommitteeIDReportsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitteeReportsPage])
                res.committee_reports_page = out

        return res

    
    def get_committee_committee_id_totals_(self, request: operations.GetCommitteeCommitteeIDTotalsRequest) -> operations.GetCommitteeCommitteeIDTotalsResponse:
        r"""
        This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
        which are aggregated by two-year period. We refer to two-year periods as a `cycle`.
        
        The cycle is named after the even-numbered year and includes the year before it. To obtain
        totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
        is the next year — for example, in 2015, the current cycle is 2016.
        
        For presidential and Senate candidates, multiple two-year cycles exist between elections.
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/committee/{committee_id}/totals/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommitteeCommitteeIDTotalsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitteeTotalsPage])
                res.committee_totals_page = out

        return res

    
    def get_elections_(self, request: operations.GetElectionsRequest) -> operations.GetElectionsResponse:
        r"""
        Look at the top-level financial information for all candidates running for the same
        office.
        
        Choose a 2-year cycle, and `house`, `senate` or `presidential`.
        
        If you are looking for a Senate seat, you will need to select the state using a two-letter
        abbreviation.
        
        House races require state and a two-digit district number.
        
        Since this endpoint reflects financial information, it will only have candidates once they file
        financial reporting forms. Query the `/candidates` endpoint to retrieve an-up-to-date list of all the
        candidates that filed to run for a particular seat.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/elections/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetElectionsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ElectionPage])
                res.election_page = out

        return res

    
    def get_elections_search_(self, request: operations.GetElectionsSearchRequest) -> operations.GetElectionsSearchResponse:
        r"""
        List elections by cycle, office, state, and district.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/elections/search/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetElectionsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ElectionsListPage])
                res.elections_list_page = out

        return res

    
    def get_elections_summary_(self, request: operations.GetElectionsSummaryRequest) -> operations.GetElectionsSummaryResponse:
        r"""
        List elections by cycle, office, state, and district.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/elections/summary/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetElectionsSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ElectionSummary])
                res.election_summary = out

        return res

    
    def get_reports_entity_type_(self, request: operations.GetReportsEntityTypeRequest) -> operations.GetReportsEntityTypeResponse:
        r"""
        Each report represents the summary information from Form 3, Form 3X and Form 3P.
        These reports have key statistics that illuminate the financial status of a given committee.
        Things like cash on hand, debts owed by committee, total receipts, and total disbursements
        are especially helpful for understanding a committee's financial dealings.
        
        By default, this endpoint includes both amended and final versions of each report. To restrict
        to only the final versions of each report, use `is_amended=false`; to retrieve only reports that
        have been amended, use `is_amended=true`.
        
        Several different reporting structures exist, depending on the type of organization that
        submits financial information. To see an example of these reporting requirements,
        look at the summary and detailed summary pages of Form 3, Form 3X, and Form 3P.
        
        DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
        label these fields while conveying clear meaning to ensure accessibility for all users.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/reports/{entity_type}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReportsEntityTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitteeReportsPage])
                res.committee_reports_page = out

        return res

    
    def get_totals_by_entity_(self, request: operations.GetTotalsByEntityRequest) -> operations.GetTotalsByEntityResponse:
        r"""
        Provides cumulative receipt totals by entity type, over a two year cycle. Totals are adjusted to avoid double counting.
        
        This is [the sql](https://github.com/fecgov/openFEC/blob/develop/data/migrations/V41__large_aggregates.sql) that creates these calculations.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/totals/by_entity/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTotalsByEntityResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EntityReceiptDisbursementTotalsPage])
                res.entity_receipt_disbursement_totals_page = out

        return res

    
    def get_totals_entity_type_(self, request: operations.GetTotalsEntityTypeRequest) -> operations.GetTotalsEntityTypeResponse:
        r"""
        This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
        which are aggregated by two-year period. We refer to two-year periods as a `cycle`.
        
        The cycle is named after the even-numbered year and includes the year before it. To obtain
        totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
        is the next year — for example, in 2015, the current cycle is 2016.
        
        For presidential and Senate candidates, multiple two-year cycles exist between elections.
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/totals/{entity_type}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTotalsEntityTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommitteeTotalsPage])
                res.committee_totals_page = out

        return res

    