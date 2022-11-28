import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Grouplicenseusers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * androidenterpriseGrouplicenseusersList - Retrieves the IDs of the users who have been granted entitlements under the license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
    **/
    androidenterpriseGrouplicenseusersList(req: operations.AndroidenterpriseGrouplicenseusersListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseGrouplicenseusersListResponse>;
}
