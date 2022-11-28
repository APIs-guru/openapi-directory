import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeBlogentry {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchBlogentry - Search API for 'Weblog Entry' entry type
     *
     * API to search for entries of type Weblog Entry
    **/
    searchBlogentry(req: operations.SearchBlogentryRequest, config?: AxiosRequestConfig): Promise<operations.SearchBlogentryResponse>;
}
