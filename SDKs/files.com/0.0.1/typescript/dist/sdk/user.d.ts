import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class User {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getUserApiKeys - List Api Keys
     *
     * List Api Keys
    **/
    getUserApiKeys(req: operations.GetUserApiKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetUserApiKeysResponse>;
    /**
     * getUserAs2Keys - List As2 Keys
     *
     * List As2 Keys
    **/
    getUserAs2Keys(req: operations.GetUserAs2KeysRequest, config?: AxiosRequestConfig): Promise<operations.GetUserAs2KeysResponse>;
    /**
     * getUserGroups - List Group Users
     *
     * List Group Users
    **/
    getUserGroups(req: operations.GetUserGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserGroupsResponse>;
    /**
     * getUserPublicKeys - List Public Keys
     *
     * List Public Keys
    **/
    getUserPublicKeys(req: operations.GetUserPublicKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetUserPublicKeysResponse>;
    /**
     * patchUser - Update User
     *
     * Update User
    **/
    patchUser(req: operations.PatchUserRequest, config?: AxiosRequestConfig): Promise<operations.PatchUserResponse>;
    /**
     * postUserApiKeys - Create Api Key
     *
     * Create Api Key
    **/
    postUserApiKeys(req: operations.PostUserApiKeysRequest, config?: AxiosRequestConfig): Promise<operations.PostUserApiKeysResponse>;
    /**
     * postUserAs2Keys - Create As2 Key
     *
     * Create As2 Key
    **/
    postUserAs2Keys(req: operations.PostUserAs2KeysRequest, config?: AxiosRequestConfig): Promise<operations.PostUserAs2KeysResponse>;
    /**
     * postUserPublicKeys - Create Public Key
     *
     * Create Public Key
    **/
    postUserPublicKeys(req: operations.PostUserPublicKeysRequest, config?: AxiosRequestConfig): Promise<operations.PostUserPublicKeysResponse>;
}
