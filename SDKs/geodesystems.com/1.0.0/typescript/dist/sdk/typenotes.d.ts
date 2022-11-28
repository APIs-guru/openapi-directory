import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeNotes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchNotes - Search API for 'Notes' entry type
     *
     * API to search for entries of type Notes
    **/
    searchNotes(req: operations.SearchNotesRequest, config?: AxiosRequestConfig): Promise<operations.SearchNotesResponse>;
}
