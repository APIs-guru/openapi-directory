import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeUsgsGauge {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeUsgsGauge - Search API for 'USGS Stream Gauge' entry type
     *
     * API to search for entries of type USGS Stream Gauge
    **/
    searchTypeUsgsGauge(req: operations.SearchTypeUsgsGaugeRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeUsgsGaugeResponse>;
}
