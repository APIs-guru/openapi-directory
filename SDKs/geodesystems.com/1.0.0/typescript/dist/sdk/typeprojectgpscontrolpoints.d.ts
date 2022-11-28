import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeProjectGpsControlpoints {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchProjectGpsControlpoints - Search API for 'Control Points File' entry type
     *
     * API to search for entries of type Control Points File
    **/
    searchProjectGpsControlpoints(req: operations.SearchProjectGpsControlpointsRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectGpsControlpointsResponse>;
}
