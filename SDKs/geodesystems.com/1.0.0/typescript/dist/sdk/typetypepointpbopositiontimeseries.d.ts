import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypePointPboPositionTimeSeries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypePointPboPositionTimeSeries - Search API for 'PBO Position Time Series' entry type
     *
     * API to search for entries of type PBO Position Time Series
    **/
    searchTypePointPboPositionTimeSeries(req: operations.SearchTypePointPboPositionTimeSeriesRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointPboPositionTimeSeriesResponse>;
}
