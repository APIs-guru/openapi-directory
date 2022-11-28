import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Channels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * adminChannelsStop - Stop watching resources through this channel.
    **/
    adminChannelsStop(req: operations.AdminChannelsStopRequest, config?: AxiosRequestConfig): Promise<operations.AdminChannelsStopResponse>;
}
