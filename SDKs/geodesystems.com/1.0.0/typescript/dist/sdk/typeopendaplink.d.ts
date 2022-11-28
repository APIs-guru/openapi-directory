import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeOpendaplink {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchOpendaplink - Search API for 'OPeNDAP Link' entry type
     *
     * API to search for entries of type OPeNDAP Link
    **/
    searchOpendaplink(req: operations.SearchOpendaplinkRequest, config?: AxiosRequestConfig): Promise<operations.SearchOpendaplinkResponse>;
}
