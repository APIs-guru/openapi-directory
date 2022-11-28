import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Adunits {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * adsenseAdunitsCustomchannelsList - List all custom channels which the specified ad unit belongs to.
    **/
    adsenseAdunitsCustomchannelsList(req: operations.AdsenseAdunitsCustomchannelsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAdunitsCustomchannelsListResponse>;
    /**
     * adsenseAdunitsGet - Gets the specified ad unit in the specified ad client.
    **/
    adsenseAdunitsGet(req: operations.AdsenseAdunitsGetRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAdunitsGetResponse>;
    /**
     * adsenseAdunitsGetAdCode - Get ad code for the specified ad unit.
    **/
    adsenseAdunitsGetAdCode(req: operations.AdsenseAdunitsGetAdCodeRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAdunitsGetAdCodeResponse>;
    /**
     * adsenseAdunitsList - List all ad units in the specified ad client for this AdSense account.
    **/
    adsenseAdunitsList(req: operations.AdsenseAdunitsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseAdunitsListResponse>;
}
