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
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AssociateDomainRequest{
        Headers: operations.AssociateDomainHeaders{
            XAmzAlgorithm: "suscipit",
            XAmzContentSha256: "laudantium",
            XAmzCredential: "in",
            XAmzDate: "dicta",
            XAmzSecurityToken: "dolorem",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "reiciendis",
        },
        Request: operations.AssociateDomainRequestBody{
            AcmCertificateArn: "qui",
            DisplayName: "fuga",
            DomainName: "sed",
            FleetArn: "sed",
        },
    }
    
    res, err := s.Sdk.AssociateDomain(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateDomainResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AssociateDomain` - Specifies a domain to be associated to Amazon WorkLink.
* `AssociateWebsiteAuthorizationProvider` - Associates a website authorization provider with a specified fleet. This is used to authorize users against associated websites in the company network.
* `AssociateWebsiteCertificateAuthority` - Imports the root certificate of a certificate authority (CA) used to obtain TLS certificates used by associated websites within the company network.
* `CreateFleet` - Creates a fleet. A fleet consists of resources and the configuration that delivers associated websites to authorized users who download and set up the Amazon WorkLink app.
* `DeleteFleet` - Deletes a fleet. Prevents users from accessing previously associated websites. 
* `DescribeAuditStreamConfiguration` - Describes the configuration for delivering audit streams to the customer account.
* `DescribeCompanyNetworkConfiguration` - Describes the networking configuration to access the internal websites associated with the specified fleet.
* `DescribeDevice` - Provides information about a user's device.
* `DescribeDevicePolicyConfiguration` - Describes the device policy configuration for the specified fleet.
* `DescribeDomain` - Provides information about the domain.
* `DescribeFleetMetadata` - Provides basic information for the specified fleet, excluding identity provider, networking, and device configuration details.
* `DescribeIdentityProviderConfiguration` - Describes the identity provider configuration of the specified fleet.
* `DescribeWebsiteCertificateAuthority` - Provides information about the certificate authority.
* `DisassociateDomain` - Disassociates a domain from Amazon WorkLink. End users lose the ability to access the domain with Amazon WorkLink. 
* `DisassociateWebsiteAuthorizationProvider` - Disassociates a website authorization provider from a specified fleet. After the disassociation, users can't load any associated websites that require this authorization provider.
* `DisassociateWebsiteCertificateAuthority` - Removes a certificate authority (CA).
* `ListDevices` - Retrieves a list of devices registered with the specified fleet.
* `ListDomains` - Retrieves a list of domains associated to a specified fleet.
* `ListFleets` - Retrieves a list of fleets for the current account and Region.
* `ListTagsForResource` - Retrieves a list of tags for the specified resource.
* `ListWebsiteAuthorizationProviders` - Retrieves a list of website authorization providers associated with a specified fleet.
* `ListWebsiteCertificateAuthorities` - Retrieves a list of certificate authorities added for the current account and Region.
* `RestoreDomainAccess` - Moves a domain to ACTIVE status if it was in the INACTIVE status.
* `RevokeDomainAccess` - Moves a domain to INACTIVE status if it was in the ACTIVE status.
* `SignOutUser` - Signs the user out from all of their devices. The user can sign in again if they have valid credentials.
* `TagResource` - Adds or overwrites one or more tags for the specified resource, such as a fleet. Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.
* `UntagResource` - Removes one or more tags from the specified resource.
* `UpdateAuditStreamConfiguration` - Updates the audit stream configuration for the fleet.
* `UpdateCompanyNetworkConfiguration` - Updates the company network configuration for the fleet.
* `UpdateDevicePolicyConfiguration` - Updates the device policy configuration for the fleet.
* `UpdateDomainMetadata` - Updates domain metadata, such as DisplayName.
* `UpdateFleetMetadata` - Updates fleet metadata, such as DisplayName.
* `UpdateIdentityProviderConfiguration` - Updates the identity provider configuration for the fleet.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
