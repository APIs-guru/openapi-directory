import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Jobs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * jobsAll - List Jobs
     *
     * List Jobs
    **/
    jobsAll(req: operations.JobsAllRequest, config?: AxiosRequestConfig): Promise<operations.JobsAllResponse>;
    /**
     * jobsOne - Get Job
     *
     * Get Job
    **/
    jobsOne(req: operations.JobsOneRequest, config?: AxiosRequestConfig): Promise<operations.JobsOneResponse>;
}
