# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.AcceptGrantRequest(
    headers=operations.AcceptGrantHeaders(
        x_amz_algorithm="quos",
        x_amz_content_sha256="quibusdam",
        x_amz_credential="est",
        x_amz_date="qui",
        x_amz_security_token="consequatur",
        x_amz_signature="laborum",
        x_amz_signed_headers="quis",
        x_amz_target="AWSLicenseManager.AcceptGrant",
    ),
    request=shared.AcceptGrantRequest(
        grant_arn="fugiat",
    ),
)
    
res = s.sdk.accept_grant(req)

if res.accept_grant_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `accept_grant` - Accepts the specified grant.
* `check_in_license` - Checks in the specified license. Check in a license when it is no longer in use.
* `checkout_borrow_license` - Checks out the specified license for offline use.
* `checkout_license` - Checks out the specified license.
* `create_grant` - Creates a grant for the specified license. A grant shares the use of license entitlements with specific AWS accounts.
* `create_grant_version` - Creates a new version of the specified grant.
* `create_license` - Creates a license.
* `create_license_configuration` - <p>Creates a license configuration.</p> <p>A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), license affinity to host (how long a license must be associated with a host), and the number of licenses purchased and used.</p>
* `create_license_manager_report_generator` - Creates a new report generator.
* `create_license_version` - Creates a new version of the specified license.
* `create_token` - <p>Creates a long-lived token.</p> <p>A refresh token is a JWT token used to get an access token. With an access token, you can call AssumeRoleWithWebIdentity to get role credentials that you can use to call License Manager to manage the specified license.</p>
* `delete_grant` - Deletes the specified grant.
* `delete_license` - Deletes the specified license.
* `delete_license_configuration` - <p>Deletes the specified license configuration.</p> <p>You cannot delete a license configuration that is in use.</p>
* `delete_license_manager_report_generator` - <p>Delete an existing report generator.</p> <p>This action deletes the report generator, which stops it from generating future reports and cannot be reversed. However, the previous reports from this generator will remain in your S3 bucket.</p>
* `delete_token` - Deletes the specified token. Must be called in the license home Region.
* `extend_license_consumption` - Extends the expiration date for license consumption.
* `get_access_token` - Gets a temporary access token to use with AssumeRoleWithWebIdentity. Access tokens are valid for one hour.
* `get_grant` - Gets detailed information about the specified grant.
* `get_license` - Gets detailed information about the specified license.
* `get_license_configuration` - Gets detailed information about the specified license configuration.
* `get_license_manager_report_generator` - Gets information on the specified report generator.
* `get_license_usage` - Gets detailed information about the usage of the specified license.
* `get_service_settings` - Gets the License Manager settings for the current Region.
* `list_associations_for_license_configuration` - <p>Lists the resource associations for the specified license configuration.</p> <p>Resource associations need not consume licenses from a license configuration. For example, an AMI or a stopped instance might not consume a license (depending on the license rules).</p>
* `list_distributed_grants` - Lists the grants distributed for the specified license.
* `list_failures_for_license_configuration_operations` - Lists the license configuration operations that failed.
* `list_license_configurations` - Lists the license configurations for your account.
* `list_license_manager_report_generators` - Lists the report generators for your account.
* `list_license_specifications_for_resource` - Describes the license configurations for the specified resource.
* `list_license_versions` - Lists all versions of the specified license.
* `list_licenses` - Lists the licenses for your account.
* `list_received_grants` - Lists grants that are received but not accepted.
* `list_received_licenses` - Lists received licenses.
* `list_resource_inventory` - Lists resources managed using Systems Manager inventory.
* `list_tags_for_resource` - Lists the tags for the specified license configuration.
* `list_tokens` - Lists your tokens.
* `list_usage_for_license_configuration` - Lists all license usage records for a license configuration, displaying license consumption details by resource at a selected point in time. Use this action to audit the current license consumption for any license inventory and configuration.
* `reject_grant` - Rejects the specified grant.
* `tag_resource` - Adds the specified tags to the specified license configuration.
* `untag_resource` - Removes the specified tags from the specified license configuration.
* `update_license_configuration` - Modifies the attributes of an existing license configuration.
* `update_license_manager_report_generator` - <p>Updates a report generator.</p> <p>After you make changes to a report generator, it will start generating new reports within 60 minutes of being updated.</p>
* `update_license_specifications_for_resource` - <p>Adds or removes the specified license configurations for the specified AWS resource.</p> <p>You can update the license specifications of AMIs, instances, and hosts. You cannot update the license specifications for launch templates and AWS CloudFormation templates, as they send license configurations to the operation that creates the resource.</p>
* `update_service_settings` - Updates License Manager settings for the current Region.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
