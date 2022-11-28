import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Requests {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteRequestsId - Delete Request
     *
     * Delete Request
    **/
    deleteRequestsId(req: operations.DeleteRequestsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRequestsIdResponse>;
    /**
     * getRequests - List Requests
     *
     * List Requests
    **/
    getRequests(req: operations.GetRequestsRequest, config?: AxiosRequestConfig): Promise<operations.GetRequestsResponse>;
    /**
     * getRequestsFoldersPath - List Requests
     *
     * List Requests
    **/
    getRequestsFoldersPath(req: operations.GetRequestsFoldersPathRequest, config?: AxiosRequestConfig): Promise<operations.GetRequestsFoldersPathResponse>;
    /**
     * postRequests - Create Request
     *
     * Create Request
    **/
    postRequests(req: operations.PostRequestsRequest, config?: AxiosRequestConfig): Promise<operations.PostRequestsResponse>;
}
