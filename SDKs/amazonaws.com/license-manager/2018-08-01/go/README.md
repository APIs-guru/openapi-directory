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
    
    req := operations.AcceptGrantRequest{
        Headers: operations.AcceptGrantHeaders{
            XAmzAlgorithm: "quos",
            XAmzContentSha256: "quibusdam",
            XAmzCredential: "est",
            XAmzDate: "qui",
            XAmzSecurityToken: "consequatur",
            XAmzSignature: "laborum",
            XAmzSignedHeaders: "quis",
            XAmzTarget: "AWSLicenseManager.AcceptGrant",
        },
        Request: shared.AcceptGrantRequest{
            GrantArn: "fugiat",
        },
    }
    
    res, err := s.Sdk.AcceptGrant(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptGrantResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AcceptGrant` - Accepts the specified grant.
* `CheckInLicense` - Checks in the specified license. Check in a license when it is no longer in use.
* `CheckoutBorrowLicense` - Checks out the specified license for offline use.
* `CheckoutLicense` - Checks out the specified license.
* `CreateGrant` - Creates a grant for the specified license. A grant shares the use of license entitlements with specific AWS accounts.
* `CreateGrantVersion` - Creates a new version of the specified grant.
* `CreateLicense` - Creates a license.
* `CreateLicenseConfiguration` - <p>Creates a license configuration.</p> <p>A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), license affinity to host (how long a license must be associated with a host), and the number of licenses purchased and used.</p>
* `CreateLicenseManagerReportGenerator` - Creates a new report generator.
* `CreateLicenseVersion` - Creates a new version of the specified license.
* `CreateToken` - <p>Creates a long-lived token.</p> <p>A refresh token is a JWT token used to get an access token. With an access token, you can call AssumeRoleWithWebIdentity to get role credentials that you can use to call License Manager to manage the specified license.</p>
* `DeleteGrant` - Deletes the specified grant.
* `DeleteLicense` - Deletes the specified license.
* `DeleteLicenseConfiguration` - <p>Deletes the specified license configuration.</p> <p>You cannot delete a license configuration that is in use.</p>
* `DeleteLicenseManagerReportGenerator` - <p>Delete an existing report generator.</p> <p>This action deletes the report generator, which stops it from generating future reports and cannot be reversed. However, the previous reports from this generator will remain in your S3 bucket.</p>
* `DeleteToken` - Deletes the specified token. Must be called in the license home Region.
* `ExtendLicenseConsumption` - Extends the expiration date for license consumption.
* `GetAccessToken` - Gets a temporary access token to use with AssumeRoleWithWebIdentity. Access tokens are valid for one hour.
* `GetGrant` - Gets detailed information about the specified grant.
* `GetLicense` - Gets detailed information about the specified license.
* `GetLicenseConfiguration` - Gets detailed information about the specified license configuration.
* `GetLicenseManagerReportGenerator` - Gets information on the specified report generator.
* `GetLicenseUsage` - Gets detailed information about the usage of the specified license.
* `GetServiceSettings` - Gets the License Manager settings for the current Region.
* `ListAssociationsForLicenseConfiguration` - <p>Lists the resource associations for the specified license configuration.</p> <p>Resource associations need not consume licenses from a license configuration. For example, an AMI or a stopped instance might not consume a license (depending on the license rules).</p>
* `ListDistributedGrants` - Lists the grants distributed for the specified license.
* `ListFailuresForLicenseConfigurationOperations` - Lists the license configuration operations that failed.
* `ListLicenseConfigurations` - Lists the license configurations for your account.
* `ListLicenseManagerReportGenerators` - Lists the report generators for your account.
* `ListLicenseSpecificationsForResource` - Describes the license configurations for the specified resource.
* `ListLicenseVersions` - Lists all versions of the specified license.
* `ListLicenses` - Lists the licenses for your account.
* `ListReceivedGrants` - Lists grants that are received but not accepted.
* `ListReceivedLicenses` - Lists received licenses.
* `ListResourceInventory` - Lists resources managed using Systems Manager inventory.
* `ListTagsForResource` - Lists the tags for the specified license configuration.
* `ListTokens` - Lists your tokens.
* `ListUsageForLicenseConfiguration` - Lists all license usage records for a license configuration, displaying license consumption details by resource at a selected point in time. Use this action to audit the current license consumption for any license inventory and configuration.
* `RejectGrant` - Rejects the specified grant.
* `TagResource` - Adds the specified tags to the specified license configuration.
* `UntagResource` - Removes the specified tags from the specified license configuration.
* `UpdateLicenseConfiguration` - Modifies the attributes of an existing license configuration.
* `UpdateLicenseManagerReportGenerator` - <p>Updates a report generator.</p> <p>After you make changes to a report generator, it will start generating new reports within 60 minutes of being updated.</p>
* `UpdateLicenseSpecificationsForResource` - <p>Adds or removes the specified license configurations for the specified AWS resource.</p> <p>You can update the license specifications of AMIs, instances, and hosts. You cannot update the license specifications for launch templates and AWS CloudFormation templates, as they send license configurations to the operation that creates the resource.</p>
* `UpdateServiceSettings` - Updates License Manager settings for the current Region.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
