import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeFtp {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchFtp - Search API for 'Remote FTP File View' entry type
     *
     * API to search for entries of type Remote FTP File View
    **/
    searchFtp(req: operations.SearchFtpRequest, config?: AxiosRequestConfig): Promise<operations.SearchFtpResponse>;
}
