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
     * getInvoices - List Invoices
     *
     * List Invoices
    **/
    getInvoices(req: operations.GetInvoicesRequest, config?: AxiosRequestConfig): Promise<operations.GetInvoicesResponse>;
    /**
     * getInvoicesId - Show Invoice
     *
     * Show Invoice
    **/
    getInvoicesId(req: operations.GetInvoicesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetInvoicesIdResponse>;
}
