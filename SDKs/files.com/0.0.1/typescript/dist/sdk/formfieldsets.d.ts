import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FormFieldSets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteFormFieldSetsId - Delete Form Field Set
     *
     * Delete Form Field Set
    **/
    deleteFormFieldSetsId(req: operations.DeleteFormFieldSetsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFormFieldSetsIdResponse>;
    /**
     * getFormFieldSets - List Form Field Sets
     *
     * List Form Field Sets
    **/
    getFormFieldSets(req: operations.GetFormFieldSetsRequest, config?: AxiosRequestConfig): Promise<operations.GetFormFieldSetsResponse>;
    /**
     * getFormFieldSetsId - Show Form Field Set
     *
     * Show Form Field Set
    **/
    getFormFieldSetsId(req: operations.GetFormFieldSetsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFormFieldSetsIdResponse>;
}
