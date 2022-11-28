import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Urlchannels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * adsenseUrlchannelsList - List all URL channels in the specified ad client for this AdSense account.
    **/
    adsenseUrlchannelsList(req: operations.AdsenseUrlchannelsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseUrlchannelsListResponse>;
}
