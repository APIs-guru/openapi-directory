import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeIdvBundle {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeIdvBundle - Search API for 'IDV Bundle' entry type
     *
     * API to search for entries of type IDV Bundle
    **/
    searchTypeIdvBundle(req: operations.SearchTypeIdvBundleRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeIdvBundleResponse>;
}
