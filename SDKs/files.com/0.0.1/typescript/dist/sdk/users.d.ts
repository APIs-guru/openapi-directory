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
     * deleteUsersId - Delete User
     *
     * Delete User
    **/
    deleteUsersId(req: operations.DeleteUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersIdResponse>;
    /**
     * getUsers - List Users
     *
     * List Users
    **/
    getUsers(req: operations.GetUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
    /**
     * getUsersId - Show User
     *
     * Show User
    **/
    getUsersId(req: operations.GetUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdResponse>;
    /**
     * getUsersUserIdApiKeys - List Api Keys
     *
     * List Api Keys
    **/
    getUsersUserIdApiKeys(req: operations.GetUsersUserIdApiKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdApiKeysResponse>;
    /**
     * getUsersUserIdAs2Keys - List As2 Keys
     *
     * List As2 Keys
    **/
    getUsersUserIdAs2Keys(req: operations.GetUsersUserIdAs2KeysRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdAs2KeysResponse>;
    /**
     * getUsersUserIdCipherUses - List User Cipher Uses
     *
     * List User Cipher Uses
    **/
    getUsersUserIdCipherUses(req: operations.GetUsersUserIdCipherUsesRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdCipherUsesResponse>;
    /**
     * getUsersUserIdGroups - List Group Users
     *
     * List Group Users
    **/
    getUsersUserIdGroups(req: operations.GetUsersUserIdGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdGroupsResponse>;
    /**
     * getUsersUserIdPermissions - List Permissions
     *
     * List Permissions
    **/
    getUsersUserIdPermissions(req: operations.GetUsersUserIdPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdPermissionsResponse>;
    /**
     * getUsersUserIdPublicKeys - List Public Keys
     *
     * List Public Keys
    **/
    getUsersUserIdPublicKeys(req: operations.GetUsersUserIdPublicKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdPublicKeysResponse>;
    /**
     * patchUsersId - Update User
     *
     * Update User
    **/
    patchUsersId(req: operations.PatchUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchUsersIdResponse>;
    /**
     * postUsers - Create User
     *
     * Create User
    **/
    postUsers(req: operations.PostUsersRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersResponse>;
    /**
     * postUsersId2faReset - Trigger 2FA Reset process for user who has lost access to their existing 2FA methods.
     *
     * Trigger 2FA Reset process for user who has lost access to their existing 2FA methods.
    **/
    postUsersId2faReset(req: operations.PostUsersId2faResetRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersId2faResetResponse>;
    /**
     * postUsersIdResendWelcomeEmail - Resend user welcome email
     *
     * Resend user welcome email
    **/
    postUsersIdResendWelcomeEmail(req: operations.PostUsersIdResendWelcomeEmailRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersIdResendWelcomeEmailResponse>;
    /**
     * postUsersIdUnlock - Unlock user who has been locked out due to failed logins.
     *
     * Unlock user who has been locked out due to failed logins.
    **/
    postUsersIdUnlock(req: operations.PostUsersIdUnlockRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersIdUnlockResponse>;
    /**
     * postUsersUserIdApiKeys - Create Api Key
     *
     * Create Api Key
    **/
    postUsersUserIdApiKeys(req: operations.PostUsersUserIdApiKeysRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersUserIdApiKeysResponse>;
    /**
     * postUsersUserIdAs2Keys - Create As2 Key
     *
     * Create As2 Key
    **/
    postUsersUserIdAs2Keys(req: operations.PostUsersUserIdAs2KeysRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersUserIdAs2KeysResponse>;
    /**
     * postUsersUserIdPublicKeys - Create Public Key
     *
     * Create Public Key
    **/
    postUsersUserIdPublicKeys(req: operations.PostUsersUserIdPublicKeysRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersUserIdPublicKeysResponse>;
}
