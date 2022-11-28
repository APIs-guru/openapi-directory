import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypePropertydb {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchPropertydb - Search API for 'Property Database' entry type
     *
     * API to search for entries of type Property Database
    **/
    searchPropertydb(req: operations.SearchPropertydbRequest, config?: AxiosRequestConfig): Promise<operations.SearchPropertydbResponse>;
}
