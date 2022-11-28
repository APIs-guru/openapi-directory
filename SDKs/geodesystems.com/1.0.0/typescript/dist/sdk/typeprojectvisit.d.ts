import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeProjectVisit {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchProjectVisit - Search API for 'Site Visit' entry type
     *
     * API to search for entries of type Site Visit
    **/
    searchProjectVisit(req: operations.SearchProjectVisitRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectVisitResponse>;
}
