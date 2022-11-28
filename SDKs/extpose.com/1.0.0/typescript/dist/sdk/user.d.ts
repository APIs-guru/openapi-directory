import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class User {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getUserExtensions - Get User Extensions
     *
     * This endpoint allows you to get list of your extensions including extensions from the watchlist.
    **/
    getUserExtensions(req: operations.GetUserExtensionsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserExtensionsResponse>;
}
