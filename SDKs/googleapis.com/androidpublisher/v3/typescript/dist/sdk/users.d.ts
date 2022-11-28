import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * androidpublisherUsersCreate - Grant access for a user to the given developer account.
    **/
    androidpublisherUsersCreate(req: operations.AndroidpublisherUsersCreateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherUsersCreateResponse>;
    /**
     * androidpublisherUsersDelete - Removes all access for the user to the given developer account.
    **/
    androidpublisherUsersDelete(req: operations.AndroidpublisherUsersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherUsersDeleteResponse>;
    /**
     * androidpublisherUsersList - Lists all users with access to a developer account.
    **/
    androidpublisherUsersList(req: operations.AndroidpublisherUsersListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherUsersListResponse>;
    /**
     * androidpublisherUsersPatch - Updates access for the user to the developer account.
    **/
    androidpublisherUsersPatch(req: operations.AndroidpublisherUsersPatchRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherUsersPatchResponse>;
}
