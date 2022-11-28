import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PerformanceReport {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * adexchangebuyerPerformanceReportList - Retrieves the authenticated user's list of performance metrics.
    **/
    adexchangebuyerPerformanceReportList(req: operations.AdexchangebuyerPerformanceReportListRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerPerformanceReportListResponse>;
}
