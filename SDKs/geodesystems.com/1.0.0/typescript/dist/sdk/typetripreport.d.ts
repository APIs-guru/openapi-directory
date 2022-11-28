import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTripReport {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTripReport - Search API for 'Trip Report' entry type
     *
     * API to search for entries of type Trip Report
    **/
    searchTripReport(req: operations.SearchTripReportRequest, config?: AxiosRequestConfig): Promise<operations.SearchTripReportResponse>;
}
