import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class MessageComments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteMessageCommentsId - Delete Message Comment
     *
     * Delete Message Comment
    **/
    deleteMessageCommentsId(req: operations.DeleteMessageCommentsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMessageCommentsIdResponse>;
    /**
     * getMessageComments - List Message Comments
     *
     * List Message Comments
    **/
    getMessageComments(req: operations.GetMessageCommentsRequest, config?: AxiosRequestConfig): Promise<operations.GetMessageCommentsResponse>;
    /**
     * getMessageCommentsId - Show Message Comment
     *
     * Show Message Comment
    **/
    getMessageCommentsId(req: operations.GetMessageCommentsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetMessageCommentsIdResponse>;
    /**
     * patchMessageCommentsId - Update Message Comment
     *
     * Update Message Comment
    **/
    patchMessageCommentsId(req: operations.PatchMessageCommentsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchMessageCommentsIdResponse>;
    /**
     * postMessageComments - Create Message Comment
     *
     * Create Message Comment
    **/
    postMessageComments(req: operations.PostMessageCommentsRequest, config?: AxiosRequestConfig): Promise<operations.PostMessageCommentsResponse>;
}
