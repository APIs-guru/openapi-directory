import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypePasteitentry {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchPasteitentry - Search API for 'Paste Text Entry' entry type
     *
     * API to search for entries of type Paste Text Entry
    **/
    searchPasteitentry(req: operations.SearchPasteitentryRequest, config?: AxiosRequestConfig): Promise<operations.SearchPasteitentryResponse>;
}
