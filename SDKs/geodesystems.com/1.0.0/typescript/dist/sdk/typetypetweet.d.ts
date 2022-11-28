import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeTweet {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeTweet - Search API for 'Tweet' entry type
     *
     * API to search for entries of type Tweet
    **/
    searchTypeTweet(req: operations.SearchTypeTweetRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeTweetResponse>;
}
