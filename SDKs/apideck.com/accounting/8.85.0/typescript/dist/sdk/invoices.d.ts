import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Invoices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * invoicesAdd - Create Invoice
     *
     * Create Invoice
    **/
    invoicesAdd(req: operations.InvoicesAddRequest, config?: AxiosRequestConfig): Promise<operations.InvoicesAddResponse>;
    /**
     * invoicesAll - List Invoices
     *
     * List Invoices
    **/
    invoicesAll(req: operations.InvoicesAllRequest, config?: AxiosRequestConfig): Promise<operations.InvoicesAllResponse>;
    /**
     * invoicesDelete - Delete Invoice
     *
     * Delete Invoice
    **/
    invoicesDelete(req: operations.InvoicesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.InvoicesDeleteResponse>;
    /**
     * invoicesOne - Get Invoice
     *
     * Get Invoice
    **/
    invoicesOne(req: operations.InvoicesOneRequest, config?: AxiosRequestConfig): Promise<operations.InvoicesOneResponse>;
    /**
     * invoicesUpdate - Update Invoice
     *
     * Update Invoice
    **/
    invoicesUpdate(req: operations.InvoicesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.InvoicesUpdateResponse>;
}
