import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeCommunityResource {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchCommunityResource - Search API for 'Facility' entry type
     *
     * API to search for entries of type Facility
    **/
    searchCommunityResource(req: operations.SearchCommunityResourceRequest, config?: AxiosRequestConfig): Promise<operations.SearchCommunityResourceResponse>;
}
