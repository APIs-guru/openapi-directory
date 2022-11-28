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
     * getFavoritesForUser - Get a user's favorites
     *
     * Returns all of a user's favorites in the given workspace, of the given type.
     * Results are given in order (The same order as Asana's sidebar).
    **/
    getFavoritesForUser(req: operations.GetFavoritesForUserRequest, config?: AxiosRequestConfig): Promise<operations.GetFavoritesForUserResponse>;
    /**
     * getUser - Get a user
     *
     * Returns the full user record for the single user with the provided ID.
    **/
    getUser(req: operations.GetUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * getUsers - Get multiple users
     *
     * Returns the user records for all users in all workspaces and organizations accessible to the authenticated user. Accepts an optional workspace ID parameter.
     * Results are sorted by user ID.
    **/
    getUsers(req: operations.GetUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
    /**
     * getUsersForTeam - Get users in a team
     *
     * Returns the compact records for all users that are members of the team.
     * Results are sorted alphabetically and limited to 2000. For more results use the `/users` endpoint.
    **/
    getUsersForTeam(req: operations.GetUsersForTeamRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersForTeamResponse>;
    /**
     * getUsersForWorkspace - Get users in a workspace or organization
     *
     * Returns the compact records for all users in the specified workspace or organization.
     * Results are sorted alphabetically and limited to 2000. For more results use the `/users` endpoint.
    **/
    getUsersForWorkspace(req: operations.GetUsersForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersForWorkspaceResponse>;
}
