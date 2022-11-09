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
    AssuredworkloadsOrganizationsLocationsOperationsList(req: operations.AssuredworkloadsOrganizationsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.AssuredworkloadsOrganizationsLocationsOperationsListResponse>;
    AssuredworkloadsOrganizationsLocationsWorkloadsCreate(req: operations.AssuredworkloadsOrganizationsLocationsWorkloadsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AssuredworkloadsOrganizationsLocationsWorkloadsCreateResponse>;
    AssuredworkloadsOrganizationsLocationsWorkloadsDelete(req: operations.AssuredworkloadsOrganizationsLocationsWorkloadsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AssuredworkloadsOrganizationsLocationsWorkloadsDeleteResponse>;
    AssuredworkloadsOrganizationsLocationsWorkloadsList(req: operations.AssuredworkloadsOrganizationsLocationsWorkloadsListRequest, config?: AxiosRequestConfig): Promise<operations.AssuredworkloadsOrganizationsLocationsWorkloadsListResponse>;
    AssuredworkloadsOrganizationsLocationsWorkloadsPatch(req: operations.AssuredworkloadsOrganizationsLocationsWorkloadsPatchRequest, config?: AxiosRequestConfig): Promise<operations.AssuredworkloadsOrganizationsLocationsWorkloadsPatchResponse>;
    AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResources(req: operations.AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesRequest, config?: AxiosRequestConfig): Promise<operations.AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesResponse>;
    AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledge(req: operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeRequest, config?: AxiosRequestConfig): Promise<operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeResponse>;
    AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGet(req: operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetRequest, config?: AxiosRequestConfig): Promise<operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetResponse>;
    AssuredworkloadsOrganizationsLocationsWorkloadsViolationsList(req: operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListRequest, config?: AxiosRequestConfig): Promise<operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListResponse>;
}
export {};
