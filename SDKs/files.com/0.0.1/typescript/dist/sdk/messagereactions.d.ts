import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class MessageReactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteMessageReactionsId - Delete Message Reaction
     *
     * Delete Message Reaction
    **/
    deleteMessageReactionsId(req: operations.DeleteMessageReactionsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMessageReactionsIdResponse>;
    /**
     * getMessageReactions - List Message Reactions
     *
     * List Message Reactions
    **/
    getMessageReactions(req: operations.GetMessageReactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetMessageReactionsResponse>;
    /**
     * getMessageReactionsId - Show Message Reaction
     *
     * Show Message Reaction
    **/
    getMessageReactionsId(req: operations.GetMessageReactionsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetMessageReactionsIdResponse>;
    /**
     * postMessageReactions - Create Message Reaction
     *
     * Create Message Reaction
    **/
    postMessageReactions(req: operations.PostMessageReactionsRequest, config?: AxiosRequestConfig): Promise<operations.PostMessageReactionsResponse>;
}
