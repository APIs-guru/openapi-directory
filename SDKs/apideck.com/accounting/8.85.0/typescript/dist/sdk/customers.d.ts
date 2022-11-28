import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Customers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * customersAdd - Create Customer
     *
     * Create Customer
    **/
    customersAdd(req: operations.CustomersAddRequest, config?: AxiosRequestConfig): Promise<operations.CustomersAddResponse>;
    /**
     * customersAll - List Customers
     *
     * List Customers
    **/
    customersAll(req: operations.CustomersAllRequest, config?: AxiosRequestConfig): Promise<operations.CustomersAllResponse>;
    /**
     * customersDelete - Delete Customer
     *
     * Delete Customer
    **/
    customersDelete(req: operations.CustomersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CustomersDeleteResponse>;
    /**
     * customersOne - Get Customer
     *
     * Get Customer
    **/
    customersOne(req: operations.CustomersOneRequest, config?: AxiosRequestConfig): Promise<operations.CustomersOneResponse>;
    /**
     * customersUpdate - Update Customer
     *
     * Update Customer
    **/
    customersUpdate(req: operations.CustomersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CustomersUpdateResponse>;
}
