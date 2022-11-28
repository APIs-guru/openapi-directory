import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeGtfsRoutes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeGtfsRoutes - Search API for 'Transit Route Collection' entry type
     *
     * API to search for entries of type Transit Route Collection
    **/
    searchTypeGtfsRoutes(req: operations.SearchTypeGtfsRoutesRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeGtfsRoutesResponse>;
}
