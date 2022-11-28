import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ApiKey {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * apiKeyDeleteCurrent - Delete current API key.  (Requires current API connection to be using an API key.)
     *
     * Delete current API key.  (Requires current API connection to be using an API key.)
    **/
    apiKeyDeleteCurrent(config?: AxiosRequestConfig): Promise<operations.ApiKeyDeleteCurrentResponse>;
    /**
     * apiKeyFindCurrent - Show information about current API key.  (Requires current API connection to be using an API key.)
     *
     * Show information about current API key.  (Requires current API connection to be using an API key.)
    **/
    apiKeyFindCurrent(config?: AxiosRequestConfig): Promise<operations.ApiKeyFindCurrentResponse>;
    /**
     * apiKeyUpdateCurrent - Update current API key.  (Requires current API connection to be using an API key.)
     *
     * Update current API key.  (Requires current API connection to be using an API key.)
    **/
    apiKeyUpdateCurrent(req: operations.ApiKeyUpdateCurrentRequest, config?: AxiosRequestConfig): Promise<operations.ApiKeyUpdateCurrentResponse>;
}
