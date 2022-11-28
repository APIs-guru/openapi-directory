import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypePoliceStopData {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchPoliceStopData - Search API for 'Police Stop Data' entry type
     *
     * API to search for entries of type Police Stop Data
    **/
    searchPoliceStopData(req: operations.SearchPoliceStopDataRequest, config?: AxiosRequestConfig): Promise<operations.SearchPoliceStopDataResponse>;
}
