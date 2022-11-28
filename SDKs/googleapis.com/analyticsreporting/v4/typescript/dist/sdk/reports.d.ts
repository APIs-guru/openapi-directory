import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Reports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * analyticsreportingReportsBatchGet - Returns the Analytics data.
    **/
    analyticsreportingReportsBatchGet(req: operations.AnalyticsreportingReportsBatchGetRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsreportingReportsBatchGetResponse>;
}
