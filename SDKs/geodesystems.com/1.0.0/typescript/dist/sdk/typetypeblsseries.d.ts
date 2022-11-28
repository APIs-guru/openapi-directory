import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeBlsSeries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeBlsSeries - Search API for 'BLS Series' entry type
     *
     * API to search for entries of type BLS Series
    **/
    searchTypeBlsSeries(req: operations.SearchTypeBlsSeriesRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeBlsSeriesResponse>;
}
