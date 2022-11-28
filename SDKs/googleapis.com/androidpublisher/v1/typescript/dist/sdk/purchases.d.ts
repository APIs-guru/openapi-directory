import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Purchases {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * androidpublisherPurchasesCancel - Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
    **/
    androidpublisherPurchasesCancel(req: operations.AndroidpublisherPurchasesCancelRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherPurchasesCancelResponse>;
    /**
     * androidpublisherPurchasesGet - Checks whether a user's subscription purchase is valid and returns its expiry time.
    **/
    androidpublisherPurchasesGet(req: operations.AndroidpublisherPurchasesGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherPurchasesGetResponse>;
}
