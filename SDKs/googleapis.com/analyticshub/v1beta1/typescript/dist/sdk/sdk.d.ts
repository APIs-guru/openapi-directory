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
    AnalyticshubOrganizationsLocationsDataExchangesList(req: operations.AnalyticshubOrganizationsLocationsDataExchangesListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticshubOrganizationsLocationsDataExchangesListResponse>;
    AnalyticshubProjectsLocationsDataExchangesCreate(req: operations.AnalyticshubProjectsLocationsDataExchangesCreateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticshubProjectsLocationsDataExchangesCreateResponse>;
    AnalyticshubProjectsLocationsDataExchangesList(req: operations.AnalyticshubProjectsLocationsDataExchangesListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticshubProjectsLocationsDataExchangesListResponse>;
    AnalyticshubProjectsLocationsDataExchangesListingsCreate(req: operations.AnalyticshubProjectsLocationsDataExchangesListingsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticshubProjectsLocationsDataExchangesListingsCreateResponse>;
    AnalyticshubProjectsLocationsDataExchangesListingsDelete(req: operations.AnalyticshubProjectsLocationsDataExchangesListingsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticshubProjectsLocationsDataExchangesListingsDeleteResponse>;
    AnalyticshubProjectsLocationsDataExchangesListingsGet(req: operations.AnalyticshubProjectsLocationsDataExchangesListingsGetRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticshubProjectsLocationsDataExchangesListingsGetResponse>;
    AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicy(req: operations.AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyResponse>;
    AnalyticshubProjectsLocationsDataExchangesListingsList(req: operations.AnalyticshubProjectsLocationsDataExchangesListingsListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticshubProjectsLocationsDataExchangesListingsListResponse>;
    AnalyticshubProjectsLocationsDataExchangesListingsPatch(req: operations.AnalyticshubProjectsLocationsDataExchangesListingsPatchRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticshubProjectsLocationsDataExchangesListingsPatchResponse>;
    AnalyticshubProjectsLocationsDataExchangesListingsSetIamPolicy(req: operations.AnalyticshubProjectsLocationsDataExchangesListingsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticshubProjectsLocationsDataExchangesListingsSetIamPolicyResponse>;
    AnalyticshubProjectsLocationsDataExchangesListingsSubscribe(req: operations.AnalyticshubProjectsLocationsDataExchangesListingsSubscribeRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticshubProjectsLocationsDataExchangesListingsSubscribeResponse>;
    AnalyticshubProjectsLocationsDataExchangesListingsTestIamPermissions(req: operations.AnalyticshubProjectsLocationsDataExchangesListingsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticshubProjectsLocationsDataExchangesListingsTestIamPermissionsResponse>;
}
export {};
