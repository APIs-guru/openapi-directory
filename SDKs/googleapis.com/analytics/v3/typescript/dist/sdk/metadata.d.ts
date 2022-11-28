import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Metadata {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * analyticsMetadataColumnsList - Lists all columns for a report type
    **/
    analyticsMetadataColumnsList(req: operations.AnalyticsMetadataColumnsListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsMetadataColumnsListResponse>;
}
