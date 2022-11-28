import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeEdgarFiling {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeEdgarFiling - Search API for 'SEC EDGAR Filing' entry type
     *
     * API to search for entries of type SEC EDGAR Filing
    **/
    searchTypeEdgarFiling(req: operations.SearchTypeEdgarFilingRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeEdgarFilingResponse>;
}
