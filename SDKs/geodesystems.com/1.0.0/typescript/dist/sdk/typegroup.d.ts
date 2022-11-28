import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeGroup {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchGroup - Search API for 'Folder' entry type
     *
     * API to search for entries of type Folder
    **/
    searchGroup(req: operations.SearchGroupRequest, config?: AxiosRequestConfig): Promise<operations.SearchGroupResponse>;
}
