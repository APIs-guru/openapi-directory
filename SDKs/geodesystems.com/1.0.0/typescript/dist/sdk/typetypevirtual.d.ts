import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeVirtual {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeVirtual - Search API for 'Virtual Group' entry type
     *
     * API to search for entries of type Virtual Group
    **/
    searchTypeVirtual(req: operations.SearchTypeVirtualRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeVirtualResponse>;
}
