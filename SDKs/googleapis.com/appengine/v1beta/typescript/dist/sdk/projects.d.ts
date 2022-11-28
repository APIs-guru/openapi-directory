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
     * appengineProjectsLocationsApplicationsCreate - Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).
    **/
    appengineProjectsLocationsApplicationsCreate(req: operations.AppengineProjectsLocationsApplicationsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AppengineProjectsLocationsApplicationsCreateResponse>;
    /**
     * appengineProjectsLocationsApplicationsGet - Gets information about an application.
    **/
    appengineProjectsLocationsApplicationsGet(req: operations.AppengineProjectsLocationsApplicationsGetRequest, config?: AxiosRequestConfig): Promise<operations.AppengineProjectsLocationsApplicationsGetResponse>;
    /**
     * appengineProjectsLocationsApplicationsRepair - Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.
    **/
    appengineProjectsLocationsApplicationsRepair(req: operations.AppengineProjectsLocationsApplicationsRepairRequest, config?: AxiosRequestConfig): Promise<operations.AppengineProjectsLocationsApplicationsRepairResponse>;
    /**
     * appengineProjectsLocationsGet - Gets information about a location.
    **/
    appengineProjectsLocationsGet(req: operations.AppengineProjectsLocationsGetRequest, config?: AxiosRequestConfig): Promise<operations.AppengineProjectsLocationsGetResponse>;
    /**
     * appengineProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    appengineProjectsLocationsList(req: operations.AppengineProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.AppengineProjectsLocationsListResponse>;
    /**
     * appengineProjectsLocationsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    appengineProjectsLocationsOperationsGet(req: operations.AppengineProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.AppengineProjectsLocationsOperationsGetResponse>;
    /**
     * appengineProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/* /operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    appengineProjectsLocationsOperationsList(req: operations.AppengineProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.AppengineProjectsLocationsOperationsListResponse>;
}
