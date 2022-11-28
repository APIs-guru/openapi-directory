import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FileComments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteFileCommentsId - Delete File Comment
     *
     * Delete File Comment
    **/
    deleteFileCommentsId(req: operations.DeleteFileCommentsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFileCommentsIdResponse>;
    /**
     * fileCommentListForPath - List File Comments by path
     *
     * List File Comments by path
    **/
    fileCommentListForPath(req: operations.FileCommentListForPathRequest, config?: AxiosRequestConfig): Promise<operations.FileCommentListForPathResponse>;
    /**
     * patchFileCommentsId - Update File Comment
     *
     * Update File Comment
    **/
    patchFileCommentsId(req: operations.PatchFileCommentsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchFileCommentsIdResponse>;
    /**
     * postFileComments - Create File Comment
     *
     * Create File Comment
    **/
    postFileComments(req: operations.PostFileCommentsRequest, config?: AxiosRequestConfig): Promise<operations.PostFileCommentsResponse>;
}
