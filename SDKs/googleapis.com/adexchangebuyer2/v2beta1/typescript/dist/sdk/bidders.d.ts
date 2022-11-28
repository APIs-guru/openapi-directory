import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Bidders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * adexchangebuyer2BiddersFilterSetsBidMetricsList - Lists all metrics that are measured in terms of number of bids.
    **/
    adexchangebuyer2BiddersFilterSetsBidMetricsList(req: operations.Adexchangebuyer2BiddersFilterSetsBidMetricsListRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2BiddersFilterSetsBidMetricsListResponse>;
    /**
     * adexchangebuyer2BiddersFilterSetsBidResponseErrorsList - List all errors that occurred in bid responses, with the number of bid responses affected for each reason.
    **/
    adexchangebuyer2BiddersFilterSetsBidResponseErrorsList(req: operations.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse>;
    /**
     * adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsList - List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.
    **/
    adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsList(req: operations.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse>;
    /**
     * adexchangebuyer2BiddersFilterSetsCreate - Creates the specified filter set for the account with the given account ID.
    **/
    adexchangebuyer2BiddersFilterSetsCreate(req: operations.Adexchangebuyer2BiddersFilterSetsCreateRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2BiddersFilterSetsCreateResponse>;
    /**
     * adexchangebuyer2BiddersFilterSetsDelete - Deletes the requested filter set from the account with the given account ID.
    **/
    adexchangebuyer2BiddersFilterSetsDelete(req: operations.Adexchangebuyer2BiddersFilterSetsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2BiddersFilterSetsDeleteResponse>;
    /**
     * adexchangebuyer2BiddersFilterSetsFilteredBidRequestsList - List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.
    **/
    adexchangebuyer2BiddersFilterSetsFilteredBidRequestsList(req: operations.Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListResponse>;
    /**
     * adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesList - List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.
    **/
    adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesList(req: operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListResponse>;
    /**
     * adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsList - List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.
    **/
    adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsList(req: operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse>;
    /**
     * adexchangebuyer2BiddersFilterSetsFilteredBidsList - List all reasons for which bids were filtered, with the number of bids filtered for each reason.
    **/
    adexchangebuyer2BiddersFilterSetsFilteredBidsList(req: operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsListRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsListResponse>;
    /**
     * adexchangebuyer2BiddersFilterSetsGet - Retrieves the requested filter set for the account with the given account ID.
    **/
    adexchangebuyer2BiddersFilterSetsGet(req: operations.Adexchangebuyer2BiddersFilterSetsGetRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2BiddersFilterSetsGetResponse>;
    /**
     * adexchangebuyer2BiddersFilterSetsImpressionMetricsList - Lists all metrics that are measured in terms of number of impressions.
    **/
    adexchangebuyer2BiddersFilterSetsImpressionMetricsList(req: operations.Adexchangebuyer2BiddersFilterSetsImpressionMetricsListRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2BiddersFilterSetsImpressionMetricsListResponse>;
    /**
     * adexchangebuyer2BiddersFilterSetsList - Lists all filter sets for the account with the given account ID.
    **/
    adexchangebuyer2BiddersFilterSetsList(req: operations.Adexchangebuyer2BiddersFilterSetsListRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2BiddersFilterSetsListResponse>;
    /**
     * adexchangebuyer2BiddersFilterSetsLosingBidsList - List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.
    **/
    adexchangebuyer2BiddersFilterSetsLosingBidsList(req: operations.Adexchangebuyer2BiddersFilterSetsLosingBidsListRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2BiddersFilterSetsLosingBidsListResponse>;
    /**
     * adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsList - List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.
    **/
    adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsList(req: operations.Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListResponse>;
}
