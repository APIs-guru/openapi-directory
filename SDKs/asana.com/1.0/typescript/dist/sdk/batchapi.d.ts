import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class BatchApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createBatchRequest - Submit parallel requests
     *
     * Make multiple requests in parallel to Asana's API.
    **/
    createBatchRequest(req: operations.CreateBatchRequestRequest, config?: AxiosRequestConfig): Promise<operations.CreateBatchRequestResponse>;
}
