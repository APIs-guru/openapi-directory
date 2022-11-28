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
     * customersAdd - Create Customer Support Customer
     *
     * Create Customer Support Customer
    **/
    customersAdd(req: operations.CustomersAddRequest, config?: AxiosRequestConfig): Promise<operations.CustomersAddResponse>;
    /**
     * customersAll - List Customer Support Customers
     *
     * List Customer Support Customers
    **/
    customersAll(req: operations.CustomersAllRequest, config?: AxiosRequestConfig): Promise<operations.CustomersAllResponse>;
    /**
     * customersDelete - Delete Customer Support Customer
     *
     * Delete Customer Support Customer
    **/
    customersDelete(req: operations.CustomersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CustomersDeleteResponse>;
    /**
     * customersOne - Get Customer Support Customer
     *
     * Get Customer Support Customer
    **/
    customersOne(req: operations.CustomersOneRequest, config?: AxiosRequestConfig): Promise<operations.CustomersOneResponse>;
    /**
     * customersUpdate - Update Customer Support Customer
     *
     * Update Customer Support Customer
    **/
    customersUpdate(req: operations.CustomersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CustomersUpdateResponse>;
}
