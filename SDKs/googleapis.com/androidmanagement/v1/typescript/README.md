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
import { AndroidmanagementEnterprisesCreateRequest, AndroidmanagementEnterprisesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AndroidmanagementEnterprisesCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "animi",
    agreementAccepted: false,
    alt: "proto",
    callback: "dolorem",
    enterpriseToken: "fugiat",
    fields: "adipisci",
    key: "dolores",
    oauthToken: "officia",
    prettyPrint: true,
    projectId: "doloremque",
    quotaUser: "et",
    signupUrlName: "perspiciatis",
    uploadType: "voluptatem",
    uploadProtocol: "esse",
  },
  request: {
    appAutoApprovalEnabled: true,
    contactInfo: {
      contactEmail: "accusamus",
      dataProtectionOfficerEmail: "quibusdam",
      dataProtectionOfficerName: "reiciendis",
      dataProtectionOfficerPhone: "esse",
      euRepresentativeEmail: "quaerat",
      euRepresentativeName: "expedita",
      euRepresentativePhone: "nulla",
    },
    enabledNotificationTypes: [
      "ENROLLMENT",
      "COMMAND",
    ],
    enterpriseDisplayName: "iusto",
    logo: {
      sha256Hash: "deserunt",
      url: "blanditiis",
    },
    name: "unde",
    primaryColor: 4010035282420238824,
    pubsubTopic: "qui",
    signinDetails: [
      {
        allowPersonalUsage: "ALLOW_PERSONAL_USAGE_UNSPECIFIED",
        qrCode: "voluptatem",
        signinEnrollmentToken: "commodi",
        signinUrl: "aut",
      },
      {
        allowPersonalUsage: "PERSONAL_USAGE_ALLOWED",
        qrCode: "labore",
        signinEnrollmentToken: "rerum",
        signinUrl: "ullam",
      },
    ],
    termsAndConditions: [
      {
        content: {
          defaultMessage: "et",
          localizedMessages: {
            "ipsum": "et",
            "velit": "sed",
            "at": "nisi",
          },
        },
        header: {
          defaultMessage: "eos",
          localizedMessages: {
            "expedita": "quisquam",
            "consequatur": "aperiam",
          },
        },
      },
      {
        content: {
          defaultMessage: "blanditiis",
          localizedMessages: {
            "alias": "magni",
            "quia": "quibusdam",
            "error": "voluptatem",
          },
        },
        header: {
          defaultMessage: "architecto",
          localizedMessages: {
            "quia": "et",
            "voluptatem": "recusandae",
            "a": "ipsam",
          },
        },
      },
      {
        content: {
          defaultMessage: "id",
          localizedMessages: {
            "qui": "eum",
            "ex": "qui",
            "sed": "dolorum",
          },
        },
        header: {
          defaultMessage: "dolor",
          localizedMessages: {
            "corporis": "nesciunt",
            "blanditiis": "in",
            "consequatur": "dolores",
          },
        },
      },
    ],
  },
};

sdk.enterprises.androidmanagementEnterprisesCreate(req).then((res: AndroidmanagementEnterprisesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### enterprises

* `androidmanagementEnterprisesCreate` - Creates an enterprise. This is the last step in the enterprise signup flow.
* `androidmanagementEnterprisesDevicesIssueCommand` - Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.
* `androidmanagementEnterprisesDevicesList` - Lists devices for a given enterprise. Deleted devices are not returned in the response.
* `androidmanagementEnterprisesDevicesOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* `androidmanagementEnterprisesEnrollmentTokensCreate` - Creates an enrollment token for a given enterprise. It's up to the caller's responsibility to manage the lifecycle of newly created tokens and deleting them when they're not intended to be used anymore. Once an enrollment token has been created, it's not possible to retrieve the token's content anymore using AM API. It is recommended for EMMs to securely store the token if it's intended to be reused.
* `androidmanagementEnterprisesEnrollmentTokensList` - Lists active, unexpired enrollment tokens for a given enterprise. The list items contain only a partial view of EnrollmentToken: all the fields but name and expiration_timestamp are empty. This method is meant to help manage active enrollment tokens lifecycle. For security reasons, it's recommended to delete active enrollment tokens as soon as they're not intended to be used anymore.
* `androidmanagementEnterprisesList` - Lists EMM-managed enterprises. Only BASIC fields are returned.
* `androidmanagementEnterprisesPoliciesList` - Lists policies for a given enterprise.
* `androidmanagementEnterprisesWebAppsCreate` - Creates a web app.
* `androidmanagementEnterprisesWebAppsDelete` - Deletes a web app.
* `androidmanagementEnterprisesWebAppsGet` - Gets a web app.
* `androidmanagementEnterprisesWebAppsList` - Lists web apps for a given enterprise.
* `androidmanagementEnterprisesWebAppsPatch` - Updates a web app.
* `androidmanagementEnterprisesWebTokensCreate` - Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.

### signupUrls

* `androidmanagementSignupUrlsCreate` - Creates an enterprise signup URL.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
