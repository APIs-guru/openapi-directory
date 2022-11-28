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
     * deleteMessagesId - Delete Message
     *
     * Delete Message
    **/
    deleteMessagesId(req: operations.DeleteMessagesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMessagesIdResponse>;
    /**
     * getMessages - List Messages
     *
     * List Messages
    **/
    getMessages(req: operations.GetMessagesRequest, config?: AxiosRequestConfig): Promise<operations.GetMessagesResponse>;
    /**
     * getMessagesId - Show Message
     *
     * Show Message
    **/
    getMessagesId(req: operations.GetMessagesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetMessagesIdResponse>;
    /**
     * patchMessagesId - Update Message
     *
     * Update Message
    **/
    patchMessagesId(req: operations.PatchMessagesIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchMessagesIdResponse>;
    /**
     * postMessages - Create Message
     *
     * Create Message
    **/
    postMessages(req: operations.PostMessagesRequest, config?: AxiosRequestConfig): Promise<operations.PostMessagesResponse>;
}
