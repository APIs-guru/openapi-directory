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
import { AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest, AccesscontextmanagerAccessPoliciesAccessLevelsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "ea",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "atque",
    alt: "json",
    callback: "praesentium",
    fields: "consequatur",
    key: "cupiditate",
    oauthToken: "deserunt",
    prettyPrint: true,
    quotaUser: "rem",
    uploadType: "vel",
    uploadProtocol: "temporibus",
  },
  request: {
    basic: {
      combiningFunction: "AND",
      conditions: [
        {
          devicePolicy: {
            allowedDeviceManagementLevels: [
              "BASIC",
            ],
            allowedEncryptionStatuses: [
              "UNENCRYPTED",
              "ENCRYPTION_UNSUPPORTED",
              "ENCRYPTION_UNSUPPORTED",
            ],
            osConstraints: [
              {
                minimumVersion: "nisi",
                osType: "DESKTOP_MAC",
                requireVerifiedChromeOs: true,
              },
              {
                minimumVersion: "deleniti",
                osType: "DESKTOP_LINUX",
                requireVerifiedChromeOs: false,
              },
            ],
            requireAdminApproval: false,
            requireCorpOwned: false,
            requireScreenlock: false,
          },
          ipSubnetworks: [
            "itaque",
            "nihil",
            "cum",
          ],
          members: [
            "excepturi",
          ],
          negate: false,
          regions: [
            "et",
            "accusamus",
            "tempore",
          ],
          requiredAccessLevels: [
            "et",
            "omnis",
          ],
        },
        {
          devicePolicy: {
            allowedDeviceManagementLevels: [
              "BASIC",
              "COMPLETE",
              "BASIC",
            ],
            allowedEncryptionStatuses: [
              "ENCRYPTION_UNSUPPORTED",
            ],
            osConstraints: [
              {
                minimumVersion: "architecto",
                osType: "DESKTOP_LINUX",
                requireVerifiedChromeOs: false,
              },
            ],
            requireAdminApproval: true,
            requireCorpOwned: false,
            requireScreenlock: false,
          },
          ipSubnetworks: [
            "architecto",
          ],
          members: [
            "autem",
          ],
          negate: true,
          regions: [
            "aut",
            "dignissimos",
          ],
          requiredAccessLevels: [
            "quo",
          ],
        },
        {
          devicePolicy: {
            allowedDeviceManagementLevels: [
              "MANAGEMENT_UNSPECIFIED",
            ],
            allowedEncryptionStatuses: [
              "UNENCRYPTED",
            ],
            osConstraints: [
              {
                minimumVersion: "voluptas",
                osType: "IOS",
                requireVerifiedChromeOs: false,
              },
              {
                minimumVersion: "praesentium",
                osType: "DESKTOP_MAC",
                requireVerifiedChromeOs: false,
              },
              {
                minimumVersion: "et",
                osType: "DESKTOP_MAC",
                requireVerifiedChromeOs: true,
              },
            ],
            requireAdminApproval: true,
            requireCorpOwned: true,
            requireScreenlock: false,
          },
          ipSubnetworks: [
            "aut",
            "sunt",
            "harum",
          ],
          members: [
            "nihil",
          ],
          negate: true,
          regions: [
            "sunt",
            "sapiente",
          ],
          requiredAccessLevels: [
            "saepe",
            "ad",
            "cum",
          ],
        },
      ],
    },
    custom: {
      expr: {
        description: "corrupti",
        expression: "et",
        location: "omnis",
        title: "tenetur",
      },
    },
    description: "qui",
    name: "nisi",
    title: "consequatur",
  },
};

sdk.accessPolicies.accesscontextmanagerAccessPoliciesAccessLevelsCreate(req).then((res: AccesscontextmanagerAccessPoliciesAccessLevelsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accessPolicies

* `accesscontextmanagerAccessPoliciesAccessLevelsCreate` - Create an Access Level. The longrunning operation from this RPC will have a successful status once the Access Level has propagated to long-lasting storage. Access Levels containing errors will result in an error response for the first error encountered.
* `accesscontextmanagerAccessPoliciesAccessLevelsList` - List all Access Levels for an access policy.
* `accesscontextmanagerAccessPoliciesCreate` - Create an `AccessPolicy`. Fails if this organization already has a `AccessPolicy`. The longrunning Operation will have a successful status once the `AccessPolicy` has propagated to long-lasting storage. Syntactic and basic semantic errors will be returned in `metadata` as a BadRequest proto.
* `accesscontextmanagerAccessPoliciesList` - List all AccessPolicies under a container.
* `accesscontextmanagerAccessPoliciesServicePerimetersCreate` - Create a Service Perimeter. The longrunning operation from this RPC will have a successful status once the Service Perimeter has propagated to long-lasting storage. Service Perimeters containing errors will result in an error response for the first error encountered.
* `accesscontextmanagerAccessPoliciesServicePerimetersDelete` - Delete a Service Perimeter by resource name. The longrunning operation from this RPC will have a successful status once the Service Perimeter has been removed from long-lasting storage.
* `accesscontextmanagerAccessPoliciesServicePerimetersList` - List all Service Perimeters for an access policy.
* `accesscontextmanagerAccessPoliciesServicePerimetersPatch` - Update a Service Perimeter. The longrunning operation from this RPC will have a successful status once the changes to the Service Perimeter have propagated to long-lasting storage. Service Perimeter containing errors will result in an error response for the first error encountered.

### operations

* `accesscontextmanagerOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
