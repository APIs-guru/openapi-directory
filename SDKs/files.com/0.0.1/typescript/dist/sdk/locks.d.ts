import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Locks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteLocksPath - Delete Lock
     *
     * Delete Lock
    **/
    deleteLocksPath(req: operations.DeleteLocksPathRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLocksPathResponse>;
    /**
     * lockListForPath - List Locks by path
     *
     * List Locks by path
    **/
    lockListForPath(req: operations.LockListForPathRequest, config?: AxiosRequestConfig): Promise<operations.LockListForPathResponse>;
    /**
     * postLocksPath - Create Lock
     *
     * Create Lock
    **/
    postLocksPath(req: operations.PostLocksPathRequest, config?: AxiosRequestConfig): Promise<operations.PostLocksPathResponse>;
}
