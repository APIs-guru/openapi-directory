import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Bills {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * billsAdd - Create Bill
     *
     * Create Bill
    **/
    billsAdd(req: operations.BillsAddRequest, config?: AxiosRequestConfig): Promise<operations.BillsAddResponse>;
    /**
     * billsAll - List Bills
     *
     * List Bills
    **/
    billsAll(req: operations.BillsAllRequest, config?: AxiosRequestConfig): Promise<operations.BillsAllResponse>;
    /**
     * billsDelete - Delete Bill
     *
     * Delete Bill
    **/
    billsDelete(req: operations.BillsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.BillsDeleteResponse>;
    /**
     * billsOne - Get Bill
     *
     * Get Bill
    **/
    billsOne(req: operations.BillsOneRequest, config?: AxiosRequestConfig): Promise<operations.BillsOneResponse>;
    /**
     * billsUpdate - Update Bill
     *
     * Update Bill
    **/
    billsUpdate(req: operations.BillsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.BillsUpdateResponse>;
}
