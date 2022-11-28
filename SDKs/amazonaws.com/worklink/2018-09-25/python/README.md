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
    
req = operations.AssociateDomainRequest(
    headers=operations.AssociateDomainHeaders(
        x_amz_algorithm="suscipit",
        x_amz_content_sha256="laudantium",
        x_amz_credential="in",
        x_amz_date="dicta",
        x_amz_security_token="dolorem",
        x_amz_signature="nulla",
        x_amz_signed_headers="reiciendis",
    ),
    request=operations.AssociateDomainRequestBody(
        acm_certificate_arn="qui",
        display_name="fuga",
        domain_name="sed",
        fleet_arn="sed",
    ),
)
    
res = s.sdk.associate_domain(req)

if res.associate_domain_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `associate_domain` - Specifies a domain to be associated to Amazon WorkLink.
* `associate_website_authorization_provider` - Associates a website authorization provider with a specified fleet. This is used to authorize users against associated websites in the company network.
* `associate_website_certificate_authority` - Imports the root certificate of a certificate authority (CA) used to obtain TLS certificates used by associated websites within the company network.
* `create_fleet` - Creates a fleet. A fleet consists of resources and the configuration that delivers associated websites to authorized users who download and set up the Amazon WorkLink app.
* `delete_fleet` - Deletes a fleet. Prevents users from accessing previously associated websites. 
* `describe_audit_stream_configuration` - Describes the configuration for delivering audit streams to the customer account.
* `describe_company_network_configuration` - Describes the networking configuration to access the internal websites associated with the specified fleet.
* `describe_device` - Provides information about a user's device.
* `describe_device_policy_configuration` - Describes the device policy configuration for the specified fleet.
* `describe_domain` - Provides information about the domain.
* `describe_fleet_metadata` - Provides basic information for the specified fleet, excluding identity provider, networking, and device configuration details.
* `describe_identity_provider_configuration` - Describes the identity provider configuration of the specified fleet.
* `describe_website_certificate_authority` - Provides information about the certificate authority.
* `disassociate_domain` - Disassociates a domain from Amazon WorkLink. End users lose the ability to access the domain with Amazon WorkLink. 
* `disassociate_website_authorization_provider` - Disassociates a website authorization provider from a specified fleet. After the disassociation, users can't load any associated websites that require this authorization provider.
* `disassociate_website_certificate_authority` - Removes a certificate authority (CA).
* `list_devices` - Retrieves a list of devices registered with the specified fleet.
* `list_domains` - Retrieves a list of domains associated to a specified fleet.
* `list_fleets` - Retrieves a list of fleets for the current account and Region.
* `list_tags_for_resource` - Retrieves a list of tags for the specified resource.
* `list_website_authorization_providers` - Retrieves a list of website authorization providers associated with a specified fleet.
* `list_website_certificate_authorities` - Retrieves a list of certificate authorities added for the current account and Region.
* `restore_domain_access` - Moves a domain to ACTIVE status if it was in the INACTIVE status.
* `revoke_domain_access` - Moves a domain to INACTIVE status if it was in the ACTIVE status.
* `sign_out_user` - Signs the user out from all of their devices. The user can sign in again if they have valid credentials.
* `tag_resource` - Adds or overwrites one or more tags for the specified resource, such as a fleet. Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.
* `untag_resource` - Removes one or more tags from the specified resource.
* `update_audit_stream_configuration` - Updates the audit stream configuration for the fleet.
* `update_company_network_configuration` - Updates the company network configuration for the fleet.
* `update_device_policy_configuration` - Updates the device policy configuration for the fleet.
* `update_domain_metadata` - Updates domain metadata, such as DisplayName.
* `update_fleet_metadata` - Updates fleet metadata, such as DisplayName.
* `update_identity_provider_configuration` - Updates the identity provider configuration for the fleet.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
