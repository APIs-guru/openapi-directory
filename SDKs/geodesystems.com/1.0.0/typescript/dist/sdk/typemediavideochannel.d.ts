import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeMediaVideoChannel {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchMediaVideoChannel - Search API for 'Video Channel' entry type
     *
     * API to search for entries of type Video Channel
    **/
    searchMediaVideoChannel(req: operations.SearchMediaVideoChannelRequest, config?: AxiosRequestConfig): Promise<operations.SearchMediaVideoChannelResponse>;
}
