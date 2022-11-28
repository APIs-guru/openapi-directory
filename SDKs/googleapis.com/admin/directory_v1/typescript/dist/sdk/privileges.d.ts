import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Privileges {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * directoryPrivilegesList - Retrieves a paginated list of all privileges for a customer.
    **/
    directoryPrivilegesList(req: operations.DirectoryPrivilegesListRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryPrivilegesListResponse>;
}
