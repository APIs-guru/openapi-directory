import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ApIs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * apisAll - List APIs
     *
     * List APIs
    **/
    apisAll(req: operations.ApisAllRequest, config?: AxiosRequestConfig): Promise<operations.ApisAllResponse>;
    /**
     * apisOne - Get API
     *
     * Get API
    **/
    apisOne(req: operations.ApisOneRequest, config?: AxiosRequestConfig): Promise<operations.ApisOneResponse>;
}
