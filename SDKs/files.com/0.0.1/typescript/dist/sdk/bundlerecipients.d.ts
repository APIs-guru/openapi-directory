import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class BundleRecipients {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getBundleRecipients - List Bundle Recipients
     *
     * List Bundle Recipients
    **/
    getBundleRecipients(req: operations.GetBundleRecipientsRequest, config?: AxiosRequestConfig): Promise<operations.GetBundleRecipientsResponse>;
    /**
     * postBundleRecipients - Create Bundle Recipient
     *
     * Create Bundle Recipient
    **/
    postBundleRecipients(req: operations.PostBundleRecipientsRequest, config?: AxiosRequestConfig): Promise<operations.PostBundleRecipientsResponse>;
}
