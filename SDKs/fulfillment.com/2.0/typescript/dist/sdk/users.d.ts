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
     * getUsersMe - About Me
     *
     * Returns the user profile of the access token's owner. This could be useful if managing multiple accounts or confirming validity of a token.
    **/
    getUsersMe(req: operations.GetUsersMeRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersMeResponse>;
}
