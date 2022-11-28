import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypePythonNotebook {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchPythonNotebook - Search API for 'IPython Notebook file' entry type
     *
     * API to search for entries of type IPython Notebook file
    **/
    searchPythonNotebook(req: operations.SearchPythonNotebookRequest, config?: AxiosRequestConfig): Promise<operations.SearchPythonNotebookResponse>;
}
