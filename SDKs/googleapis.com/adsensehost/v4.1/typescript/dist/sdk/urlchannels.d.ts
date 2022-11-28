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
     * adsensehostUrlchannelsDelete - Delete a URL channel from the host AdSense account.
    **/
    adsensehostUrlchannelsDelete(req: operations.AdsensehostUrlchannelsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AdsensehostUrlchannelsDeleteResponse>;
    /**
     * adsensehostUrlchannelsInsert - Add a new URL channel to the host AdSense account.
    **/
    adsensehostUrlchannelsInsert(req: operations.AdsensehostUrlchannelsInsertRequest, config?: AxiosRequestConfig): Promise<operations.AdsensehostUrlchannelsInsertResponse>;
    /**
     * adsensehostUrlchannelsList - List all host URL channels in the host AdSense account.
    **/
    adsensehostUrlchannelsList(req: operations.AdsensehostUrlchannelsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsensehostUrlchannelsListResponse>;
}
