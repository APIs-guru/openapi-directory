import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ModifierGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * modifierGroupsAdd - Create Modifier Group
     *
     * Create Modifier Group
    **/
    modifierGroupsAdd(req: operations.ModifierGroupsAddRequest, config?: AxiosRequestConfig): Promise<operations.ModifierGroupsAddResponse>;
    /**
     * modifierGroupsAll - List Modifier Groups
     *
     * List Modifier Groups
    **/
    modifierGroupsAll(req: operations.ModifierGroupsAllRequest, config?: AxiosRequestConfig): Promise<operations.ModifierGroupsAllResponse>;
    /**
     * modifierGroupsDelete - Delete Modifier Group
     *
     * Delete Modifier Group
    **/
    modifierGroupsDelete(req: operations.ModifierGroupsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ModifierGroupsDeleteResponse>;
    /**
     * modifierGroupsOne - Get Modifier Group
     *
     * Get Modifier Group
    **/
    modifierGroupsOne(req: operations.ModifierGroupsOneRequest, config?: AxiosRequestConfig): Promise<operations.ModifierGroupsOneResponse>;
    /**
     * modifierGroupsUpdate - Update Modifier Group
     *
     * Update Modifier Group
    **/
    modifierGroupsUpdate(req: operations.ModifierGroupsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ModifierGroupsUpdateResponse>;
}
