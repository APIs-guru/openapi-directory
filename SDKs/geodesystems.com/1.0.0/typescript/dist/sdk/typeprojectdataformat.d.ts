import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeProjectDataformat {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchProjectDataformat - Search API for 'Data Format' entry type
     *
     * API to search for entries of type Data Format
    **/
    searchProjectDataformat(req: operations.SearchProjectDataformatRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectDataformatResponse>;
}
