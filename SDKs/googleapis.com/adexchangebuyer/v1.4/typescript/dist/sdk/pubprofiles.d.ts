import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Pubprofiles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * adexchangebuyerPubprofilesList - Gets the requested publisher profile(s) by publisher accountId.
    **/
    adexchangebuyerPubprofilesList(req: operations.AdexchangebuyerPubprofilesListRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerPubprofilesListResponse>;
}
