import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeStatusboard {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchStatusboard - Search API for 'Status Board' entry type
     *
     * API to search for entries of type Status Board
    **/
    searchStatusboard(req: operations.SearchStatusboardRequest, config?: AxiosRequestConfig): Promise<operations.SearchStatusboardResponse>;
}
