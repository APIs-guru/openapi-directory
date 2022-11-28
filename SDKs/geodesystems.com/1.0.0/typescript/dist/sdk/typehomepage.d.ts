import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeHomepage {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchHomepage - Search API for 'Home Page' entry type
     *
     * API to search for entries of type Home Page
    **/
    searchHomepage(req: operations.SearchHomepageRequest, config?: AxiosRequestConfig): Promise<operations.SearchHomepageResponse>;
}
