import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * analyticshubProjectsLocationsDataExchangesCreate - Creates a new data exchange.
    **/
    analyticshubProjectsLocationsDataExchangesCreate(req: operations.AnalyticshubProjectsLocationsDataExchangesCreateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticshubProjectsLocationsDataExchangesCreateResponse>;
    /**
     * analyticshubProjectsLocationsDataExchangesList - Lists all data exchanges in a given project and location.
    **/
    analyticshubProjectsLocationsDataExchangesList(req: operations.AnalyticshubProjectsLocationsDataExchangesListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticshubProjectsLocationsDataExchangesListResponse>;
    /**
     * analyticshubProjectsLocationsDataExchangesListingsCreate - Creates a new listing.
    **/
    analyticshubProjectsLocationsDataExchangesListingsCreate(req: operations.AnalyticshubProjectsLocationsDataExchangesListingsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticshubProjectsLocationsDataExchangesListingsCreateResponse>;
    /**
     * analyticshubProjectsLocationsDataExchangesListingsDelete - Deletes a listing.
    **/
    analyticshubProjectsLocationsDataExchangesListingsDelete(req: operations.AnalyticshubProjectsLocationsDataExchangesListingsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticshubProjectsLocationsDataExchangesListingsDeleteResponse>;
    /**
     * analyticshubProjectsLocationsDataExchangesListingsGet - Gets the details of a listing.
    **/
    analyticshubProjectsLocationsDataExchangesListingsGet(req: operations.AnalyticshubProjectsLocationsDataExchangesListingsGetRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticshubProjectsLocationsDataExchangesListingsGetResponse>;
    /**
     * analyticshubProjectsLocationsDataExchangesListingsGetIamPolicy - Gets the IAM policy.
    **/
    analyticshubProjectsLocationsDataExchangesListingsGetIamPolicy(req: operations.AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticshubProjectsLocationsDataExchangesListingsGetIamPolicyResponse>;
    /**
     * analyticshubProjectsLocationsDataExchangesListingsList - Lists all listings in a given project and location.
    **/
    analyticshubProjectsLocationsDataExchangesListingsList(req: operations.AnalyticshubProjectsLocationsDataExchangesListingsListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticshubProjectsLocationsDataExchangesListingsListResponse>;
    /**
     * analyticshubProjectsLocationsDataExchangesListingsPatch - Updates an existing listing.
    **/
    analyticshubProjectsLocationsDataExchangesListingsPatch(req: operations.AnalyticshubProjectsLocationsDataExchangesListingsPatchRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticshubProjectsLocationsDataExchangesListingsPatchResponse>;
    /**
     * analyticshubProjectsLocationsDataExchangesListingsSetIamPolicy - Sets the IAM policy.
    **/
    analyticshubProjectsLocationsDataExchangesListingsSetIamPolicy(req: operations.AnalyticshubProjectsLocationsDataExchangesListingsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticshubProjectsLocationsDataExchangesListingsSetIamPolicyResponse>;
    /**
     * analyticshubProjectsLocationsDataExchangesListingsSubscribe - Subscribes to a listing. Currently, with Analytics Hub, you can create listings that reference only BigQuery datasets. Upon subscription to a listing for a BigQuery dataset, Analytics Hub creates a linked dataset in the subscriber's project.
    **/
    analyticshubProjectsLocationsDataExchangesListingsSubscribe(req: operations.AnalyticshubProjectsLocationsDataExchangesListingsSubscribeRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticshubProjectsLocationsDataExchangesListingsSubscribeResponse>;
    /**
     * analyticshubProjectsLocationsDataExchangesListingsTestIamPermissions - Returns the permissions that a caller has.
    **/
    analyticshubProjectsLocationsDataExchangesListingsTestIamPermissions(req: operations.AnalyticshubProjectsLocationsDataExchangesListingsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticshubProjectsLocationsDataExchangesListingsTestIamPermissionsResponse>;
}
