import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SsoStrategies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getSsoStrategies - List Sso Strategies
     *
     * List Sso Strategies
    **/
    getSsoStrategies(req: operations.GetSsoStrategiesRequest, config?: AxiosRequestConfig): Promise<operations.GetSsoStrategiesResponse>;
    /**
     * getSsoStrategiesId - Show Sso Strategy
     *
     * Show Sso Strategy
    **/
    getSsoStrategiesId(req: operations.GetSsoStrategiesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSsoStrategiesIdResponse>;
}
