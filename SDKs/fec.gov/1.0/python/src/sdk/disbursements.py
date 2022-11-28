import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Disbursements:
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

    
    def get_schedules_schedule_b_(self, request: operations.GetSchedulesScheduleBRequest) -> operations.GetSchedulesScheduleBResponse:
        r"""
        Schedule B filings describe itemized disbursements. This data
        explains how committees and other filers spend their money. These figures are
        reported as part of forms F3, F3X and F3P.
        
        The data is divided in two-year periods, called `two_year_transaction_period`, which
        is derived from the `report_year` submitted of the corresponding form. If no value is supplied, the results will
        default to the most recent two-year period that is named after the ending,
        even-numbered year.
        
        Due to the large quantity of Schedule B filings, this endpoint is not paginated by
        page number. Instead, you can request the next page of results by adding the values in
        the `last_indexes` object from `pagination` to the URL of your last request. For
        example, when sorting by `disbursement_date`, you might receive a page of
        results with the following pagination information:
        
        ```
        pagination: {
            pages: 965191,
            per_page: 20,
            count: 19303814,
            last_indexes: {
                last_index: \"230906248\",
                last_disbursement_date: \"2014-07-04\"
            }
        }
        ```
        
        To fetch the next page of sorted results, append `last_index=230906248` and
        `last_disbursement_date=2014-07-04` to the URL.  We strongly advise paging through
        these results by using the sort indices (defaults to sort by disbursement date, e.g.
        `last_disbursement_date`), otherwise some resources may be unintentionally filtered out.
        This resource uses keyset pagination to improve query performance
        and these indices are required to properly page through this large dataset.
        
        Note: because the Schedule B data includes many records, counts for
        large result sets are approximate; you will want to page through the records until no records are returned.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/schedules/schedule_b/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleBResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleBPage])
                res.schedule_b_page = out

        return res

    
    def get_schedules_schedule_b_by_purpose_(self, request: operations.GetSchedulesScheduleBByPurposeRequest) -> operations.GetSchedulesScheduleBByPurposeResponse:
        r"""
        Schedule B disbursements aggregated by disbursement purpose category. To avoid double counting,
        memoed items are not included.
        Purpose is a combination of transaction codes, category codes and disbursement description.
        Inspect the `disbursement_purpose` sql function within the migrations for more details.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/schedules/schedule_b/by_purpose/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleBByPurposeResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleBByPurposePage])
                res.schedule_b_by_purpose_page = out

        return res

    
    def get_schedules_schedule_b_by_recipient_(self, request: operations.GetSchedulesScheduleBByRecipientRequest) -> operations.GetSchedulesScheduleBByRecipientResponse:
        r"""
        Schedule B disbursements aggregated by recipient name. To avoid double counting,
        memoed items are not included.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/schedules/schedule_b/by_recipient/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleBByRecipientResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleBByRecipientPage])
                res.schedule_b_by_recipient_page = out

        return res

    
    def get_schedules_schedule_b_by_recipient_id_(self, request: operations.GetSchedulesScheduleBByRecipientIDRequest) -> operations.GetSchedulesScheduleBByRecipientIDResponse:
        r"""
        Schedule B disbursements aggregated by recipient committee ID, if applicable.
        To avoid double counting, memoed items are not included.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/schedules/schedule_b/by_recipient_id/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleBByRecipientIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleBByRecipientIDPage])
                res.schedule_b_by_recipient_id_page = out

        return res

    
    def get_schedules_schedule_b_efile_(self, request: operations.GetSchedulesScheduleBEfileRequest) -> operations.GetSchedulesScheduleBEfileResponse:
        r"""
        Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/schedules/schedule_b/efile/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleBEfileResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleBEfilePage])
                res.schedule_b_efile_page = out

        return res

    
    def get_schedules_schedule_b_sub_id_(self, request: operations.GetSchedulesScheduleBSubIDRequest) -> operations.GetSchedulesScheduleBSubIDResponse:
        r"""
        Schedule B filings describe itemized disbursements. This data
        explains how committees and other filers spend their money. These figures are
        reported as part of forms F3, F3X and F3P.
        
        The data is divided in two-year periods, called `two_year_transaction_period`, which
        is derived from the `report_year` submitted of the corresponding form. If no value is supplied, the results will
        default to the most recent two-year period that is named after the ending,
        even-numbered year.
        
        Due to the large quantity of Schedule B filings, this endpoint is not paginated by
        page number. Instead, you can request the next page of results by adding the values in
        the `last_indexes` object from `pagination` to the URL of your last request. For
        example, when sorting by `disbursement_date`, you might receive a page of
        results with the following pagination information:
        
        ```
        pagination: {
            pages: 965191,
            per_page: 20,
            count: 19303814,
            last_indexes: {
                last_index: \"230906248\",
                last_disbursement_date: \"2014-07-04\"
            }
        }
        ```
        
        To fetch the next page of sorted results, append `last_index=230906248` and
        `last_disbursement_date=2014-07-04` to the URL.  We strongly advise paging through
        these results by using the sort indices (defaults to sort by disbursement date, e.g.
        `last_disbursement_date`), otherwise some resources may be unintentionally filtered out.
        This resource uses keyset pagination to improve query performance
        and these indices are required to properly page through this large dataset.
        
        Note: because the Schedule B data includes many records, counts for
        large result sets are approximate; you will want to page through the records until no records are returned.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/schedules/schedule_b/{sub_id}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleBSubIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleBPage])
                res.schedule_b_page = out

        return res

    