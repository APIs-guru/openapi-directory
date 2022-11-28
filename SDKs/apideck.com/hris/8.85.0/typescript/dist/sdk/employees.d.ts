import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Employees {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * employeesAdd - Create Employee
     *
     * Create Employee
    **/
    employeesAdd(req: operations.EmployeesAddRequest, config?: AxiosRequestConfig): Promise<operations.EmployeesAddResponse>;
    /**
     * employeesAll - List Employees
     *
     * List Employees
    **/
    employeesAll(req: operations.EmployeesAllRequest, config?: AxiosRequestConfig): Promise<operations.EmployeesAllResponse>;
    /**
     * employeesDelete - Delete Employee
     *
     * Delete Employee
    **/
    employeesDelete(req: operations.EmployeesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.EmployeesDeleteResponse>;
    /**
     * employeesOne - Get Employee
     *
     * Get Employee
    **/
    employeesOne(req: operations.EmployeesOneRequest, config?: AxiosRequestConfig): Promise<operations.EmployeesOneResponse>;
    /**
     * employeesUpdate - Update Employee
     *
     * Update Employee
    **/
    employeesUpdate(req: operations.EmployeesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.EmployeesUpdateResponse>;
}
