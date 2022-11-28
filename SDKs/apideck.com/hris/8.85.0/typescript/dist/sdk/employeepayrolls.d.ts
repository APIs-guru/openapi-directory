import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class EmployeePayrolls {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * employeePayrollsAll - List Employee Payrolls
     *
     * List payrolls for employee
    **/
    employeePayrollsAll(req: operations.EmployeePayrollsAllRequest, config?: AxiosRequestConfig): Promise<operations.EmployeePayrollsAllResponse>;
    /**
     * employeePayrollsOne - Get Employee Payroll
     *
     * Get payroll for employee
    **/
    employeePayrollsOne(req: operations.EmployeePayrollsOneRequest, config?: AxiosRequestConfig): Promise<operations.EmployeePayrollsOneResponse>;
}
