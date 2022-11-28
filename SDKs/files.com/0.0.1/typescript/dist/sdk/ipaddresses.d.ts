import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class IpAddresses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getIpAddresses - List IP Addresses associated with the current site
     *
     * List IP Addresses associated with the current site
    **/
    getIpAddresses(req: operations.GetIpAddressesRequest, config?: AxiosRequestConfig): Promise<operations.GetIpAddressesResponse>;
    /**
     * getIpAddressesReserved - List all possible public IP addresses
     *
     * List all possible public IP addresses
    **/
    getIpAddressesReserved(req: operations.GetIpAddressesReservedRequest, config?: AxiosRequestConfig): Promise<operations.GetIpAddressesReservedResponse>;
}
