import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypePointNcdcClimate {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypePointNcdcClimate - Search API for 'NC  DC Climate Data' entry type
     *
     * API to search for entries of type NC  DC Climate Data
    **/
    searchTypePointNcdcClimate(req: operations.SearchTypePointNcdcClimateRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointNcdcClimateResponse>;
}
