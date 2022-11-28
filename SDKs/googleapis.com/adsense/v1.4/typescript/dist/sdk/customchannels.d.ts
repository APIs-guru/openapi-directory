import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Customchannels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * adsenseCustomchannelsAdunitsList - List all ad units in the specified custom channel.
    **/
    adsenseCustomchannelsAdunitsList(req: operations.AdsenseCustomchannelsAdunitsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseCustomchannelsAdunitsListResponse>;
    /**
     * adsenseCustomchannelsGet - Get the specified custom channel from the specified ad client.
    **/
    adsenseCustomchannelsGet(req: operations.AdsenseCustomchannelsGetRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseCustomchannelsGetResponse>;
    /**
     * adsenseCustomchannelsList - List all custom channels in the specified ad client for this AdSense account.
    **/
    adsenseCustomchannelsList(req: operations.AdsenseCustomchannelsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseCustomchannelsListResponse>;
}
