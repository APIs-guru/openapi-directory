import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypeMbPointBasic {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypeMbPointBasic - Search API for 'Basic MB point file' entry type
     *
     * API to search for entries of type Basic MB point file
    **/
    searchTypeMbPointBasic(req: operations.SearchTypeMbPointBasicRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeMbPointBasicResponse>;
}
