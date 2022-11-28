import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeProjectSoftwarepackage {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchProjectSoftwarepackage - Search API for 'Software Tool' entry type
     *
     * API to search for entries of type Software Tool
    **/
    searchProjectSoftwarepackage(req: operations.SearchProjectSoftwarepackageRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectSoftwarepackageResponse>;
}
