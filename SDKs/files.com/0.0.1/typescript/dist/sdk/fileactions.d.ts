import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FileActions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * fileActionBeginUpload - Begin file upload
     *
     * Begin file upload
    **/
    fileActionBeginUpload(req: operations.FileActionBeginUploadRequest, config?: AxiosRequestConfig): Promise<operations.FileActionBeginUploadResponse>;
    /**
     * fileActionCopy - Copy file/folder
     *
     * Copy file/folder
    **/
    fileActionCopy(req: operations.FileActionCopyRequest, config?: AxiosRequestConfig): Promise<operations.FileActionCopyResponse>;
    /**
     * fileActionMetadata - Return metadata for file/folder
     *
     * Return metadata for file/folder
    **/
    fileActionMetadata(req: operations.FileActionMetadataRequest, config?: AxiosRequestConfig): Promise<operations.FileActionMetadataResponse>;
    /**
     * fileActionMove - Move file/folder
     *
     * Move file/folder
    **/
    fileActionMove(req: operations.FileActionMoveRequest, config?: AxiosRequestConfig): Promise<operations.FileActionMoveResponse>;
}
