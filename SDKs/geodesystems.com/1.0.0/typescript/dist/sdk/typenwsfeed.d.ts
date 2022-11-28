import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeNwsfeed {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchNwsfeed - Search API for 'NWS Forecast Feed' entry type
     *
     * API to search for entries of type NWS Forecast Feed
    **/
    searchNwsfeed(req: operations.SearchNwsfeedRequest, config?: AxiosRequestConfig): Promise<operations.SearchNwsfeedResponse>;
}
