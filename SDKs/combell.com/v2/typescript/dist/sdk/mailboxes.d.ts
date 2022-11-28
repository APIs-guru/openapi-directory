import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Mailboxes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * changeMailboxPassword - Change password for mailbox
    **/
    changeMailboxPassword(req: operations.ChangeMailboxPasswordRequest, config?: AxiosRequestConfig): Promise<operations.ChangeMailboxPasswordResponse>;
    /**
     * configureMailboxAutoForward - Configure auto-forward for mailbox
    **/
    configureMailboxAutoForward(req: operations.ConfigureMailboxAutoForwardRequest, config?: AxiosRequestConfig): Promise<operations.ConfigureMailboxAutoForwardResponse>;
    /**
     * configureMailboxAutoReply - Configure auto-reply for mailbox
    **/
    configureMailboxAutoReply(req: operations.ConfigureMailboxAutoReplyRequest, config?: AxiosRequestConfig): Promise<operations.ConfigureMailboxAutoReplyResponse>;
    /**
     * createMailbox - Create a new mailbox.
    **/
    createMailbox(req: operations.CreateMailboxRequest, config?: AxiosRequestConfig): Promise<operations.CreateMailboxResponse>;
    /**
     * deleteMailbox - Delete a mailbox
    **/
    deleteMailbox(req: operations.DeleteMailboxRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMailboxResponse>;
    /**
     * getMailbox - Get a specific mailbox
    **/
    getMailbox(req: operations.GetMailboxRequest, config?: AxiosRequestConfig): Promise<operations.GetMailboxResponse>;
    /**
     * getMailboxes - Gets your mailboxes.
     *
     * Currently only supports getting the mailboxes filtered by domain name.
    **/
    getMailboxes(req: operations.GetMailboxesRequest, config?: AxiosRequestConfig): Promise<operations.GetMailboxesResponse>;
}
