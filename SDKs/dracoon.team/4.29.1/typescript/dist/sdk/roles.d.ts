import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Roles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addRoleGroups - Assign group(s) to the role
     *
     * ### Description:
     * Assign group(s) to a role.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; grant permission on desired role</span> required.
     *
     * ### Postcondition:
     * One or more groups will be added to a role.
     *
     * ### Further Information:
     * None.
    **/
    addRoleGroups(req: operations.AddRoleGroupsRequest, config?: AxiosRequestConfig): Promise<operations.AddRoleGroupsResponse>;
    /**
     * addRoleUsers - Assign user(s) to the role
     *
     * ### Description:
     * Assign user(s) to a role.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; grant permission on desired role</span> required.
     *
     * ### Postcondition:
     * One or more users will be added to a role.
     *
     * ### Further Information:
     * None.
    **/
    addRoleUsers(req: operations.AddRoleUsersRequest, config?: AxiosRequestConfig): Promise<operations.AddRoleUsersResponse>;
    /**
     * requestRoleGroups - Request groups with specific role
     *
     * ### Description:
     * Get all groups with a specific role.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read groups</span> required.
     *
     * ### Postcondition:
     * List of to the role assigned groups is returned.
     *
     * ### Further Information:
     *
     * ### Filtering:
     * All filter fields are connected via logical conjunction (**AND**)
     * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `isMember:eq:false|name:cn:searchString`
     * Get all groups that are **NOT** a member of that role **AND** whose name contains `searchString`.
     *
     * </details>
     *
     * ### Filtering options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
     * | :--- | :--- | :--- | :--- | :--- |
     * | `isMember` | Filter the groups which are (not) member of that role | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
     * | `name` | Group name filter | `cn` | Group name contains value. | `search String` |
     *
     * </details>
    **/
    requestRoleGroups(req: operations.RequestRoleGroupsRequest, config?: AxiosRequestConfig): Promise<operations.RequestRoleGroupsResponse>;
    /**
     * requestRoleUsers - Request users with specific role
     *
     * ### Description:
     * Get all users with a specific role.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.
     *
     * ### Postcondition:
     * List of users is returned.
     *
     * ### Further Information:
     *
     * ### Filtering:
     * All filter fields are connected via logical conjunction (**AND**)
     * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `isMember:eq:false|user:cn:searchString`
     * Get all users that are **NOT** member of that role **AND** whose (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) is like `searchString`.
     *
     * </details>
     *
     * ### Filtering options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
     * | :--- | :--- | :--- | :--- | :--- |
     * | `user` | User filter | `cn` | User contains value (`firstName` **OR** `lastName` **OR** `email` **OR** `username`). | `search String` |
     * | `isMember` | Filter the users which are (not) member of that role | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
     *
     * </details>
     *
     * ### Deprecated filtering options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
     * | :--- | :--- | :--- | :--- | :--- |
     * | <del>`displayName`</del> | User display name filter (use `user` filter) | `cn` | User display name contains value (`firstName` **OR** `lastName` **OR** `email`). | `search String` |
     *
     * </details>
    **/
    requestRoleUsers(req: operations.RequestRoleUsersRequest, config?: AxiosRequestConfig): Promise<operations.RequestRoleUsersResponse>;
    /**
     * requestRoles - Request all roles with assigned rights
     *
     * ### Description:
     * Retrieve a list of all roles with assigned rights.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.
     *
     * ### Postcondition:
     * List of roles with assigned rights is returned.
     *
     * ### Further Information:
     * None.
    **/
    requestRoles(req: operations.RequestRolesRequest, config?: AxiosRequestConfig): Promise<operations.RequestRolesResponse>;
    /**
     * revokeRoleGroups - Revoke granted role from group(s)
     *
     * ### Description:
     * Revoke granted group(s) from a role.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; grant permission on desired role</span> required.
     * For each role, at least one non-expiring user **MUST** remain who may grant the role.
     *
     * ### Postcondition:
     * One or more groups will be removed from a role.
     *
     * ### Further Information:
     * None.
    **/
    revokeRoleGroups(req: operations.RevokeRoleGroupsRequest, config?: AxiosRequestConfig): Promise<operations.RevokeRoleGroupsResponse>;
    /**
     * revokeRoleUsers - Revoke granted role from user(s)
     *
     * ### Description:
     * Revoke granted user(s) from a role.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; grant permission on desired role</span> required.
     * For each role, at least one non-expiring user **MUST** remain who may grant the role.
     *
     * ### Postcondition:
     * One or more users will be removed from a role.
     *
     * ### Further Information:
     * None.
    **/
    revokeRoleUsers(req: operations.RevokeRoleUsersRequest, config?: AxiosRequestConfig): Promise<operations.RevokeRoleUsersResponse>;
}
