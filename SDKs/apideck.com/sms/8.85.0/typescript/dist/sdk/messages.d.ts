import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Messages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * messagesAdd - Create Message
     *
     * Create Message
    **/
    messagesAdd(req: operations.MessagesAddRequest, config?: AxiosRequestConfig): Promise<operations.MessagesAddResponse>;
    /**
     * messagesAll - List Messages
     *
     * List Messages
    **/
    messagesAll(req: operations.MessagesAllRequest, config?: AxiosRequestConfig): Promise<operations.MessagesAllResponse>;
    /**
     * messagesDelete - Delete Message
     *
     * Delete Message
    **/
    messagesDelete(req: operations.MessagesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.MessagesDeleteResponse>;
    /**
     * messagesOne - Get Message
     *
     * Get Message
    **/
    messagesOne(req: operations.MessagesOneRequest, config?: AxiosRequestConfig): Promise<operations.MessagesOneResponse>;
    /**
     * messagesUpdate - Update Message
     *
     * Update Message
    **/
    messagesUpdate(req: operations.MessagesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.MessagesUpdateResponse>;
}
