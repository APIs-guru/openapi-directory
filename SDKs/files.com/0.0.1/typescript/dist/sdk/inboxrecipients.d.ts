import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class InboxRecipients {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getInboxRecipients - List Inbox Recipients
     *
     * List Inbox Recipients
    **/
    getInboxRecipients(req: operations.GetInboxRecipientsRequest, config?: AxiosRequestConfig): Promise<operations.GetInboxRecipientsResponse>;
    /**
     * postInboxRecipients - Create Inbox Recipient
     *
     * Create Inbox Recipient
    **/
    postInboxRecipients(req: operations.PostInboxRecipientsRequest, config?: AxiosRequestConfig): Promise<operations.PostInboxRecipientsResponse>;
}
