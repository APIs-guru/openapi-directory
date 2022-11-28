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
import { AssociateDomainRequest, AssociateDomainResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AssociateDomainRequest = {
  headers: {
    xAmzAlgorithm: "suscipit",
    xAmzContentSha256: "laudantium",
    xAmzCredential: "in",
    xAmzDate: "dicta",
    xAmzSecurityToken: "dolorem",
    xAmzSignature: "nulla",
    xAmzSignedHeaders: "reiciendis",
  },
  request: {
    acmCertificateArn: "qui",
    displayName: "fuga",
    domainName: "sed",
    fleetArn: "sed",
  },
};

sdk.sdk.associateDomain(req).then((res: AssociateDomainResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `associateDomain` - Specifies a domain to be associated to Amazon WorkLink.
* `associateWebsiteAuthorizationProvider` - Associates a website authorization provider with a specified fleet. This is used to authorize users against associated websites in the company network.
* `associateWebsiteCertificateAuthority` - Imports the root certificate of a certificate authority (CA) used to obtain TLS certificates used by associated websites within the company network.
* `createFleet` - Creates a fleet. A fleet consists of resources and the configuration that delivers associated websites to authorized users who download and set up the Amazon WorkLink app.
* `deleteFleet` - Deletes a fleet. Prevents users from accessing previously associated websites. 
* `describeAuditStreamConfiguration` - Describes the configuration for delivering audit streams to the customer account.
* `describeCompanyNetworkConfiguration` - Describes the networking configuration to access the internal websites associated with the specified fleet.
* `describeDevice` - Provides information about a user's device.
* `describeDevicePolicyConfiguration` - Describes the device policy configuration for the specified fleet.
* `describeDomain` - Provides information about the domain.
* `describeFleetMetadata` - Provides basic information for the specified fleet, excluding identity provider, networking, and device configuration details.
* `describeIdentityProviderConfiguration` - Describes the identity provider configuration of the specified fleet.
* `describeWebsiteCertificateAuthority` - Provides information about the certificate authority.
* `disassociateDomain` - Disassociates a domain from Amazon WorkLink. End users lose the ability to access the domain with Amazon WorkLink. 
* `disassociateWebsiteAuthorizationProvider` - Disassociates a website authorization provider from a specified fleet. After the disassociation, users can't load any associated websites that require this authorization provider.
* `disassociateWebsiteCertificateAuthority` - Removes a certificate authority (CA).
* `listDevices` - Retrieves a list of devices registered with the specified fleet.
* `listDomains` - Retrieves a list of domains associated to a specified fleet.
* `listFleets` - Retrieves a list of fleets for the current account and Region.
* `listTagsForResource` - Retrieves a list of tags for the specified resource.
* `listWebsiteAuthorizationProviders` - Retrieves a list of website authorization providers associated with a specified fleet.
* `listWebsiteCertificateAuthorities` - Retrieves a list of certificate authorities added for the current account and Region.
* `restoreDomainAccess` - Moves a domain to ACTIVE status if it was in the INACTIVE status.
* `revokeDomainAccess` - Moves a domain to INACTIVE status if it was in the ACTIVE status.
* `signOutUser` - Signs the user out from all of their devices. The user can sign in again if they have valid credentials.
* `tagResource` - Adds or overwrites one or more tags for the specified resource, such as a fleet. Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.
* `untagResource` - Removes one or more tags from the specified resource.
* `updateAuditStreamConfiguration` - Updates the audit stream configuration for the fleet.
* `updateCompanyNetworkConfiguration` - Updates the company network configuration for the fleet.
* `updateDevicePolicyConfiguration` - Updates the device policy configuration for the fleet.
* `updateDomainMetadata` - Updates domain metadata, such as DisplayName.
* `updateFleetMetadata` - Updates fleet metadata, such as DisplayName.
* `updateIdentityProviderConfiguration` - Updates the identity provider configuration for the fleet.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
