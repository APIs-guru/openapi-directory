import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeFredSeries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeFredSeries - Search API for 'FRED Series' entry type
     *
     * API to search for entries of type FRED Series
    **/
    searchTypeFredSeries(req: operations.SearchTypeFredSeriesRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeFredSeriesResponse>;
}
