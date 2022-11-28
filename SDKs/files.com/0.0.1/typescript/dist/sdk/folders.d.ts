import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Folders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * folderListForPath - List Folders by path
     *
     * List Folders by path
    **/
    folderListForPath(req: operations.FolderListForPathRequest, config?: AxiosRequestConfig): Promise<operations.FolderListForPathResponse>;
    /**
     * postFoldersPath - Create folder
     *
     * Create folder
    **/
    postFoldersPath(req: operations.PostFoldersPathRequest, config?: AxiosRequestConfig): Promise<operations.PostFoldersPathResponse>;
}
