import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Members {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * directoryMembersDelete - Removes a member from a group.
    **/
    directoryMembersDelete(req: operations.DirectoryMembersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryMembersDeleteResponse>;
    /**
     * directoryMembersGet - Retrieves a group member's properties.
    **/
    directoryMembersGet(req: operations.DirectoryMembersGetRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryMembersGetResponse>;
    /**
     * directoryMembersHasMember - Checks whether the given user is a member of the group. Membership can be direct or nested, but if nested, the `memberKey` and `groupKey` must be entities in the same domain or an `Invalid input` error is returned. To check for nested memberships that include entities outside of the group's domain, use the [`checkTransitiveMembership()`](https://cloud.google.com/identity/docs/reference/rest/v1/groups.memberships/checkTransitiveMembership) method in the Cloud Identity Groups API.
    **/
    directoryMembersHasMember(req: operations.DirectoryMembersHasMemberRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryMembersHasMemberResponse>;
    /**
     * directoryMembersInsert - Adds a user to the specified group.
    **/
    directoryMembersInsert(req: operations.DirectoryMembersInsertRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryMembersInsertResponse>;
    /**
     * directoryMembersList - Retrieves a paginated list of all members in a group.
    **/
    directoryMembersList(req: operations.DirectoryMembersListRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryMembersListResponse>;
    /**
     * directoryMembersPatch - Updates the membership properties of a user in the specified group. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
    **/
    directoryMembersPatch(req: operations.DirectoryMembersPatchRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryMembersPatchResponse>;
    /**
     * directoryMembersUpdate - Updates the membership of a user in the specified group.
    **/
    directoryMembersUpdate(req: operations.DirectoryMembersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryMembersUpdateResponse>;
}
