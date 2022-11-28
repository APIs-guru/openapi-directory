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
     * adsenseReportsGenerate - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
    **/
    adsenseReportsGenerate(req: operations.AdsenseReportsGenerateRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseReportsGenerateResponse>;
    /**
     * adsenseReportsSavedGenerate - Generate an AdSense report based on the saved report ID sent in the query parameters.
    **/
    adsenseReportsSavedGenerate(req: operations.AdsenseReportsSavedGenerateRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseReportsSavedGenerateResponse>;
    /**
     * adsenseReportsSavedList - List all saved reports in this AdSense account.
    **/
    adsenseReportsSavedList(req: operations.AdsenseReportsSavedListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseReportsSavedListResponse>;
}
