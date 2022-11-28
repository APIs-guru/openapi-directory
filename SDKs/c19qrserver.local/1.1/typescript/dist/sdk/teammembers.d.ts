import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TeamMembers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteUserUserId - Delete a team member's user record
     *
     * To preserve referential integrity in the database, the user account  will not be deleted from the database. Rather, the password will be set to the empty string, effectively preventing that user from logging in. Furthermore, all active sessions for that user will be deleted, as will any password reset tokens.
     *
    **/
    deleteUserUserId(req: operations.DeleteUserUserIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserUserIdResponse>;
    /**
     * getUserUserId - Retrieve the information associated with a team member's user record
     *
     * Retrieve the information associated with a user's account
     *
    **/
    getUserUserId(req: operations.GetUserUserIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserUserIdResponse>;
    /**
     * getUsers - Retrieve the information associated with all team members' user records
     *
     * Retrieve the information associated with all team members' user records
     *
    **/
    getUsers(config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
    /**
     * postUser - Create a user
     *
     * Use this endpoint to create a team member (user) record
    **/
    postUser(req: operations.PostUserRequest, config?: AxiosRequestConfig): Promise<operations.PostUserResponse>;
}
