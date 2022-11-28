import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Payments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * adsensePaymentsList - List the payments for this AdSense account.
    **/
    adsensePaymentsList(req: operations.AdsensePaymentsListRequest, config?: AxiosRequestConfig): Promise<operations.AdsensePaymentsListResponse>;
}
