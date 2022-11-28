import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeNotesNote {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchNotesNote - Search API for 'Note' entry type
     *
     * API to search for entries of type Note
    **/
    searchNotesNote(req: operations.SearchNotesNoteRequest, config?: AxiosRequestConfig): Promise<operations.SearchNotesNoteResponse>;
}
