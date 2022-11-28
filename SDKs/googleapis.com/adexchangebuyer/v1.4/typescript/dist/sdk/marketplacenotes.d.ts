import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Marketplacenotes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * adexchangebuyerMarketplacenotesInsert - Add notes to the proposal
    **/
    adexchangebuyerMarketplacenotesInsert(req: operations.AdexchangebuyerMarketplacenotesInsertRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerMarketplacenotesInsertResponse>;
    /**
     * adexchangebuyerMarketplacenotesList - Get all the notes associated with a proposal
    **/
    adexchangebuyerMarketplacenotesList(req: operations.AdexchangebuyerMarketplacenotesListRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerMarketplacenotesListResponse>;
}
