import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Bidders:
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

    
    def adexchangebuyer2_bidders_filter_sets_bid_metrics_list(self, request: operations.Adexchangebuyer2BiddersFilterSetsBidMetricsListRequest) -> operations.Adexchangebuyer2BiddersFilterSetsBidMetricsListResponse:
        r"""Lists all metrics that are measured in terms of number of bids.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{filterSetName}/bidMetrics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2BiddersFilterSetsBidMetricsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListBidMetricsResponse])
                res.list_bid_metrics_response = out

        return res

    
    def adexchangebuyer2_bidders_filter_sets_bid_response_errors_list(self, request: operations.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListRequest) -> operations.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse:
        r"""List all errors that occurred in bid responses, with the number of bid responses affected for each reason.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{filterSetName}/bidResponseErrors", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListBidResponseErrorsResponse])
                res.list_bid_response_errors_response = out

        return res

    
    def adexchangebuyer2_bidders_filter_sets_bid_responses_without_bids_list(self, request: operations.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListRequest) -> operations.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse:
        r"""List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{filterSetName}/bidResponsesWithoutBids", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListBidResponsesWithoutBidsResponse])
                res.list_bid_responses_without_bids_response = out

        return res

    
    def adexchangebuyer2_bidders_filter_sets_create(self, request: operations.Adexchangebuyer2BiddersFilterSetsCreateRequest) -> operations.Adexchangebuyer2BiddersFilterSetsCreateResponse:
        r"""Creates the specified filter set for the account with the given account ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{ownerName}/filterSets", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2BiddersFilterSetsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FilterSet])
                res.filter_set = out

        return res

    
    def adexchangebuyer2_bidders_filter_sets_delete(self, request: operations.Adexchangebuyer2BiddersFilterSetsDeleteRequest) -> operations.Adexchangebuyer2BiddersFilterSetsDeleteResponse:
        r"""Deletes the requested filter set from the account with the given account ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2BiddersFilterSetsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def adexchangebuyer2_bidders_filter_sets_filtered_bid_requests_list(self, request: operations.Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListRequest) -> operations.Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListResponse:
        r"""List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{filterSetName}/filteredBidRequests", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListFilteredBidRequestsResponse])
                res.list_filtered_bid_requests_response = out

        return res

    
    def adexchangebuyer2_bidders_filter_sets_filtered_bids_creatives_list(self, request: operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListRequest) -> operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListResponse:
        r"""List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{filterSetName}/filteredBids/{creativeStatusId}/creatives", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCreativeStatusBreakdownByCreativeResponse])
                res.list_creative_status_breakdown_by_creative_response = out

        return res

    
    def adexchangebuyer2_bidders_filter_sets_filtered_bids_details_list(self, request: operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListRequest) -> operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse:
        r"""List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{filterSetName}/filteredBids/{creativeStatusId}/details", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCreativeStatusBreakdownByDetailResponse])
                res.list_creative_status_breakdown_by_detail_response = out

        return res

    
    def adexchangebuyer2_bidders_filter_sets_filtered_bids_list(self, request: operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsListRequest) -> operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsListResponse:
        r"""List all reasons for which bids were filtered, with the number of bids filtered for each reason.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{filterSetName}/filteredBids", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListFilteredBidsResponse])
                res.list_filtered_bids_response = out

        return res

    
    def adexchangebuyer2_bidders_filter_sets_get(self, request: operations.Adexchangebuyer2BiddersFilterSetsGetRequest) -> operations.Adexchangebuyer2BiddersFilterSetsGetResponse:
        r"""Retrieves the requested filter set for the account with the given account ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2BiddersFilterSetsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FilterSet])
                res.filter_set = out

        return res

    
    def adexchangebuyer2_bidders_filter_sets_impression_metrics_list(self, request: operations.Adexchangebuyer2BiddersFilterSetsImpressionMetricsListRequest) -> operations.Adexchangebuyer2BiddersFilterSetsImpressionMetricsListResponse:
        r"""Lists all metrics that are measured in terms of number of impressions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{filterSetName}/impressionMetrics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2BiddersFilterSetsImpressionMetricsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListImpressionMetricsResponse])
                res.list_impression_metrics_response = out

        return res

    
    def adexchangebuyer2_bidders_filter_sets_list(self, request: operations.Adexchangebuyer2BiddersFilterSetsListRequest) -> operations.Adexchangebuyer2BiddersFilterSetsListResponse:
        r"""Lists all filter sets for the account with the given account ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{ownerName}/filterSets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2BiddersFilterSetsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListFilterSetsResponse])
                res.list_filter_sets_response = out

        return res

    
    def adexchangebuyer2_bidders_filter_sets_losing_bids_list(self, request: operations.Adexchangebuyer2BiddersFilterSetsLosingBidsListRequest) -> operations.Adexchangebuyer2BiddersFilterSetsLosingBidsListResponse:
        r"""List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{filterSetName}/losingBids", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2BiddersFilterSetsLosingBidsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLosingBidsResponse])
                res.list_losing_bids_response = out

        return res

    
    def adexchangebuyer2_bidders_filter_sets_non_billable_winning_bids_list(self, request: operations.Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListRequest) -> operations.Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListResponse:
        r"""List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{filterSetName}/nonBillableWinningBids", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListNonBillableWinningBidsResponse])
                res.list_non_billable_winning_bids_response = out

        return res

    