import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DirectDeals {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * adexchangebuyerDirectDealsGet - Gets one direct deal by ID.
    **/
    adexchangebuyerDirectDealsGet(req: operations.AdexchangebuyerDirectDealsGetRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerDirectDealsGetResponse>;
    /**
     * adexchangebuyerDirectDealsList - Retrieves the authenticated user's list of direct deals.
    **/
    adexchangebuyerDirectDealsList(req: operations.AdexchangebuyerDirectDealsListRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerDirectDealsListResponse>;
}
