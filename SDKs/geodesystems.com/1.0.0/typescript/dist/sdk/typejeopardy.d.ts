import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeJeopardy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchJeopardy - Search API for 'Jeopardy' entry type
     *
     * API to search for entries of type Jeopardy
    **/
    searchJeopardy(req: operations.SearchJeopardyRequest, config?: AxiosRequestConfig): Promise<operations.SearchJeopardyResponse>;
}
