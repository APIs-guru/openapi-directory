import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeNitf {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeNitf - Search API for 'NITF File' entry type
     *
     * API to search for entries of type NITF File
    **/
    searchTypeNitf(req: operations.SearchTypeNitfRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeNitfResponse>;
}
