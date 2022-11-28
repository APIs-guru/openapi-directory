import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Schema {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getApi - Get API definition
     *
     * Get API definition
    **/
    getApi(config?: AxiosRequestConfig): Promise<operations.GetApiResponse>;
    /**
     * getXsd - Get Schema definition
     *
     * Get Schema definition
    **/
    getXsd(config?: AxiosRequestConfig): Promise<operations.GetXsdResponse>;
}
