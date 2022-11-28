import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Files {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteFilesPath - Delete file/folder
     *
     * Delete file/folder
    **/
    deleteFilesPath(req: operations.DeleteFilesPathRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFilesPathResponse>;
    /**
     * fileDownload - Download file
     *
     * Download file
    **/
    fileDownload(req: operations.FileDownloadRequest, config?: AxiosRequestConfig): Promise<operations.FileDownloadResponse>;
    /**
     * patchFilesPath - Update file/folder metadata
     *
     * Update file/folder metadata
    **/
    patchFilesPath(req: operations.PatchFilesPathRequest, config?: AxiosRequestConfig): Promise<operations.PatchFilesPathResponse>;
    /**
     * postFilesPath - Upload file
     *
     * Upload file
    **/
    postFilesPath(req: operations.PostFilesPathRequest, config?: AxiosRequestConfig): Promise<operations.PostFilesPathResponse>;
}
