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
     * directoryUsersAliasesDelete - Removes an alias.
    **/
    directoryUsersAliasesDelete(req: operations.DirectoryUsersAliasesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersAliasesDeleteResponse>;
    /**
     * directoryUsersAliasesInsert - Adds an alias.
    **/
    directoryUsersAliasesInsert(req: operations.DirectoryUsersAliasesInsertRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersAliasesInsertResponse>;
    /**
     * directoryUsersAliasesList - Lists all aliases for a user.
    **/
    directoryUsersAliasesList(req: operations.DirectoryUsersAliasesListRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersAliasesListResponse>;
    /**
     * directoryUsersAliasesWatch - Watches for changes in users list.
    **/
    directoryUsersAliasesWatch(req: operations.DirectoryUsersAliasesWatchRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersAliasesWatchResponse>;
    /**
     * directoryUsersDelete - Deletes a user.
    **/
    directoryUsersDelete(req: operations.DirectoryUsersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersDeleteResponse>;
    /**
     * directoryUsersGet - Retrieves a user.
    **/
    directoryUsersGet(req: operations.DirectoryUsersGetRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersGetResponse>;
    /**
     * directoryUsersInsert - Creates a user.
    **/
    directoryUsersInsert(req: operations.DirectoryUsersInsertRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersInsertResponse>;
    /**
     * directoryUsersList - Retrieves a paginated list of either deleted users or all users in a domain.
    **/
    directoryUsersList(req: operations.DirectoryUsersListRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersListResponse>;
    /**
     * directoryUsersMakeAdmin - Makes a user a super administrator.
    **/
    directoryUsersMakeAdmin(req: operations.DirectoryUsersMakeAdminRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersMakeAdminResponse>;
    /**
     * directoryUsersPatch - Updates a user using patch semantics. The update method should be used instead, since it also supports patch semantics and has better performance. This method is unable to clear fields that contain repeated objects (`addresses`, `phones`, etc). Use the update method instead.
    **/
    directoryUsersPatch(req: operations.DirectoryUsersPatchRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersPatchResponse>;
    /**
     * directoryUsersPhotosDelete - Removes the user's photo.
    **/
    directoryUsersPhotosDelete(req: operations.DirectoryUsersPhotosDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersPhotosDeleteResponse>;
    /**
     * directoryUsersPhotosGet - Retrieves the user's photo.
    **/
    directoryUsersPhotosGet(req: operations.DirectoryUsersPhotosGetRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersPhotosGetResponse>;
    /**
     * directoryUsersPhotosPatch - Adds a photo for the user. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
    **/
    directoryUsersPhotosPatch(req: operations.DirectoryUsersPhotosPatchRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersPhotosPatchResponse>;
    /**
     * directoryUsersPhotosUpdate - Adds a photo for the user.
    **/
    directoryUsersPhotosUpdate(req: operations.DirectoryUsersPhotosUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersPhotosUpdateResponse>;
    /**
     * directoryUsersSignOut - Signs a user out of all web and device sessions and reset their sign-in cookies. User will have to sign in by authenticating again.
    **/
    directoryUsersSignOut(req: operations.DirectoryUsersSignOutRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersSignOutResponse>;
    /**
     * directoryUsersUndelete - Undeletes a deleted user.
    **/
    directoryUsersUndelete(req: operations.DirectoryUsersUndeleteRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersUndeleteResponse>;
    /**
     * directoryUsersUpdate - Updates a user. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved, and fields set to `null` will be cleared.
    **/
    directoryUsersUpdate(req: operations.DirectoryUsersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersUpdateResponse>;
    /**
     * directoryUsersWatch - Watches for changes in users list.
    **/
    directoryUsersWatch(req: operations.DirectoryUsersWatchRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryUsersWatchResponse>;
}
