import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypePointNoaaFlaskMonth {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypePointNoaaFlaskMonth - Search API for 'NOAA Flask Month Measurements' entry type
     *
     * API to search for entries of type NOAA Flask Month Measurements
    **/
    searchTypePointNoaaFlaskMonth(req: operations.SearchTypePointNoaaFlaskMonthRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointNoaaFlaskMonthResponse>;
}
