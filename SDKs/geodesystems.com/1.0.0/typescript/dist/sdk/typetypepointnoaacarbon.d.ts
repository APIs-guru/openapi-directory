import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypePointNoaaCarbon {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypePointNoaaCarbon - Search API for 'NOAA Carbon Measurements' entry type
     *
     * API to search for entries of type NOAA Carbon Measurements
    **/
    searchTypePointNoaaCarbon(req: operations.SearchTypePointNoaaCarbonRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointNoaaCarbonResponse>;
}
