import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeNotesJsonfile {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchNotesJsonfile - Search API for 'Json File' entry type
     *
     * API to search for entries of type Json File
    **/
    searchNotesJsonfile(req: operations.SearchNotesJsonfileRequest, config?: AxiosRequestConfig): Promise<operations.SearchNotesJsonfileResponse>;
}
