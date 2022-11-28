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
     * androidenterpriseUsersDelete - Deleted an EMM-managed user.
    **/
    androidenterpriseUsersDelete(req: operations.AndroidenterpriseUsersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseUsersDeleteResponse>;
    /**
     * androidenterpriseUsersGenerateAuthenticationToken - Generates an authentication token which the device policy client can use to provision the given EMM-managed user account on a device. The generated token is single-use and expires after a few minutes. You can provision a maximum of 10 devices per user. This call only works with EMM-managed accounts.
    **/
    androidenterpriseUsersGenerateAuthenticationToken(req: operations.AndroidenterpriseUsersGenerateAuthenticationTokenRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseUsersGenerateAuthenticationTokenResponse>;
    /**
     * androidenterpriseUsersGet - Retrieves a user's details.
    **/
    androidenterpriseUsersGet(req: operations.AndroidenterpriseUsersGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseUsersGetResponse>;
    /**
     * androidenterpriseUsersGetAvailableProductSet - Retrieves the set of products a user is entitled to access. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
    **/
    androidenterpriseUsersGetAvailableProductSet(req: operations.AndroidenterpriseUsersGetAvailableProductSetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseUsersGetAvailableProductSetResponse>;
    /**
     * androidenterpriseUsersInsert - Creates a new EMM-managed user. The Users resource passed in the body of the request should include an accountIdentifier and an accountType. If a corresponding user already exists with the same account identifier, the user will be updated with the resource. In this case only the displayName field can be changed.
    **/
    androidenterpriseUsersInsert(req: operations.AndroidenterpriseUsersInsertRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseUsersInsertResponse>;
    /**
     * androidenterpriseUsersList - Looks up a user by primary email address. This is only supported for Google-managed users. Lookup of the id is not needed for EMM-managed users because the id is already returned in the result of the Users.insert call.
    **/
    androidenterpriseUsersList(req: operations.AndroidenterpriseUsersListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseUsersListResponse>;
    /**
     * androidenterpriseUsersRevokeDeviceAccess - Revokes access to all devices currently provisioned to the user. The user will no longer be able to use the managed Play store on any of their managed devices. This call only works with EMM-managed accounts.
    **/
    androidenterpriseUsersRevokeDeviceAccess(req: operations.AndroidenterpriseUsersRevokeDeviceAccessRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseUsersRevokeDeviceAccessResponse>;
    /**
     * androidenterpriseUsersSetAvailableProductSet - Modifies the set of products that a user is entitled to access (referred to as *whitelisted* products). Only products that are approved or products that were previously approved (products with revoked approval) can be whitelisted. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
    **/
    androidenterpriseUsersSetAvailableProductSet(req: operations.AndroidenterpriseUsersSetAvailableProductSetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseUsersSetAvailableProductSetResponse>;
    /**
     * androidenterpriseUsersUpdate - Updates the details of an EMM-managed user. Can be used with EMM-managed users only (not Google managed users). Pass the new details in the Users resource in the request body. Only the displayName field can be changed. Other fields must either be unset or have the currently active value.
    **/
    androidenterpriseUsersUpdate(req: operations.AndroidenterpriseUsersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseUsersUpdateResponse>;
}
