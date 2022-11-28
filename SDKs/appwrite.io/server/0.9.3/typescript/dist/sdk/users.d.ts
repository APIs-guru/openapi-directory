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
     * usersCreate - Create User
     *
     * Create a new user.
    **/
    usersCreate(req: operations.UsersCreateRequest, config?: AxiosRequestConfig): Promise<operations.UsersCreateResponse>;
    /**
     * usersDelete - Delete User
     *
     * Delete a user by its unique ID.
    **/
    usersDelete(req: operations.UsersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.UsersDeleteResponse>;
    /**
     * usersDeleteSession - Delete User Session
     *
     * Delete a user sessions by its unique ID.
    **/
    usersDeleteSession(req: operations.UsersDeleteSessionRequest, config?: AxiosRequestConfig): Promise<operations.UsersDeleteSessionResponse>;
    /**
     * usersDeleteSessions - Delete User Sessions
     *
     * Delete all user's sessions by using the user's unique ID.
    **/
    usersDeleteSessions(req: operations.UsersDeleteSessionsRequest, config?: AxiosRequestConfig): Promise<operations.UsersDeleteSessionsResponse>;
    /**
     * usersGet - Get User
     *
     * Get a user by its unique ID.
    **/
    usersGet(req: operations.UsersGetRequest, config?: AxiosRequestConfig): Promise<operations.UsersGetResponse>;
    /**
     * usersGetLogs - Get User Logs
     *
     * Get a user activity logs list by its unique ID.
    **/
    usersGetLogs(req: operations.UsersGetLogsRequest, config?: AxiosRequestConfig): Promise<operations.UsersGetLogsResponse>;
    /**
     * usersGetPrefs - Get User Preferences
     *
     * Get the user preferences by its unique ID.
    **/
    usersGetPrefs(req: operations.UsersGetPrefsRequest, config?: AxiosRequestConfig): Promise<operations.UsersGetPrefsResponse>;
    /**
     * usersGetSessions - Get User Sessions
     *
     * Get the user sessions list by its unique ID.
    **/
    usersGetSessions(req: operations.UsersGetSessionsRequest, config?: AxiosRequestConfig): Promise<operations.UsersGetSessionsResponse>;
    /**
     * usersList - List Users
     *
     * Get a list of all the project's users. You can use the query params to filter your results.
    **/
    usersList(req: operations.UsersListRequest, config?: AxiosRequestConfig): Promise<operations.UsersListResponse>;
    /**
     * usersUpdatePrefs - Update User Preferences
     *
     * Update the user preferences by its unique ID. You can pass only the specific settings you wish to update.
    **/
    usersUpdatePrefs(req: operations.UsersUpdatePrefsRequest, config?: AxiosRequestConfig): Promise<operations.UsersUpdatePrefsResponse>;
    /**
     * usersUpdateStatus - Update User Status
     *
     * Update the user status by its unique ID.
    **/
    usersUpdateStatus(req: operations.UsersUpdateStatusRequest, config?: AxiosRequestConfig): Promise<operations.UsersUpdateStatusResponse>;
    /**
     * usersUpdateVerification - Update Email Verification
     *
     * Update the user email verification status by its unique ID.
    **/
    usersUpdateVerification(req: operations.UsersUpdateVerificationRequest, config?: AxiosRequestConfig): Promise<operations.UsersUpdateVerificationResponse>;
}
