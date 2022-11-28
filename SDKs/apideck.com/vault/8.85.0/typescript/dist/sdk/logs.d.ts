import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Logs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * logsAll - Get all consumer request logs
     *
     * This endpoint includes all consumer request logs.
     *
    **/
    logsAll(req: operations.LogsAllRequest, config?: AxiosRequestConfig): Promise<operations.LogsAllResponse>;
}
