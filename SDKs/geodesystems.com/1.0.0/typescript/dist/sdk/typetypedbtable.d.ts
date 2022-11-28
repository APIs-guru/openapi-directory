import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeDbTable {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeDbTable - Search API for 'Database Table' entry type
     *
     * API to search for entries of type Database Table
    **/
    searchTypeDbTable(req: operations.SearchTypeDbTableRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeDbTableResponse>;
}
