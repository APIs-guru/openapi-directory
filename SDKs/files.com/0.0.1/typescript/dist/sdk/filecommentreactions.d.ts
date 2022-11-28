import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FileCommentReactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteFileCommentReactionsId - Delete File Comment Reaction
     *
     * Delete File Comment Reaction
    **/
    deleteFileCommentReactionsId(req: operations.DeleteFileCommentReactionsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFileCommentReactionsIdResponse>;
    /**
     * postFileCommentReactions - Create File Comment Reaction
     *
     * Create File Comment Reaction
    **/
    postFileCommentReactions(req: operations.PostFileCommentReactionsRequest, config?: AxiosRequestConfig): Promise<operations.PostFileCommentReactionsResponse>;
}
