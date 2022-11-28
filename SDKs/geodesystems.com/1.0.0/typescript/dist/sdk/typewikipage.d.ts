import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeWikipage {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchWikipage - Search API for 'Wiki Page' entry type
     *
     * API to search for entries of type Wiki Page
    **/
    searchWikipage(req: operations.SearchWikipageRequest, config?: AxiosRequestConfig): Promise<operations.SearchWikipageResponse>;
}
