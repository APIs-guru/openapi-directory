import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Lookup {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * binLookup - Lookup for bin
     *
     * By passing in the appropriate BIN, you can lookup for
     * card meta data in bintable.com API
     *
    **/
    binLookup(req: operations.BinLookupRequest, config?: AxiosRequestConfig): Promise<operations.BinLookupResponse>;
}
