import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypePropertySales {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchPropertySales - Search API for 'Property Sales' entry type
     *
     * API to search for entries of type Property Sales
    **/
    searchPropertySales(req: operations.SearchPropertySalesRequest, config?: AxiosRequestConfig): Promise<operations.SearchPropertySalesResponse>;
}
