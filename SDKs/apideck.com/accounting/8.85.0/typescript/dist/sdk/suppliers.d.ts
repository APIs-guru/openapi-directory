import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Suppliers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * suppliersAdd - Create Supplier
     *
     * Create Supplier
    **/
    suppliersAdd(req: operations.SuppliersAddRequest, config?: AxiosRequestConfig): Promise<operations.SuppliersAddResponse>;
    /**
     * suppliersAll - List Suppliers
     *
     * List Suppliers
    **/
    suppliersAll(req: operations.SuppliersAllRequest, config?: AxiosRequestConfig): Promise<operations.SuppliersAllResponse>;
    /**
     * suppliersDelete - Delete Supplier
     *
     * Delete Supplier
    **/
    suppliersDelete(req: operations.SuppliersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SuppliersDeleteResponse>;
    /**
     * suppliersOne - Get Supplier
     *
     * Get Supplier
    **/
    suppliersOne(req: operations.SuppliersOneRequest, config?: AxiosRequestConfig): Promise<operations.SuppliersOneResponse>;
    /**
     * suppliersUpdate - Update Supplier
     *
     * Update Supplier
    **/
    suppliersUpdate(req: operations.SuppliersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.SuppliersUpdateResponse>;
}
