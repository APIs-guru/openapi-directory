import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SyncJobs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getSyncJobs - List Sync Jobs
     *
     * List Sync Jobs
    **/
    getSyncJobs(req: operations.GetSyncJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetSyncJobsResponse>;
}
