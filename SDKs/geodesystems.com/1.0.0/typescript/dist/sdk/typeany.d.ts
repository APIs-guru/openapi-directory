import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeAny {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchAny - Search API for 'Any file type' entry type
     *
     * API to search for entries of type Any file type
    **/
    searchAny(req: operations.SearchAnyRequest, config?: AxiosRequestConfig): Promise<operations.SearchAnyResponse>;
}
