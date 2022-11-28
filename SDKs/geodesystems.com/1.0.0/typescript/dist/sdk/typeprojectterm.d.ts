import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeProjectTerm {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchProjectTerm - Search API for 'Vocabulary Term' entry type
     *
     * API to search for entries of type Vocabulary Term
    **/
    searchProjectTerm(req: operations.SearchProjectTermRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectTermResponse>;
}
