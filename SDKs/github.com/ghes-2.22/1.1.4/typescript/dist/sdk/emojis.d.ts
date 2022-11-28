import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Emojis {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * emojisGet - Get emojis
     *
     * Lists all the emojis available to use on GitHub Enterprise Server.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/emojis#get-emojis - API method documentation
    **/
    emojisGet(config?: AxiosRequestConfig): Promise<operations.EmojisGetResponse>;
}
