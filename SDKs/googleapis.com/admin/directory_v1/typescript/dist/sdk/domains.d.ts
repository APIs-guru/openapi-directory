import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Domains {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * directoryDomainsDelete - Deletes a domain of the customer.
    **/
    directoryDomainsDelete(req: operations.DirectoryDomainsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryDomainsDeleteResponse>;
    /**
     * directoryDomainsGet - Retrieves a domain of the customer.
    **/
    directoryDomainsGet(req: operations.DirectoryDomainsGetRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryDomainsGetResponse>;
    /**
     * directoryDomainsInsert - Inserts a domain of the customer.
    **/
    directoryDomainsInsert(req: operations.DirectoryDomainsInsertRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryDomainsInsertResponse>;
    /**
     * directoryDomainsList - Lists the domains of the customer.
    **/
    directoryDomainsList(req: operations.DirectoryDomainsListRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryDomainsListResponse>;
}
