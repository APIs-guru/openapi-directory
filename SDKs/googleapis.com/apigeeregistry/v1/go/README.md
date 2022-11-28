# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.ApigeeregistryProjectsLocationsApisCreateRequest{
        Security: operations.ApigeeregistryProjectsLocationsApisCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ApigeeregistryProjectsLocationsApisCreatePathParams{
            Parent: "possimus",
        },
        QueryParams: operations.ApigeeregistryProjectsLocationsApisCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "esse",
            Alt: "proto",
            APIID: "quae",
            Callback: "eum",
            Fields: "qui",
            Key: "ad",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "qui",
            UploadType: "qui",
            UploadProtocol: "dolor",
        },
        Request: &shared.APIInput{
            Annotations: map[string]string{
                "asperiores": "minima",
            },
            Availability: "dolores",
            Description: "vitae",
            DisplayName: "et",
            Labels: map[string]string{
                "quam": "quo",
                "dignissimos": "quo",
            },
            Name: "sint",
            RecommendedDeployment: "sit",
            RecommendedVersion: "ducimus",
        },
    }
    
    res, err := s.Projects.ApigeeregistryProjectsLocationsApisCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.API != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `ApigeeregistryProjectsLocationsApisCreate` - Creates a specified API.
* `ApigeeregistryProjectsLocationsApisDeploymentsCreate` - Creates a specified deployment.
* `ApigeeregistryProjectsLocationsApisDeploymentsList` - Returns matching deployments.
* `ApigeeregistryProjectsLocationsApisList` - Returns matching APIs.
* `ApigeeregistryProjectsLocationsApisVersionsCreate` - Creates a specified version.
* `ApigeeregistryProjectsLocationsApisVersionsList` - Returns matching versions.
* `ApigeeregistryProjectsLocationsApisVersionsSpecsCreate` - Creates a specified spec.
* `ApigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevision` - Deletes a revision of a spec.
* `ApigeeregistryProjectsLocationsApisVersionsSpecsList` - Returns matching specs.
* `ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisions` - Lists all revisions of a spec. Revisions are returned in descending order of revision creation time.
* `ApigeeregistryProjectsLocationsApisVersionsSpecsPatch` - Used to modify a specified spec.
* `ApigeeregistryProjectsLocationsApisVersionsSpecsRollback` - Sets the current revision to a specified prior revision. Note that this creates a new revision with a new revision ID.
* `ApigeeregistryProjectsLocationsApisVersionsSpecsTagRevision` - Adds a tag to a specified revision of a spec.
* `ApigeeregistryProjectsLocationsArtifactsCreate` - Creates a specified artifact.
* `ApigeeregistryProjectsLocationsArtifactsGetContents` - Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).
* `ApigeeregistryProjectsLocationsArtifactsList` - Returns matching artifacts.
* `ApigeeregistryProjectsLocationsArtifactsReplaceArtifact` - Used to replace a specified artifact.
* `ApigeeregistryProjectsLocationsInstancesCreate` - Provisions instance resources for the Registry.
* `ApigeeregistryProjectsLocationsList` - Lists information about the supported locations for this service.
* `ApigeeregistryProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `ApigeeregistryProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `ApigeeregistryProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `ApigeeregistryProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `ApigeeregistryProjectsLocationsRuntimeGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `ApigeeregistryProjectsLocationsRuntimeSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `ApigeeregistryProjectsLocationsRuntimeTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
