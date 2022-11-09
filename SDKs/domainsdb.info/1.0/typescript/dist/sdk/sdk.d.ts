import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    GetDomainsTldZoneIdDownload(req: operations.GetDomainsTldZoneIdDownloadRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainsTldZoneIdDownloadResponse>;
    GetDomainsTldZoneIdSearch(req: operations.GetDomainsTldZoneIdSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainsTldZoneIdSearchResponse>;
    GetDomainsUpdatesAdded(req: operations.GetDomainsUpdatesAddedRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainsUpdatesAddedResponse>;
    GetDomainsUpdatesAddedDownload(req: operations.GetDomainsUpdatesAddedDownloadRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainsUpdatesAddedDownloadResponse>;
    GetDomainsUpdatesDeleted(req: operations.GetDomainsUpdatesDeletedRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainsUpdatesDeletedResponse>;
    GetDomainsUpdatesDeletedDownload(req: operations.GetDomainsUpdatesDeletedDownloadRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainsUpdatesDeletedDownloadResponse>;
    GetDomainsUpdatesList(req: operations.GetDomainsUpdatesListRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainsUpdatesListResponse>;
    GetInfoTld(config?: AxiosRequestConfig): Promise<operations.GetInfoTldResponse>;
    GetInfoTldZone(req: operations.GetInfoTldZoneRequest, config?: AxiosRequestConfig): Promise<operations.GetInfoTldZoneResponse>;
    GetApiInfoItem(req: operations.GetApiInfoItemRequest, config?: AxiosRequestConfig): Promise<operations.GetApiInfoItemResponse>;
    GetSearchDomainItem(req: operations.GetSearchDomainItemRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchDomainItemResponse>;
    GetStatisticsCollection(req: operations.GetStatisticsCollectionRequest, config?: AxiosRequestConfig): Promise<operations.GetStatisticsCollectionResponse>;
    GetStatisticsItem(req: operations.GetStatisticsItemRequest, config?: AxiosRequestConfig): Promise<operations.GetStatisticsItemResponse>;
    GetTldDomainItem(req: operations.GetTldDomainItemRequest, config?: AxiosRequestConfig): Promise<operations.GetTldDomainItemResponse>;
}
export {};
