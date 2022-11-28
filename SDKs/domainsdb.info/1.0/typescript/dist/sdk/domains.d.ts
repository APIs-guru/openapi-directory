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
     * getDomainsTldZoneIdDownload - Download Whole Dataset for TLD
    **/
    getDomainsTldZoneIdDownload(req: operations.GetDomainsTldZoneIdDownloadRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainsTldZoneIdDownloadResponse>;
    /**
     * getDomainsTldZoneIdSearch - Domains Search for TLD
    **/
    getDomainsTldZoneIdSearch(req: operations.GetDomainsTldZoneIdSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainsTldZoneIdSearchResponse>;
    /**
     * getDomainsUpdatesAdded - Get added domains, latest if date not specified
    **/
    getDomainsUpdatesAdded(req: operations.GetDomainsUpdatesAddedRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainsUpdatesAddedResponse>;
    /**
     * getDomainsUpdatesAddedDownload - Download added domains, latest if date not specified
    **/
    getDomainsUpdatesAddedDownload(req: operations.GetDomainsUpdatesAddedDownloadRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainsUpdatesAddedDownloadResponse>;
    /**
     * getDomainsUpdatesDeleted - Get deleted domains, latest if date not specified
    **/
    getDomainsUpdatesDeleted(req: operations.GetDomainsUpdatesDeletedRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainsUpdatesDeletedResponse>;
    /**
     * getDomainsUpdatesDeletedDownload - Download deleted domains, latest if date not specified
    **/
    getDomainsUpdatesDeletedDownload(req: operations.GetDomainsUpdatesDeletedDownloadRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainsUpdatesDeletedDownloadResponse>;
    /**
     * getDomainsUpdatesList - List of updates
    **/
    getDomainsUpdatesList(req: operations.GetDomainsUpdatesListRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainsUpdatesListResponse>;
    /**
     * getSearchDomainItem - Domains Database Search
    **/
    getSearchDomainItem(req: operations.GetSearchDomainItemRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchDomainItemResponse>;
    /**
     * getTldDomainItem - Get TLD records
    **/
    getTldDomainItem(req: operations.GetTldDomainItemRequest, config?: AxiosRequestConfig): Promise<operations.GetTldDomainItemResponse>;
}
