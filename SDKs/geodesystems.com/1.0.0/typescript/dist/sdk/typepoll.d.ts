import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypePoll {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchPoll - Search API for 'Poll' entry type
     *
     * API to search for entries of type Poll
    **/
    searchPoll(req: operations.SearchPollRequest, config?: AxiosRequestConfig): Promise<operations.SearchPollResponse>;
}
