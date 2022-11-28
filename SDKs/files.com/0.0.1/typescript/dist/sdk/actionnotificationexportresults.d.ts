import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ActionNotificationExportResults {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getActionNotificationExportResults - List Action Notification Export Results
     *
     * List Action Notification Export Results
    **/
    getActionNotificationExportResults(req: operations.GetActionNotificationExportResultsRequest, config?: AxiosRequestConfig): Promise<operations.GetActionNotificationExportResultsResponse>;
}
