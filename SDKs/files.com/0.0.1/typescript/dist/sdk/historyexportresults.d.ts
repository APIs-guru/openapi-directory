import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class HistoryExportResults {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getHistoryExportResults - List History Export Results
     *
     * List History Export Results
    **/
    getHistoryExportResults(req: operations.GetHistoryExportResultsRequest, config?: AxiosRequestConfig): Promise<operations.GetHistoryExportResultsResponse>;
}
