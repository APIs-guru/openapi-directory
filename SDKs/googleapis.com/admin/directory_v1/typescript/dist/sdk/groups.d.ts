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
     * directoryGroupsAliasesDelete - Removes an alias.
    **/
    directoryGroupsAliasesDelete(req: operations.DirectoryGroupsAliasesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryGroupsAliasesDeleteResponse>;
    /**
     * directoryGroupsAliasesInsert - Adds an alias for the group.
    **/
    directoryGroupsAliasesInsert(req: operations.DirectoryGroupsAliasesInsertRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryGroupsAliasesInsertResponse>;
    /**
     * directoryGroupsAliasesList - Lists all aliases for a group.
    **/
    directoryGroupsAliasesList(req: operations.DirectoryGroupsAliasesListRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryGroupsAliasesListResponse>;
    /**
     * directoryGroupsDelete - Deletes a group.
    **/
    directoryGroupsDelete(req: operations.DirectoryGroupsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryGroupsDeleteResponse>;
    /**
     * directoryGroupsGet - Retrieves a group's properties.
    **/
    directoryGroupsGet(req: operations.DirectoryGroupsGetRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryGroupsGetResponse>;
    /**
     * directoryGroupsInsert - Creates a group.
    **/
    directoryGroupsInsert(req: operations.DirectoryGroupsInsertRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryGroupsInsertResponse>;
    /**
     * directoryGroupsList - Retrieves all groups of a domain or of a user given a userKey (paginated).
    **/
    directoryGroupsList(req: operations.DirectoryGroupsListRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryGroupsListResponse>;
    /**
     * directoryGroupsPatch - Updates a group's properties. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
    **/
    directoryGroupsPatch(req: operations.DirectoryGroupsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryGroupsPatchResponse>;
    /**
     * directoryGroupsUpdate - Updates a group's properties.
    **/
    directoryGroupsUpdate(req: operations.DirectoryGroupsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryGroupsUpdateResponse>;
}
