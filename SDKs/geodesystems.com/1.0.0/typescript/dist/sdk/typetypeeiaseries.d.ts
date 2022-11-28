import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeEiaSeries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeEiaSeries - Search API for 'EIA Series' entry type
     *
     * API to search for entries of type EIA Series
    **/
    searchTypeEiaSeries(req: operations.SearchTypeEiaSeriesRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeEiaSeriesResponse>;
}
