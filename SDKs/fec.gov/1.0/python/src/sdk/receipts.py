import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Receipts:
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

    
    def get_schedules_schedule_a_(self, request: operations.GetSchedulesScheduleARequest) -> operations.GetSchedulesScheduleAResponse:
        r"""
        This description is for both ​`/schedules​/schedule_a​/` and ​ `/schedules​/schedule_a​/{sub_id}​/`.
        
        This endpoint provides itemized receipts. Schedule A records describe itemized receipts, including contributions from individuals. If you are interested in contributions from an individual, use the `/schedules/schedule_a/` endpoint. For a more complete description of all Schedule A records visit [About receipts data](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/about-receipts-data/). If you are interested in our \"is_individual\" methodology visit our [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology/).
        
        ​The `/schedules​/schedule_a​/` endpoint is not paginated by page number. This endpoint uses keyset pagination to improve query performance and these indices are required to properly page through this large dataset. To request the next page, you should append the values found in the `last_indexes` object from pagination to the URL of your last request as additional parameters. 
        For example, when sorting by `contribution_receipt_date`, you might receive a page of results with the two scenarios of following pagination information:
        
        case #1:
        ```
        pagination: {
            pages: 2152643,
            per_page: 20,
            count: 43052850,
            last_indexes: {
                last_index: \"230880619\",
                last_contribution_receipt_date: \"2014-01-01\"
            }
        }
        ```
        <br/>
        case #2 (results which include contribution_receipt_date = NULL):
        
        ```
        pagination: {
            pages: 2152644,
            per_page: 20,
            count: 43052850,
            last_indexes: {
                last_index: \"230880639\",
                sort_null_only: True
            }
        }
        ```
        To fetch the next page of sorted results, append `last_index=230880619` and `last_contribution_receipt_date=2014-01-01` to the URL and when reaching `contribution_receipt_date=NULL`, append `last_index=230880639` and `sort_null_only=True`. We strongly advise paging through these results using sort indices. The default sort is acending by `contribution_receipt_date` (`deprecated`, will be descending). If you do not page using sort indices, some transactions may be unintentionally filtered out.
        
        Calls to ​`/schedules​/schedule_a​/` may return many records. For large result sets, the record counts found in the pagination object are approximate; you will need to page through the records until no records are returned.
        
        To avoid throwing the \"out of range\" exception on the last page, one recommandation is to use total count and `per_page` to control the traverse loop of results.
        
        ​The `/schedules​/schedule_a​/{sub_id}​/` endpoint returns a single transaction, but it does include a pagination object class. Please ignore the information in that object class.
        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/schedules/schedule_a/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleAResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleAPage])
                res.schedule_a_page = out

        return res

    
    def get_schedules_schedule_a_by_employer_(self, request: operations.GetSchedulesScheduleAByEmployerRequest) -> operations.GetSchedulesScheduleAByEmployerResponse:
        r"""
        This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s employer name. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/schedules/schedule_a/by_employer/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleAByEmployerResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleAByEmployerPage])
                res.schedule_a_by_employer_page = out

        return res

    
    def get_schedules_schedule_a_by_occupation_(self, request: operations.GetSchedulesScheduleAByOccupationRequest) -> operations.GetSchedulesScheduleAByOccupationResponse:
        r"""
        This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s occupation. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/schedules/schedule_a/by_occupation/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleAByOccupationResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleAByOccupationPage])
                res.schedule_a_by_occupation_page = out

        return res

    
    def get_schedules_schedule_a_by_size_(self, request: operations.GetSchedulesScheduleABySizeRequest) -> operations.GetSchedulesScheduleABySizeResponse:
        r"""
        This endpoint provides individual contributions received by a committee, aggregated by size:
        
        ```
         - $200 and under
         - $200.01 - $499.99
         - $500 - $999.99
         - $1000 - $1999.99
         - $2000 +
        ```
        
        The $200.00 and under category includes contributions of $200 or less combined with unitemized individual contributions.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/schedules/schedule_a/by_size/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleABySizeResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleABySizePage])
                res.schedule_a_by_size_page = out

        return res

    
    def get_schedules_schedule_a_by_size_by_candidate_(self, request: operations.GetSchedulesScheduleABySizeByCandidateRequest) -> operations.GetSchedulesScheduleABySizeByCandidateResponse:
        r"""
        This endpoint provides itemized individual contributions received by a committee, aggregated by size of contribution and candidate. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/schedules/schedule_a/by_size/by_candidate/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleABySizeByCandidateResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleABySizeCandidatePage])
                res.schedule_a_by_size_candidate_page = out

        return res

    
    def get_schedules_schedule_a_by_state_(self, request: operations.GetSchedulesScheduleAByStateRequest) -> operations.GetSchedulesScheduleAByStateResponse:
        r"""
        This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s state. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/schedules/schedule_a/by_state/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleAByStateResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleAByStatePage])
                res.schedule_a_by_state_page = out

        return res

    
    def get_schedules_schedule_a_by_state_by_candidate_(self, request: operations.GetSchedulesScheduleAByStateByCandidateRequest) -> operations.GetSchedulesScheduleAByStateByCandidateResponse:
        r"""
        This endpoint provides itemized individual contributions received by a committee, aggregated by contributor’s state and candidate. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/schedules/schedule_a/by_state/by_candidate/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleAByStateByCandidateResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleAByStateCandidatePage])
                res.schedule_a_by_state_candidate_page = out

        return res

    
    def get_schedules_schedule_a_by_state_by_candidate_totals_(self, request: operations.GetSchedulesScheduleAByStateByCandidateTotalsRequest) -> operations.GetSchedulesScheduleAByStateByCandidateTotalsResponse:
        r"""
        Itemized individual contributions aggregated by contributor’s state, candidate, committee type and cycle. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.
        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/schedules/schedule_a/by_state/by_candidate/totals/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleAByStateByCandidateTotalsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleAByStateCandidatePage])
                res.schedule_a_by_state_candidate_page = out

        return res

    
    def get_schedules_schedule_a_by_state_totals_(self, request: operations.GetSchedulesScheduleAByStateTotalsRequest) -> operations.GetSchedulesScheduleAByStateTotalsResponse:
        r"""
        This endpoint provides itemized individual contributions received by a committee, aggregated by contributor’s state, committee type and cycle. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/schedules/schedule_a/by_state/totals/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleAByStateTotalsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleAByStateRecipientTotalsPage])
                res.schedule_a_by_state_recipient_totals_page = out

        return res

    
    def get_schedules_schedule_a_by_zip_(self, request: operations.GetSchedulesScheduleAByZipRequest) -> operations.GetSchedulesScheduleAByZipResponse:
        r"""
        This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s ZIP code. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/schedules/schedule_a/by_zip/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleAByZipResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleAByZipPage])
                res.schedule_a_by_zip_page = out

        return res

    
    def get_schedules_schedule_a_efile_(self, request: operations.GetSchedulesScheduleAEfileRequest) -> operations.GetSchedulesScheduleAEfileResponse:
        r"""
        Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/schedules/schedule_a/efile/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleAEfileResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleAEfilePage])
                res.schedule_a_efile_page = out

        return res

    
    def get_schedules_schedule_a_sub_id_(self, request: operations.GetSchedulesScheduleASubIDRequest) -> operations.GetSchedulesScheduleASubIDResponse:
        r"""
        This description is for both ​`/schedules​/schedule_a​/` and ​ `/schedules​/schedule_a​/{sub_id}​/`.
        
        This endpoint provides itemized receipts. Schedule A records describe itemized receipts, including contributions from individuals. If you are interested in contributions from an individual, use the `/schedules/schedule_a/` endpoint. For a more complete description of all Schedule A records visit [About receipts data](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/about-receipts-data/). If you are interested in our \"is_individual\" methodology visit our [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology/).
        
        ​The `/schedules​/schedule_a​/` endpoint is not paginated by page number. This endpoint uses keyset pagination to improve query performance and these indices are required to properly page through this large dataset. To request the next page, you should append the values found in the `last_indexes` object from pagination to the URL of your last request as additional parameters. 
        For example, when sorting by `contribution_receipt_date`, you might receive a page of results with the two scenarios of following pagination information:
        
        case #1:
        ```
        pagination: {
            pages: 2152643,
            per_page: 20,
            count: 43052850,
            last_indexes: {
                last_index: \"230880619\",
                last_contribution_receipt_date: \"2014-01-01\"
            }
        }
        ```
        <br/>
        case #2 (results which include contribution_receipt_date = NULL):
        
        ```
        pagination: {
            pages: 2152644,
            per_page: 20,
            count: 43052850,
            last_indexes: {
                last_index: \"230880639\",
                sort_null_only: True
            }
        }
        ```
        To fetch the next page of sorted results, append `last_index=230880619` and `last_contribution_receipt_date=2014-01-01` to the URL and when reaching `contribution_receipt_date=NULL`, append `last_index=230880639` and `sort_null_only=True`. We strongly advise paging through these results using sort indices. The default sort is acending by `contribution_receipt_date` (`deprecated`, will be descending). If you do not page using sort indices, some transactions may be unintentionally filtered out.
        
        Calls to ​`/schedules​/schedule_a​/` may return many records. For large result sets, the record counts found in the pagination object are approximate; you will need to page through the records until no records are returned.
        
        To avoid throwing the \"out of range\" exception on the last page, one recommandation is to use total count and `per_page` to control the traverse loop of results.
        
        ​The `/schedules​/schedule_a​/{sub_id}​/` endpoint returns a single transaction, but it does include a pagination object class. Please ignore the information in that object class.
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/schedules/schedule_a/{sub_id}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesScheduleASubIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleAPage])
                res.schedule_a_page = out

        return res

    