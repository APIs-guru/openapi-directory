import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Entitlements {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * androidenterpriseEntitlementsDelete - Removes an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
    **/
    androidenterpriseEntitlementsDelete(req: operations.AndroidenterpriseEntitlementsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEntitlementsDeleteResponse>;
    /**
     * androidenterpriseEntitlementsGet - Retrieves details of an entitlement. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
    **/
    androidenterpriseEntitlementsGet(req: operations.AndroidenterpriseEntitlementsGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEntitlementsGetResponse>;
    /**
     * androidenterpriseEntitlementsList - Lists all entitlements for the specified user. Only the ID is set. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
    **/
    androidenterpriseEntitlementsList(req: operations.AndroidenterpriseEntitlementsListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEntitlementsListResponse>;
    /**
     * androidenterpriseEntitlementsUpdate - Adds or updates an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
    **/
    androidenterpriseEntitlementsUpdate(req: operations.AndroidenterpriseEntitlementsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEntitlementsUpdateResponse>;
}
