import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeBeforeafter {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchBeforeafter - Search API for 'Before and After Images' entry type
     *
     * API to search for entries of type Before and After Images
    **/
    searchBeforeafter(req: operations.SearchBeforeafterRequest, config?: AxiosRequestConfig): Promise<operations.SearchBeforeafterResponse>;
}
