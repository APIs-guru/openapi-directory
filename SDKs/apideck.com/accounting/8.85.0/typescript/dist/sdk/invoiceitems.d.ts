import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class InvoiceItems {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * invoiceItemsAdd - Create Invoice Item
     *
     * Create Invoice Item
    **/
    invoiceItemsAdd(req: operations.InvoiceItemsAddRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceItemsAddResponse>;
    /**
     * invoiceItemsAll - List Invoice Items
     *
     * List Invoice Items
    **/
    invoiceItemsAll(req: operations.InvoiceItemsAllRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceItemsAllResponse>;
    /**
     * invoiceItemsDelete - Delete Invoice Item
     *
     * Delete Invoice Item
    **/
    invoiceItemsDelete(req: operations.InvoiceItemsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceItemsDeleteResponse>;
    /**
     * invoiceItemsOne - Get Invoice Item
     *
     * Get Invoice Item
    **/
    invoiceItemsOne(req: operations.InvoiceItemsOneRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceItemsOneResponse>;
    /**
     * invoiceItemsUpdate - Update Invoice Item
     *
     * Update Invoice Item
    **/
    invoiceItemsUpdate(req: operations.InvoiceItemsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.InvoiceItemsUpdateResponse>;
}
