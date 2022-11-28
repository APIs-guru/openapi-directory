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
