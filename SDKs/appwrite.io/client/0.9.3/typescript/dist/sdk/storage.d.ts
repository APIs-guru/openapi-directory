import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Storage {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * storageCreateFile - Create File
     *
     * Create a new file. The user who creates the file will automatically be assigned to read and write access unless he has passed custom values for read and write arguments.
    **/
    storageCreateFile(req: operations.StorageCreateFileRequest, config?: AxiosRequestConfig): Promise<operations.StorageCreateFileResponse>;
    /**
     * storageDeleteFile - Delete File
     *
     * Delete a file by its unique ID. Only users with write permissions have access to delete this resource.
    **/
    storageDeleteFile(req: operations.StorageDeleteFileRequest, config?: AxiosRequestConfig): Promise<operations.StorageDeleteFileResponse>;
    /**
     * storageGetFile - Get File
     *
     * Get a file by its unique ID. This endpoint response returns a JSON object with the file metadata.
    **/
    storageGetFile(req: operations.StorageGetFileRequest, config?: AxiosRequestConfig): Promise<operations.StorageGetFileResponse>;
    /**
     * storageGetFileDownload - Get File for Download
     *
     * Get a file content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.
    **/
    storageGetFileDownload(req: operations.StorageGetFileDownloadRequest, config?: AxiosRequestConfig): Promise<operations.StorageGetFileDownloadResponse>;
    /**
     * storageGetFilePreview - Get File Preview
     *
     * Get a file preview image. Currently, this method supports preview for image files (jpg, png, and gif), other supported formats, like pdf, docs, slides, and spreadsheets, will return the file icon image. You can also pass query string arguments for cutting and resizing your preview image.
    **/
    storageGetFilePreview(req: operations.StorageGetFilePreviewRequest, config?: AxiosRequestConfig): Promise<operations.StorageGetFilePreviewResponse>;
    /**
     * storageGetFileView - Get File for View
     *
     * Get a file content by its unique ID. This endpoint is similar to the download method but returns with no  'Content-Disposition: attachment' header.
    **/
    storageGetFileView(req: operations.StorageGetFileViewRequest, config?: AxiosRequestConfig): Promise<operations.StorageGetFileViewResponse>;
    /**
     * storageListFiles - List Files
     *
     * Get a list of all the user files. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's files. [Learn more about different API modes](/docs/admin).
    **/
    storageListFiles(req: operations.StorageListFilesRequest, config?: AxiosRequestConfig): Promise<operations.StorageListFilesResponse>;
    /**
     * storageUpdateFile - Update File
     *
     * Update a file by its unique ID. Only users with write permissions have access to update this resource.
    **/
    storageUpdateFile(req: operations.StorageUpdateFileRequest, config?: AxiosRequestConfig): Promise<operations.StorageUpdateFileResponse>;
}
