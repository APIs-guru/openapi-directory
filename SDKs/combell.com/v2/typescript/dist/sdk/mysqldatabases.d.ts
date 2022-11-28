import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class MySqlDatabases {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * changeDatabaseUserPassword - Change password for mysql user
    **/
    changeDatabaseUserPassword(req: operations.ChangeDatabaseUserPasswordRequest, config?: AxiosRequestConfig): Promise<operations.ChangeDatabaseUserPasswordResponse>;
    /**
     * changeDatabaseUserStatus - Enable/disable mysql user
    **/
    changeDatabaseUserStatus(req: operations.ChangeDatabaseUserStatusRequest, config?: AxiosRequestConfig): Promise<operations.ChangeDatabaseUserStatusResponse>;
    /**
     * createMySqlDatabase - Create a new mysql database
    **/
    createMySqlDatabase(req: operations.CreateMySqlDatabaseRequest, config?: AxiosRequestConfig): Promise<operations.CreateMySqlDatabaseResponse>;
    /**
     * createMySqlUser - Create a new mysql user
     *
     * The creation of a new mysql user will result in a user with read_only rights.
    **/
    createMySqlUser(req: operations.CreateMySqlUserRequest, config?: AxiosRequestConfig): Promise<operations.CreateMySqlUserResponse>;
    /**
     * deleteDatabase - Delete a mysql database
    **/
    deleteDatabase(req: operations.DeleteDatabaseRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDatabaseResponse>;
    /**
     * deleteDatabaseUser - Delete a mysql user
     *
     * The deletion of a mysql user is allowed for users with read_only rights.
    **/
    deleteDatabaseUser(req: operations.DeleteDatabaseUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDatabaseUserResponse>;
    /**
     * getDatabaseUsers - Overview of mysql users
    **/
    getDatabaseUsers(req: operations.GetDatabaseUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetDatabaseUsersResponse>;
    /**
     * getMySqlDatabase - Get a specific database
    **/
    getMySqlDatabase(req: operations.GetMySqlDatabaseRequest, config?: AxiosRequestConfig): Promise<operations.GetMySqlDatabaseResponse>;
    /**
     * getMySqlDatabases - Overview of mysql databases
    **/
    getMySqlDatabases(req: operations.GetMySqlDatabasesRequest, config?: AxiosRequestConfig): Promise<operations.GetMySqlDatabasesResponse>;
}
