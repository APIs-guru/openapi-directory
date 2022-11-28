import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ActionWebhookFailures {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postActionWebhookFailuresIdRetry - retry Action Webhook Failure
     *
     * retry Action Webhook Failure
    **/
    postActionWebhookFailuresIdRetry(req: operations.PostActionWebhookFailuresIdRetryRequest, config?: AxiosRequestConfig): Promise<operations.PostActionWebhookFailuresIdRetryResponse>;
}
