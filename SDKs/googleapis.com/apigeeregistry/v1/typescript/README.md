# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { ApigeeregistryProjectsLocationsApisCreateRequest, ApigeeregistryProjectsLocationsApisCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ApigeeregistryProjectsLocationsApisCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "possimus",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "esse",
    alt: "proto",
    apiId: "quae",
    callback: "eum",
    fields: "qui",
    key: "ad",
    oauthToken: "vel",
    prettyPrint: false,
    quotaUser: "qui",
    uploadType: "qui",
    uploadProtocol: "dolor",
  },
  request: {
    annotations: {
      "asperiores": "minima",
    },
    availability: "dolores",
    description: "vitae",
    displayName: "et",
    labels: {
      "quam": "quo",
      "dignissimos": "quo",
    },
    name: "sint",
    recommendedDeployment: "sit",
    recommendedVersion: "ducimus",
  },
};

sdk.projects.apigeeregistryProjectsLocationsApisCreate(req).then((res: ApigeeregistryProjectsLocationsApisCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `apigeeregistryProjectsLocationsApisCreate` - Creates a specified API.
* `apigeeregistryProjectsLocationsApisDeploymentsCreate` - Creates a specified deployment.
* `apigeeregistryProjectsLocationsApisDeploymentsList` - Returns matching deployments.
* `apigeeregistryProjectsLocationsApisList` - Returns matching APIs.
* `apigeeregistryProjectsLocationsApisVersionsCreate` - Creates a specified version.
* `apigeeregistryProjectsLocationsApisVersionsList` - Returns matching versions.
* `apigeeregistryProjectsLocationsApisVersionsSpecsCreate` - Creates a specified spec.
* `apigeeregistryProjectsLocationsApisVersionsSpecsDeleteRevision` - Deletes a revision of a spec.
* `apigeeregistryProjectsLocationsApisVersionsSpecsList` - Returns matching specs.
* `apigeeregistryProjectsLocationsApisVersionsSpecsListRevisions` - Lists all revisions of a spec. Revisions are returned in descending order of revision creation time.
* `apigeeregistryProjectsLocationsApisVersionsSpecsPatch` - Used to modify a specified spec.
* `apigeeregistryProjectsLocationsApisVersionsSpecsRollback` - Sets the current revision to a specified prior revision. Note that this creates a new revision with a new revision ID.
* `apigeeregistryProjectsLocationsApisVersionsSpecsTagRevision` - Adds a tag to a specified revision of a spec.
* `apigeeregistryProjectsLocationsArtifactsCreate` - Creates a specified artifact.
* `apigeeregistryProjectsLocationsArtifactsGetContents` - Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).
* `apigeeregistryProjectsLocationsArtifactsList` - Returns matching artifacts.
* `apigeeregistryProjectsLocationsArtifactsReplaceArtifact` - Used to replace a specified artifact.
* `apigeeregistryProjectsLocationsInstancesCreate` - Provisions instance resources for the Registry.
* `apigeeregistryProjectsLocationsList` - Lists information about the supported locations for this service.
* `apigeeregistryProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `apigeeregistryProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `apigeeregistryProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `apigeeregistryProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `apigeeregistryProjectsLocationsRuntimeGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `apigeeregistryProjectsLocationsRuntimeSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `apigeeregistryProjectsLocationsRuntimeTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
