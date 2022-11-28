import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Permissions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * androidenterprisePermissionsGet - Retrieves details of an Android app permission for display to an enterprise admin.
    **/
    androidenterprisePermissionsGet(req: operations.AndroidenterprisePermissionsGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterprisePermissionsGetResponse>;
}
