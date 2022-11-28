import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTodo {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTodo - Search API for 'Todo' entry type
     *
     * API to search for entries of type Todo
    **/
    searchTodo(req: operations.SearchTodoRequest, config?: AxiosRequestConfig): Promise<operations.SearchTodoResponse>;
}
