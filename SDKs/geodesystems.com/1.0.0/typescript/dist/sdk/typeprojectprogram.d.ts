import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeProjectProgram {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchProjectProgram - Search API for 'Program' entry type
     *
     * API to search for entries of type Program
    **/
    searchProjectProgram(req: operations.SearchProjectProgramRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectProgramResponse>;
}
