import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeCdmGrid {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchCdmGrid - Search API for 'Gridded Data File' entry type
     *
     * API to search for entries of type Gridded Data File
    **/
    searchCdmGrid(req: operations.SearchCdmGridRequest, config?: AxiosRequestConfig): Promise<operations.SearchCdmGridResponse>;
}
