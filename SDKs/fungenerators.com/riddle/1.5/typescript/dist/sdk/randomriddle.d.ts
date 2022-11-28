import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RandomRiddle {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getRiddleRandom - Get a random riddle for a given category(optional)
    **/
    getRiddleRandom(req: operations.GetRiddleRandomRequest, config?: AxiosRequestConfig): Promise<operations.GetRiddleRandomResponse>;
    /**
     * getRiddleSearch - Search for random riddle which has the text in the query, for a given category(optional).
    **/
    getRiddleSearch(req: operations.GetRiddleSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetRiddleSearchResponse>;
}
