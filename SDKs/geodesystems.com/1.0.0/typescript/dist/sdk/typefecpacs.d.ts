import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeFecPacs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchFecPacs - Search API for 'FEC PACs' entry type
     *
     * API to search for entries of type FEC PACs
    **/
    searchFecPacs(req: operations.SearchFecPacsRequest, config?: AxiosRequestConfig): Promise<operations.SearchFecPacsResponse>;
}
