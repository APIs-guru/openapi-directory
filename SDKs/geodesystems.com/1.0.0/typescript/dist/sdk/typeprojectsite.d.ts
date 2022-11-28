import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeProjectSite {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchProjectSite - Search API for 'Site' entry type
     *
     * API to search for entries of type Site
    **/
    searchProjectSite(req: operations.SearchProjectSiteRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectSiteResponse>;
}
