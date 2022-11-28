import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeNotesNotebook {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchNotesNotebook - Search API for 'Notebook' entry type
     *
     * API to search for entries of type Notebook
    **/
    searchNotesNotebook(req: operations.SearchNotesNotebookRequest, config?: AxiosRequestConfig): Promise<operations.SearchNotesNotebookResponse>;
}
