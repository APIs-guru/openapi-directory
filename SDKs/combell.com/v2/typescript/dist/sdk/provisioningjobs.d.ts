import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ProvisioningJobs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getProvisioningjobsJobId - Detail of a provisioning job
     *
     * Provisioning failures may occur. Contact support in the event of a failure or wait for error resolution.<br />
     * Do NOT retry provisioning until the job reports finished or cancelled.
    **/
    getProvisioningjobsJobId(req: operations.GetProvisioningjobsJobIdRequest, config?: AxiosRequestConfig): Promise<operations.GetProvisioningjobsJobIdResponse>;
}
