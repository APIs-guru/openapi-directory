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
     * adsensehostCustomchannelsDelete - Delete a specific custom channel from the host AdSense account.
    **/
    adsensehostCustomchannelsDelete(req: operations.AdsensehostCustomchannelsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AdsensehostCustomchannelsDeleteResponse>;
    /**
     * adsensehostCustomchannelsGet - Get a specific custom channel from the host AdSense account.
    **/
    adsensehostCustomchannelsGet(req: operations.AdsensehostCustomchannelsGetRequest, config?: AxiosRequestConfig): Promise<operations.AdsensehostCustomchannelsGetResponse>;
    /**
     * adsensehostCustomchannelsInsert - Add a new custom channel to the host AdSense account.
    **/
    adsensehostCustomchannelsInsert(req: operations.AdsensehostCustomchannelsInsertRequest, config?: AxiosRequestConfig): Promise<operations.AdsensehostCustomchannelsInsertResponse>;
    /**
     * adsensehostCustomchannelsList - List all host custom channels in this AdSense account.
    **/
    adsensehostCustomchannelsList(req: operations.AdsensehostCustomchannelsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsensehostCustomchannelsListResponse>;
    /**
     * adsensehostCustomchannelsPatch - Update a custom channel in the host AdSense account. This method supports patch semantics.
    **/
    adsensehostCustomchannelsPatch(req: operations.AdsensehostCustomchannelsPatchRequest, config?: AxiosRequestConfig): Promise<operations.AdsensehostCustomchannelsPatchResponse>;
    /**
     * adsensehostCustomchannelsUpdate - Update a custom channel in the host AdSense account.
    **/
    adsensehostCustomchannelsUpdate(req: operations.AdsensehostCustomchannelsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AdsensehostCustomchannelsUpdateResponse>;
}
