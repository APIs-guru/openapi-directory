import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Fields {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * fetchFieldById - Retrieve a specific Field by ID
     *
     * Retrieve a given **Field** by ID.
    **/
    fetchFieldById(req: operations.FetchFieldByIdRequest, config?: AxiosRequestConfig): Promise<operations.FetchFieldByIdResponse>;
    /**
     * fetchFields - Retrieve list of Fields
     *
     * Retrieve list of **Fields**. Filter the results by field name if the `fieldName` query parameter is specified.
    **/
    fetchFields(req: operations.FetchFieldsRequest, config?: AxiosRequestConfig): Promise<operations.FetchFieldsResponse>;
}
