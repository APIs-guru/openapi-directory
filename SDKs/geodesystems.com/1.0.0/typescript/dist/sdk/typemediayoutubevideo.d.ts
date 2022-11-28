import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeMediaYoutubevideo {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchMediaYoutubevideo - Search API for 'YouTube Video' entry type
     *
     * API to search for entries of type YouTube Video
    **/
    searchMediaYoutubevideo(req: operations.SearchMediaYoutubevideoRequest, config?: AxiosRequestConfig): Promise<operations.SearchMediaYoutubevideoResponse>;
}
