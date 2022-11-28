import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Merchants {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * merchantsAdd - Create Merchant
     *
     * Create Merchant
    **/
    merchantsAdd(req: operations.MerchantsAddRequest, config?: AxiosRequestConfig): Promise<operations.MerchantsAddResponse>;
    /**
     * merchantsAll - List Merchants
     *
     * List Merchants
    **/
    merchantsAll(req: operations.MerchantsAllRequest, config?: AxiosRequestConfig): Promise<operations.MerchantsAllResponse>;
    /**
     * merchantsDelete - Delete Merchant
     *
     * Delete Merchant
    **/
    merchantsDelete(req: operations.MerchantsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.MerchantsDeleteResponse>;
    /**
     * merchantsOne - Get Merchant
     *
     * Get Merchant
    **/
    merchantsOne(req: operations.MerchantsOneRequest, config?: AxiosRequestConfig): Promise<operations.MerchantsOneResponse>;
    /**
     * merchantsUpdate - Update Merchant
     *
     * Update Merchant
    **/
    merchantsUpdate(req: operations.MerchantsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.MerchantsUpdateResponse>;
}
