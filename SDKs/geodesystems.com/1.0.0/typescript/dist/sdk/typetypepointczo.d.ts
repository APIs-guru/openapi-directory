import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypePointCzo {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypePointCzo - Search API for 'CZO Display File Format' entry type
     *
     * API to search for entries of type CZO Display File Format
    **/
    searchTypePointCzo(req: operations.SearchTypePointCzoRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointCzoResponse>;
}
