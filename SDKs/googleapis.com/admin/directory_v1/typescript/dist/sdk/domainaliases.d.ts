import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DomainAliases {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * directoryDomainAliasesDelete - Deletes a domain Alias of the customer.
    **/
    directoryDomainAliasesDelete(req: operations.DirectoryDomainAliasesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryDomainAliasesDeleteResponse>;
    /**
     * directoryDomainAliasesGet - Retrieves a domain alias of the customer.
    **/
    directoryDomainAliasesGet(req: operations.DirectoryDomainAliasesGetRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryDomainAliasesGetResponse>;
    /**
     * directoryDomainAliasesInsert - Inserts a domain alias of the customer.
    **/
    directoryDomainAliasesInsert(req: operations.DirectoryDomainAliasesInsertRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryDomainAliasesInsertResponse>;
    /**
     * directoryDomainAliasesList - Lists the domain aliases of the customer.
    **/
    directoryDomainAliasesList(req: operations.DirectoryDomainAliasesListRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryDomainAliasesListResponse>;
}
