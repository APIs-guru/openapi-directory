import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeProjectService {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchProjectService - Search API for 'Data Access Service' entry type
     *
     * API to search for entries of type Data Access Service
    **/
    searchProjectService(req: operations.SearchProjectServiceRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectServiceResponse>;
}
