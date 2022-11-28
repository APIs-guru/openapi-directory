import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Orders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * androidpublisherOrdersRefund - Refund a user's subscription or in-app purchase order.
    **/
    androidpublisherOrdersRefund(req: operations.AndroidpublisherOrdersRefundRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherOrdersRefundResponse>;
}
