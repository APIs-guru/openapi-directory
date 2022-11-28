import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeHipchatGroup {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchHipchatGroup - Search API for 'HipChat Group' entry type
     *
     * API to search for entries of type HipChat Group
    **/
    searchHipchatGroup(req: operations.SearchHipchatGroupRequest, config?: AxiosRequestConfig): Promise<operations.SearchHipchatGroupResponse>;
}
