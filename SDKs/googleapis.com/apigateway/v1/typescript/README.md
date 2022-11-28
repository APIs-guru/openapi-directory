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
import { ApigatewayProjectsLocationsApisConfigsCreateRequest, ApigatewayProjectsLocationsApisConfigsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ApigatewayProjectsLocationsApisConfigsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "et",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "odit",
    alt: "media",
    apiConfigId: "repellat",
    callback: "voluptatum",
    fields: "consequatur",
    key: "provident",
    oauthToken: "laboriosam",
    prettyPrint: true,
    quotaUser: "dignissimos",
    uploadType: "quos",
    uploadProtocol: "reiciendis",
  },
  request: {
    displayName: "omnis",
    gatewayServiceAccount: "quis",
    grpcServices: [
      {
        fileDescriptorSet: {
          contents: "velit",
          path: "in",
        },
        source: [
          {
            contents: "at",
            path: "molestiae",
          },
          {
            contents: "odio",
            path: "ipsam",
          },
        ],
      },
      {
        fileDescriptorSet: {
          contents: "eos",
          path: "eos",
        },
        source: [
          {
            contents: "et",
            path: "maxime",
          },
          {
            contents: "similique",
            path: "esse",
          },
          {
            contents: "quo",
            path: "et",
          },
        ],
      },
      {
        fileDescriptorSet: {
          contents: "a",
          path: "commodi",
        },
        source: [
          {
            contents: "qui",
            path: "et",
          },
          {
            contents: "maxime",
            path: "beatae",
          },
          {
            contents: "doloremque",
            path: "omnis",
          },
        ],
      },
    ],
    labels: {
      "asperiores": "nulla",
    },
    managedServiceConfigs: [
      {
        contents: "velit",
        path: "et",
      },
      {
        contents: "velit",
        path: "et",
      },
    ],
    openapiDocuments: [
      {
        document: {
          contents: "voluptas",
          path: "ab",
        },
      },
      {
        document: {
          contents: "sed",
          path: "qui",
        },
      },
    ],
  },
};

sdk.projects.apigatewayProjectsLocationsApisConfigsCreate(req).then((res: ApigatewayProjectsLocationsApisConfigsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `apigatewayProjectsLocationsApisConfigsCreate` - Creates a new ApiConfig in a given project and location.
* `apigatewayProjectsLocationsApisConfigsList` - Lists ApiConfigs in a given project and location.
* `apigatewayProjectsLocationsApisCreate` - Creates a new Api in a given project and location.
* `apigatewayProjectsLocationsApisList` - Lists Apis in a given project and location.
* `apigatewayProjectsLocationsGatewaysCreate` - Creates a new Gateway in a given project and location.
* `apigatewayProjectsLocationsGatewaysGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `apigatewayProjectsLocationsGatewaysList` - Lists Gateways in a given project and location.
* `apigatewayProjectsLocationsGatewaysPatch` - Updates the parameters of a single Gateway.
* `apigatewayProjectsLocationsGatewaysSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `apigatewayProjectsLocationsGatewaysTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `apigatewayProjectsLocationsList` - Lists information about the supported locations for this service.
* `apigatewayProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `apigatewayProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `apigatewayProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `apigatewayProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
