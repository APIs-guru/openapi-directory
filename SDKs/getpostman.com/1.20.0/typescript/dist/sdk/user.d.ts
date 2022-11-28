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
     * apiKeyOwner - API Key Owner
     *
     * the `/me` Postman API endpoint lets you access information about the authenticated user. You can retrieve the authenticated user's username, full name, e-mail address, and any other available information.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    apiKeyOwner(config?: AxiosRequestConfig): Promise<operations.ApiKeyOwnerResponse>;
}
