import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Balance {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * balanceLookup - Check Balance
     *
     * Get Account balance and expiry
    **/
    balanceLookup(req: operations.BalanceLookupRequest, config?: AxiosRequestConfig): Promise<operations.BalanceLookupResponse>;
}
