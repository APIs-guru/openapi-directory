import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class History {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * historyList - List site full action history.
     *
     * List site full action history.
    **/
    historyList(req: operations.HistoryListRequest, config?: AxiosRequestConfig): Promise<operations.HistoryListResponse>;
    /**
     * historyListForFile - List history for specific file.
     *
     * List history for specific file.
    **/
    historyListForFile(req: operations.HistoryListForFileRequest, config?: AxiosRequestConfig): Promise<operations.HistoryListForFileResponse>;
    /**
     * historyListForFolder - List history for specific folder.
     *
     * List history for specific folder.
    **/
    historyListForFolder(req: operations.HistoryListForFolderRequest, config?: AxiosRequestConfig): Promise<operations.HistoryListForFolderResponse>;
    /**
     * historyListForUser - List history for specific user.
     *
     * List history for specific user.
    **/
    historyListForUser(req: operations.HistoryListForUserRequest, config?: AxiosRequestConfig): Promise<operations.HistoryListForUserResponse>;
    /**
     * historyListLogins - List site login history.
     *
     * List site login history.
    **/
    historyListLogins(req: operations.HistoryListLoginsRequest, config?: AxiosRequestConfig): Promise<operations.HistoryListLoginsResponse>;
}
