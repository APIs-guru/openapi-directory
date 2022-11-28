import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ApiResources {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * apiResourceCoverageOne - Get API Resource Coverage
     *
     * Get API Resource Coverage
    **/
    apiResourceCoverageOne(req: operations.ApiResourceCoverageOneRequest, config?: AxiosRequestConfig): Promise<operations.ApiResourceCoverageOneResponse>;
    /**
     * apiResourcesOne - Get API Resource
     *
     * Get API Resource
    **/
    apiResourcesOne(req: operations.ApiResourcesOneRequest, config?: AxiosRequestConfig): Promise<operations.ApiResourcesOneResponse>;
}
