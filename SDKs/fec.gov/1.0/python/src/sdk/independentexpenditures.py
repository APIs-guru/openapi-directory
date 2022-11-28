import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class IndependentExpenditures:
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

    
    def get_schedules_schedule_e_(self, request: operations.GetSchedulesScheduleERequest) -> operations.GetSchedulesScheduleEResponse:
        r"""
        Schedule E covers the line item expenditures for independent expenditures. For example, if a super PAC
        bought ads on TV to oppose a federal candidate, each ad purchase would be recorded here with
        the expenditure amount, name and id of the candidate, and whether the ad supported or opposed the candidate.
        
        An independent expenditure is an expenditure for a communication \"expressly advocating the election or
        defeat of a clearly identified candidate that is not made in cooperation, consultation, or concert with,
        or at the request or suggestion of, a candidate, a candidate’s authorized committee, or their agents, or
        a political party or its agents.\"
        
        Aggregates by candidate do not include 24 and 48 hour reports. This ensures we don't double count expenditures
        and the totals are more accurate. You can still find the information from 24 and 48 hour reports in
        `/schedule/schedule_e/`.
        
        Due to the large quantity of Schedule E filings, this endpoint is not paginated by
        page number. Instead, you can request the next page of results by adding the values in
        the `last_indexes` object from `pagination` to the URL of your last request. For
        example, when sorting by `expenditure_amount`, you might receive a page of
        results with the following pagination information:
        
        ```
         \"pagination\": {
            \"count\": 152623,
            \"last_indexes\": {
              \"last_index\": \"3023037\",
              \"last_expenditure_amount\": -17348.5
            },
            \"per_page\": 20,
            \"pages\": 7632
          }
        }
        ```
        
        To fetch the next page of sorted results, append `last_index=3023037` and
        `last_expenditure_amount=` to the URL.  We strongly advise paging through
        these results by using the sort indices (defaults to sort by disbursement date,
        e.g. `last_disbursement_date`), otherwise some resources may be unintentionally
        filtered out.  This resource uses keyset pagination to improve query performance
        and these indices are required to properly page through this large dataset.
        
        Note: because the Schedule E data includes many records, counts for
        large result sets are approximate; you will want to page through the records until no records are returned.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/schedules/schedule_e/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleEResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleEPage])
                res.schedule_e_page = out

        return res

    
    def get_schedules_schedule_e_by_candidate_(self, request: operations.GetSchedulesScheduleEByCandidateRequest) -> operations.GetSchedulesScheduleEByCandidateResponse:
        r"""
        Schedule E receipts aggregated by recipient candidate. To avoid double
        counting, memoed items are not included.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/schedules/schedule_e/by_candidate/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleEByCandidateResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleEByCandidatePage])
                res.schedule_e_by_candidate_page = out

        return res

    
    def get_schedules_schedule_e_efile_(self, request: operations.GetSchedulesScheduleEEfileRequest) -> operations.GetSchedulesScheduleEEfileResponse:
        r"""
        Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/schedules/schedule_e/efile/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleEEfileResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleEEfilePage])
                res.schedule_e_efile_page = out

        return res

    
    def get_schedules_schedule_e_totals_by_candidate_(self, request: operations.GetSchedulesScheduleETotalsByCandidateRequest) -> operations.GetSchedulesScheduleETotalsByCandidateResponse:
        r"""
        Total independent expenditure on supported or opposed candidates by cycle or candidate election year.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/schedules/schedule_e/totals/by_candidate/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleETotalsByCandidateResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IeTotalsByCandidatePage])
                res.ie_totals_by_candidate_page = out

        return res

    