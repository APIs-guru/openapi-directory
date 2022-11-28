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
     * bigqueryconnectionProjectsLocationsConnectionsCreate - Creates a new connection.
    **/
    bigqueryconnectionProjectsLocationsConnectionsCreate(req: operations.BigqueryconnectionProjectsLocationsConnectionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryconnectionProjectsLocationsConnectionsCreateResponse>;
    /**
     * bigqueryconnectionProjectsLocationsConnectionsDelete - Deletes connection and associated credential.
    **/
    bigqueryconnectionProjectsLocationsConnectionsDelete(req: operations.BigqueryconnectionProjectsLocationsConnectionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryconnectionProjectsLocationsConnectionsDeleteResponse>;
    /**
     * bigqueryconnectionProjectsLocationsConnectionsGet - Returns specified connection.
    **/
    bigqueryconnectionProjectsLocationsConnectionsGet(req: operations.BigqueryconnectionProjectsLocationsConnectionsGetRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryconnectionProjectsLocationsConnectionsGetResponse>;
    /**
     * bigqueryconnectionProjectsLocationsConnectionsGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    bigqueryconnectionProjectsLocationsConnectionsGetIamPolicy(req: operations.BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyResponse>;
    /**
     * bigqueryconnectionProjectsLocationsConnectionsList - Returns a list of connections in the given project.
    **/
    bigqueryconnectionProjectsLocationsConnectionsList(req: operations.BigqueryconnectionProjectsLocationsConnectionsListRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryconnectionProjectsLocationsConnectionsListResponse>;
    /**
     * bigqueryconnectionProjectsLocationsConnectionsSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
    **/
    bigqueryconnectionProjectsLocationsConnectionsSetIamPolicy(req: operations.BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyResponse>;
    /**
     * bigqueryconnectionProjectsLocationsConnectionsTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    bigqueryconnectionProjectsLocationsConnectionsTestIamPermissions(req: operations.BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsResponse>;
    /**
     * bigqueryconnectionProjectsLocationsConnectionsUpdateCredential - Sets the credential for the specified connection.
    **/
    bigqueryconnectionProjectsLocationsConnectionsUpdateCredential(req: operations.BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialResponse>;
}
