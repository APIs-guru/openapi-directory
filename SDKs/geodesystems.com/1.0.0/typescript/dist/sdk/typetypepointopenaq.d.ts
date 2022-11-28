import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypePointOpenaq {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypePointOpenaq - Search API for 'Open AQ Air Quality' entry type
     *
     * API to search for entries of type Open AQ Air Quality
    **/
    searchTypePointOpenaq(req: operations.SearchTypePointOpenaqRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointOpenaqResponse>;
}
