import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeTypePointWsbbGgp {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchTypePointWsbbGgp - Search API for 'Global Geodynamics GGP Format' entry type
     *
     * API to search for entries of type Global Geodynamics GGP Format
    **/
    searchTypePointWsbbGgp(req: operations.SearchTypePointWsbbGgpRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointWsbbGgpResponse>;
}
