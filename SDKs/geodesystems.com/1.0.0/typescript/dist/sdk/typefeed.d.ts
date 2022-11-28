import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeFeed {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchFeed - Search API for 'RSS/ATOM Feed' entry type
     *
     * API to search for entries of type RSS/ATOM Feed
    **/
    searchFeed(req: operations.SearchFeedRequest, config?: AxiosRequestConfig): Promise<operations.SearchFeedResponse>;
}
