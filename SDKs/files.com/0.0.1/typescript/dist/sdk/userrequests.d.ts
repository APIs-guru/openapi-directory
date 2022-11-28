import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UserRequests {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteUserRequestsId - Delete User Request
     *
     * Delete User Request
    **/
    deleteUserRequestsId(req: operations.DeleteUserRequestsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserRequestsIdResponse>;
    /**
     * getUserRequests - List User Requests
     *
     * List User Requests
    **/
    getUserRequests(req: operations.GetUserRequestsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserRequestsResponse>;
    /**
     * getUserRequestsId - Show User Request
     *
     * Show User Request
    **/
    getUserRequestsId(req: operations.GetUserRequestsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserRequestsIdResponse>;
    /**
     * postUserRequests - Create User Request
     *
     * Create User Request
    **/
    postUserRequests(req: operations.PostUserRequestsRequest, config?: AxiosRequestConfig): Promise<operations.PostUserRequestsResponse>;
}
