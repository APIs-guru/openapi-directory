import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeMediaAudiofile {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchMediaAudiofile - Search API for 'Audio File' entry type
     *
     * API to search for entries of type Audio File
    **/
    searchMediaAudiofile(req: operations.SearchMediaAudiofileRequest, config?: AxiosRequestConfig): Promise<operations.SearchMediaAudiofileResponse>;
}
