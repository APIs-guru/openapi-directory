import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Inapppurchases {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * androidpublisherInapppurchasesGet - Checks the purchase and consumption status of an inapp item.
    **/
    androidpublisherInapppurchasesGet(req: operations.AndroidpublisherInapppurchasesGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInapppurchasesGetResponse>;
}
