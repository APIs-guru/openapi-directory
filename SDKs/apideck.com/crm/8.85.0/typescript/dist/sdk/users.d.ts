import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * usersAdd - Create user
     *
     * Create user
    **/
    usersAdd(req: operations.UsersAddRequest, config?: AxiosRequestConfig): Promise<operations.UsersAddResponse>;
    /**
     * usersAll - List users
     *
     * List users
    **/
    usersAll(req: operations.UsersAllRequest, config?: AxiosRequestConfig): Promise<operations.UsersAllResponseOutput>;
    /**
     * usersDelete - Delete user
     *
     * Delete user
    **/
    usersDelete(req: operations.UsersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.UsersDeleteResponse>;
    /**
     * usersOne - Get user
     *
     * Get user
    **/
    usersOne(req: operations.UsersOneRequest, config?: AxiosRequestConfig): Promise<operations.UsersOneResponseOutput>;
    /**
     * usersUpdate - Update user
     *
     * Update user
    **/
    usersUpdate(req: operations.UsersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.UsersUpdateResponse>;
}
