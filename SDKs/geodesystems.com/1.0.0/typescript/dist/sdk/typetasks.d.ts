import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTasks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTasks - Search API for 'Tasks' entry type
     *
     * API to search for entries of type Tasks
    **/
    searchTasks(req: operations.SearchTasksRequest, config?: AxiosRequestConfig): Promise<operations.SearchTasksResponse>;
}
