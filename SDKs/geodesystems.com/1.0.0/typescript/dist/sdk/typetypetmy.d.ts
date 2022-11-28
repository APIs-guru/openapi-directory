import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeTmy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeTmy - Search API for 'NREL TMY Data' entry type
     *
     * API to search for entries of type NREL TMY Data
    **/
    searchTypeTmy(req: operations.SearchTypeTmyRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeTmyResponse>;
}
