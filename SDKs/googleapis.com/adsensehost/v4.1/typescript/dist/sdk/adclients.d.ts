import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Adclients {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * adsensehostAdclientsGet - Get information about one of the ad clients in the Host AdSense account.
    **/
    adsensehostAdclientsGet(req: operations.AdsensehostAdclientsGetRequest, config?: AxiosRequestConfig): Promise<operations.AdsensehostAdclientsGetResponse>;
    /**
     * adsensehostAdclientsList - List all host ad clients in this AdSense account.
    **/
    adsensehostAdclientsList(req: operations.AdsensehostAdclientsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsensehostAdclientsListResponse>;
}
