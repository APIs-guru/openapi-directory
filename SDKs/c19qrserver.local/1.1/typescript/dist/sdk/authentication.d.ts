import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Authentication {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postLogin - Log in to get an API token
     *
     * Submit your email and password to get an API token
    **/
    postLogin(req: operations.PostLoginRequest, config?: AxiosRequestConfig): Promise<operations.PostLoginResponse>;
    /**
     * postLogout - Log out
     *
     * Log out by deleting your token off the server.
    **/
    postLogout(config?: AxiosRequestConfig): Promise<operations.PostLogoutResponse>;
}
