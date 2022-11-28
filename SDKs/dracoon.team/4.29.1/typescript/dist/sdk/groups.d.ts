import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Groups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addGroupMembers - Add group members
     *
     * ### Description:
     * Add members to a group.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change groups</span> required.
     *
     * ### Postcondition:
     * New members are added to the group.
     *
     * ### Further Information:
     * Batch function.
     * The newly provided members will be added to the existing ones.
    **/
    addGroupMembers(req: operations.AddGroupMembersRequest, config?: AxiosRequestConfig): Promise<operations.AddGroupMembersResponse>;
    /**
     * createGroup - Create new user group
     *
     * ### Description:
     * Create a new user group.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change groups</span> required.
     *
     * ### Postcondition:
     * A new user group is created.
     *
     * ### Further Information:
     * * If a group should **NOT** expire, leave `expireAt` empty.
     * * Group names are limited to **150** characters
     * * **All** characters are allowed.
    **/
    createGroup(req: operations.CreateGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupResponse>;
    /**
     * removeGroup - Remove user group
     *
     * ### Description:
     * Delete a user group.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete groups</span> required.
     *
     * ### Postcondition:
     * User group is deleted.
     *
     * ### Further Information:
     * None.
    **/
    removeGroup(req: operations.RemoveGroupRequest, config?: AxiosRequestConfig): Promise<operations.RemoveGroupResponse>;
    /**
     * removeGroupMembers - Remove group members
     *
     * ### Description:
     * Remove group members.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change groups</span> required.
     *
     * ### Postcondition:
     * Provided users are removed from the user group.
     *
     * ### Further Information:
     * Batch function.
     * The provided users are removed from the user group. Maximum number of users to remove in one request is 200.
    **/
    removeGroupMembers(req: operations.RemoveGroupMembersRequest, config?: AxiosRequestConfig): Promise<operations.RemoveGroupMembersResponse>;
    /**
     * requestGroup - Request user group
     *
     * ### Description:
     * Retrieve detailed information about a user group.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read groups</span> required.
     *
     * ### Postcondition:
     * User group is returned.
     *
     * ### Further Information:
     * None.
    **/
    requestGroup(req: operations.RequestGroupRequest, config?: AxiosRequestConfig): Promise<operations.RequestGroupResponse>;
    /**
     * requestGroupMembers - Request group member users or / and users who can become a member
     *
     * ### Description:
     * Retrieve a list of group member users or / and users who can become a member.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read groups</span> required.
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
     * Get all users that are **NOT** in this group **AND** whose (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) is like `searchString`.
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
     * | `isMember` | Filter group members | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
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
    requestGroupMembers(req: operations.RequestGroupMembersRequest, config?: AxiosRequestConfig): Promise<operations.RequestGroupMembersResponse>;
    /**
     * requestGroupRoles - Request list of roles assigned to the group
     *
     * ### Description:
     * Retrieve a list of all roles granted to a group.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read groups</span> required.
     *
     * ### Postcondition:
     * List of granted roles is returned.
     *
     * ### Further Information:
     * None.
    **/
    requestGroupRoles(req: operations.RequestGroupRolesRequest, config?: AxiosRequestConfig): Promise<operations.RequestGroupRolesResponse>;
    /**
     * requestGroupRooms - Request rooms granted to the group or / and rooms that can be granted
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.10.0</h3>
     *
     * ### Description:
     * Retrieves a list of rooms granted to the group and / or that can be granted.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read groups</span> required.
     *
     * ### Postcondition:
     * List of rooms is returned.
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
     * `isGranted:eq:false|name:cn:searchString`
     * Get all rooms where the group is **NOT** granted **AND** whose name is like `searchString`.
     *
     * </details>
     *
     * ### Filtering options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
     * | :--- | :--- | :--- | :--- | :--- |
     * | `name` | Room name filter | `cn` | Room name contains value. | `search String` |
     * | `isGranted` | Filter rooms which the group is (not) granted | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
     * | `effectivePerm` | Filter rooms with DIRECT or DIRECT **AND** EFFECTIVE permissions<ul><li>`false`: DIRECT permissions</li><li>`true`:  DIRECT **AND** EFFECTIVE permissions</li></ul>DIRECT means: e.g. room administrator grants `read` permissions to group of users **directly** on desired room.<br>EFFECTIVE means: e.g. group of users gets `read` permissions on desired room through **inheritance**. | `eq` |  | `true or false`<br>default: `true` |
     *
     * </details>
    **/
    requestGroupRooms(req: operations.RequestGroupRoomsRequest, config?: AxiosRequestConfig): Promise<operations.RequestGroupRoomsResponse>;
    /**
     * requestGroups - Request list of user groups
     *
     * ### Description:
     * Returns a list of user groups.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read groups</span> required.
     *
     * ### Postcondition:
     * List of user groups is returned.
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
     * `name:cn:searchString`
     * Filter by group name containing `searchString`.
     *
     * </details>
     *
     * ### Filtering options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
     * | :--- | :--- | :--- | :--- | :--- |
     * | `name` | Group name filter | `cn` | Group name contains value. | `search String` |
     * | `hasRole` | (**`NEW`**) Group role filter<br>For more information about roles check **`GET /roles`** API | `eq` | Group role equals value. | <ul><li>`CONFIG_MANAGER` - Manages global configuration</li><li>`USER_MANAGER` - Manages users</li><li>`GROUP_MANAGER` - Manages user groups</li><li>`ROOM_MANAGER` - Manages top level rooms</li><li>`LOG_AUDITOR` - Reads audit logs</li><li>`NONMEMBER_VIEWER` - Views users and groups when having room _"manage"_ permission</li></ul> |
     *
     * </details>
     *
     * ---
     *
     * ### Sorting:
     * Sort string syntax: `FIELD_NAME:ORDER`
     * `ORDER` can be `asc` or `desc`.
     * Multiple sort fields are supported.
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `name:asc|expireAt:desc`
     * Sort by `name` ascending **AND** by `expireAt` descending.
     *
     * </details>
     *
     * ### Sorting options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Description |
     * | :--- | :--- |
     * | `name` | Group name |
     * | `createdAt` | Creation date |
     * | `expireAt` | Expiration date |
     * | `cntUsers` | Amount of users |
     *
     * </details>
    **/
    requestGroups(req: operations.RequestGroupsRequest, config?: AxiosRequestConfig): Promise<operations.RequestGroupsResponse>;
    /**
     * requestLastAdminRoomsGroups - Request rooms where the group is defined as last admin group
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>
     *
     * ### Description:
     * Retrieve a list of all rooms where the group is defined as last admin group.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change groups</span> required.
     *
     * ### Postcondition:
     * List of rooms is returned.
     *
     * ### Further Information:
     * An empty list is returned if no rooms were found where the group is defined as last admin group.
    **/
    requestLastAdminRoomsGroups(req: operations.RequestLastAdminRoomsGroupsRequest, config?: AxiosRequestConfig): Promise<operations.RequestLastAdminRoomsGroupsResponse>;
    /**
     * updateGroup - Update user group's metadata
     *
     * ### Description:
     * Update user group's metadata .
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change groups</span> required.
     *
     * ### Postcondition:
     * User group's metadata is changed.
     *
     * ### Further Information:
     * * If a group should **NOT** expire, leave `expireAt` empty.
     * * Group names are limited to **150** characters
     * * **All** characters are allowed.
    **/
    updateGroup(req: operations.UpdateGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGroupResponse>;
}
