import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Marketplacedeals {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * adexchangebuyerMarketplacedealsDelete - Delete the specified deals from the proposal
    **/
    adexchangebuyerMarketplacedealsDelete(req: operations.AdexchangebuyerMarketplacedealsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerMarketplacedealsDeleteResponse>;
    /**
     * adexchangebuyerMarketplacedealsInsert - Add new deals for the specified proposal
    **/
    adexchangebuyerMarketplacedealsInsert(req: operations.AdexchangebuyerMarketplacedealsInsertRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerMarketplacedealsInsertResponse>;
    /**
     * adexchangebuyerMarketplacedealsList - List all the deals for a given proposal
    **/
    adexchangebuyerMarketplacedealsList(req: operations.AdexchangebuyerMarketplacedealsListRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerMarketplacedealsListResponse>;
    /**
     * adexchangebuyerMarketplacedealsUpdate - Replaces all the deals in the proposal with the passed in deals
    **/
    adexchangebuyerMarketplacedealsUpdate(req: operations.AdexchangebuyerMarketplacedealsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerMarketplacedealsUpdateResponse>;
}
