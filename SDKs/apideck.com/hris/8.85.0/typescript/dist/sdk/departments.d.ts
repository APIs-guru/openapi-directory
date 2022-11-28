import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Departments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * departmentsAdd - Create Department
     *
     * Create Department
    **/
    departmentsAdd(req: operations.DepartmentsAddRequest, config?: AxiosRequestConfig): Promise<operations.DepartmentsAddResponse>;
    /**
     * departmentsAll - List Departments
     *
     * List Departments
    **/
    departmentsAll(req: operations.DepartmentsAllRequest, config?: AxiosRequestConfig): Promise<operations.DepartmentsAllResponse>;
    /**
     * departmentsDelete - Delete Department
     *
     * Delete Department
    **/
    departmentsDelete(req: operations.DepartmentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DepartmentsDeleteResponse>;
    /**
     * departmentsOne - Get Department
     *
     * Get Department
    **/
    departmentsOne(req: operations.DepartmentsOneRequest, config?: AxiosRequestConfig): Promise<operations.DepartmentsOneResponse>;
    /**
     * departmentsUpdate - Update Department
     *
     * Update Department
    **/
    departmentsUpdate(req: operations.DepartmentsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DepartmentsUpdateResponse>;
}
