import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Payrolls {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * payrollsAll - List Payroll
     *
     * List Payroll
    **/
    payrollsAll(req: operations.PayrollsAllRequest, config?: AxiosRequestConfig): Promise<operations.PayrollsAllResponse>;
    /**
     * payrollsOne - Get Payroll
     *
     * Get Payroll
    **/
    payrollsOne(req: operations.PayrollsOneRequest, config?: AxiosRequestConfig): Promise<operations.PayrollsOneResponse>;
}
