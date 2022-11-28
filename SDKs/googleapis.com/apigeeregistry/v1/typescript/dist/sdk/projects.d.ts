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
     * apigeeregistryProjectsLocationsApisCreate - Creates a specified API.
    **/
    apigeeregistryProjectsLocationsApisCreate(req: operations.ApigeeregistryProjectsLocationsApisCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeregistryProjectsLocationsApisCreateResponse>;
    /**
     * apigeeregistryProjectsLocationsApisDeploymentsCreate - Creates a specified deployment.
    **/
    apigeeregistryProjectsLocationsApisDeploymentsCreate(req: operations.ApigeeregistryProjectsLocationsApisDeploymentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeregistryProjectsLocationsApisDeploymentsCreateResponse>;
    /**
     * apigeeregistryProjectsLocationsApisDeploymentsList - Returns matching deployments.
    **/
    apigeeregistryProjectsLocationsApisDeploymentsList(req: operations.ApigeeregistryProjectsLocationsApisDeploymentsListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeregistryProjectsLocationsApisDeploymentsListResponse>;
    /**
     * apigeeregistryProjectsLocationsApisList - Returns matching APIs.
    **/
    apigeeregistryProjectsLocationsApisList(req: operations.ApigeeregistryProjectsLocationsApisListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeregistryProjectsLocationsApisListResponse>;
    /**
     * apigeeregistryProjectsLocationsApisVersionsCreate - Creates a specified version.
    **/
    apigeeregistryProjectsLocationsApisVersionsCreate(req: operations.ApigeeregistryProjectsLocationsApisVersionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeregistryProjectsLocationsApisVersionsCreateResponse>;
    /**
     * apigeeregistryProjectsLocationsApisVersionsList - Returns matching versions.
    **/
    apigeeregistryProjectsLocationsApisVersionsList(req: operations.ApigeeregistryProjectsLocationsApisVersionsListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeregistryProjectsLocationsApisVersionsListResponse>;
    /**
     * apigeeregistryProjectsLocationsApisVersionsSpecsCreate - Creates a specified spec.
    **/
    apigeeregistryProjectsLocationsApisVersionsSpecsCreate(req: operations.ApigeeregistryProjectsLocationsApisVersionsSpecsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeregistryProjectsLocationsApisVersionsSpecsCreateResponse>;
    /**
     * apigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevision - Deletes a revision of a spec.
    **/
    apigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevision(req: operations.ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevisionRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevisionResponse>;
    /**
     * apigeeregistryProjectsLocationsApisVersionsSpecsList - Returns matching specs.
    **/
    apigeeregistryProjectsLocationsApisVersionsSpecsList(req: operations.ApigeeregistryProjectsLocationsApisVersionsSpecsListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeregistryProjectsLocationsApisVersionsSpecsListResponse>;
    /**
     * apigeeregistryProjectsLocationsApisVersionsSpecsListRevisions - Lists all revisions of a spec. Revisions are returned in descending order of revision creation time.
    **/
    apigeeregistryProjectsLocationsApisVersionsSpecsListRevisions(req: operations.ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsResponse>;
    /**
     * apigeeregistryProjectsLocationsApisVersionsSpecsPatch - Used to modify a specified spec.
    **/
    apigeeregistryProjectsLocationsApisVersionsSpecsPatch(req: operations.ApigeeregistryProjectsLocationsApisVersionsSpecsPatchRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeregistryProjectsLocationsApisVersionsSpecsPatchResponse>;
    /**
     * apigeeregistryProjectsLocationsApisVersionsSpecsRollback - Sets the current revision to a specified prior revision. Note that this creates a new revision with a new revision ID.
    **/
    apigeeregistryProjectsLocationsApisVersionsSpecsRollback(req: operations.ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeregistryProjectsLocationsApisVersionsSpecsRollbackResponse>;
    /**
     * apigeeregistryProjectsLocationsApisVersionsSpecsTagRevision - Adds a tag to a specified revision of a spec.
    **/
    apigeeregistryProjectsLocationsApisVersionsSpecsTagRevision(req: operations.ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevisionResponse>;
    /**
     * apigeeregistryProjectsLocationsArtifactsCreate - Creates a specified artifact.
    **/
    apigeeregistryProjectsLocationsArtifactsCreate(req: operations.ApigeeregistryProjectsLocationsArtifactsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeregistryProjectsLocationsArtifactsCreateResponse>;
    /**
     * apigeeregistryProjectsLocationsArtifactsGetContents - Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).
    **/
    apigeeregistryProjectsLocationsArtifactsGetContents(req: operations.ApigeeregistryProjectsLocationsArtifactsGetContentsRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeregistryProjectsLocationsArtifactsGetContentsResponse>;
    /**
     * apigeeregistryProjectsLocationsArtifactsList - Returns matching artifacts.
    **/
    apigeeregistryProjectsLocationsArtifactsList(req: operations.ApigeeregistryProjectsLocationsArtifactsListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeregistryProjectsLocationsArtifactsListResponse>;
    /**
     * apigeeregistryProjectsLocationsArtifactsReplaceArtifact - Used to replace a specified artifact.
    **/
    apigeeregistryProjectsLocationsArtifactsReplaceArtifact(req: operations.ApigeeregistryProjectsLocationsArtifactsReplaceArtifactRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeregistryProjectsLocationsArtifactsReplaceArtifactResponse>;
    /**
     * apigeeregistryProjectsLocationsInstancesCreate - Provisions instance resources for the Registry.
    **/
    apigeeregistryProjectsLocationsInstancesCreate(req: operations.ApigeeregistryProjectsLocationsInstancesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeregistryProjectsLocationsInstancesCreateResponse>;
    /**
     * apigeeregistryProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    apigeeregistryProjectsLocationsList(req: operations.ApigeeregistryProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeregistryProjectsLocationsListResponse>;
    /**
     * apigeeregistryProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    apigeeregistryProjectsLocationsOperationsCancel(req: operations.ApigeeregistryProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeregistryProjectsLocationsOperationsCancelResponse>;
    /**
     * apigeeregistryProjectsLocationsOperationsDelete - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
    **/
    apigeeregistryProjectsLocationsOperationsDelete(req: operations.ApigeeregistryProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeregistryProjectsLocationsOperationsDeleteResponse>;
    /**
     * apigeeregistryProjectsLocationsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    apigeeregistryProjectsLocationsOperationsGet(req: operations.ApigeeregistryProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeregistryProjectsLocationsOperationsGetResponse>;
    /**
     * apigeeregistryProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    apigeeregistryProjectsLocationsOperationsList(req: operations.ApigeeregistryProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeregistryProjectsLocationsOperationsListResponse>;
    /**
     * apigeeregistryProjectsLocationsRuntimeGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    apigeeregistryProjectsLocationsRuntimeGetIamPolicy(req: operations.ApigeeregistryProjectsLocationsRuntimeGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeregistryProjectsLocationsRuntimeGetIamPolicyResponse>;
    /**
     * apigeeregistryProjectsLocationsRuntimeSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
    **/
    apigeeregistryProjectsLocationsRuntimeSetIamPolicy(req: operations.ApigeeregistryProjectsLocationsRuntimeSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeregistryProjectsLocationsRuntimeSetIamPolicyResponse>;
    /**
     * apigeeregistryProjectsLocationsRuntimeTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    apigeeregistryProjectsLocationsRuntimeTestIamPermissions(req: operations.ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.ApigeeregistryProjectsLocationsRuntimeTestIamPermissionsResponse>;
}
