import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class MessageCommentReactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteMessageCommentReactionsId - Delete Message Comment Reaction
     *
     * Delete Message Comment Reaction
    **/
    deleteMessageCommentReactionsId(req: operations.DeleteMessageCommentReactionsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMessageCommentReactionsIdResponse>;
    /**
     * getMessageCommentReactions - List Message Comment Reactions
     *
     * List Message Comment Reactions
    **/
    getMessageCommentReactions(req: operations.GetMessageCommentReactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetMessageCommentReactionsResponse>;
    /**
     * getMessageCommentReactionsId - Show Message Comment Reaction
     *
     * Show Message Comment Reaction
    **/
    getMessageCommentReactionsId(req: operations.GetMessageCommentReactionsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetMessageCommentReactionsIdResponse>;
    /**
     * postMessageCommentReactions - Create Message Comment Reaction
     *
     * Create Message Comment Reaction
    **/
    postMessageCommentReactions(req: operations.PostMessageCommentReactionsRequest, config?: AxiosRequestConfig): Promise<operations.PostMessageCommentReactionsResponse>;
}
