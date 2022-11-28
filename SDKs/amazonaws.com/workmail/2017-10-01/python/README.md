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
    
req = operations.AssociateDelegateToResourceRequest(
    headers=operations.AssociateDelegateToResourceHeaders(
        x_amz_algorithm="velit",
        x_amz_content_sha256="consequatur",
        x_amz_credential="reiciendis",
        x_amz_date="perspiciatis",
        x_amz_security_token="labore",
        x_amz_signature="earum",
        x_amz_signed_headers="perferendis",
        x_amz_target="WorkMailService.AssociateDelegateToResource",
    ),
    request=shared.AssociateDelegateToResourceRequest(
        entity_id="adipisci",
        organization_id="quos",
        resource_id="odit",
    ),
)
    
res = s.sdk.associate_delegate_to_resource(req)

if res.associate_delegate_to_resource_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `associate_delegate_to_resource` - Adds a member (user or group) to the resource's set of delegates.
* `associate_member_to_group` - Adds a member (user or group) to the group's set.
* `cancel_mailbox_export_job` - <p>Cancels a mailbox export job.</p> <note> <p>If the mailbox export job is near completion, it might not be possible to cancel it.</p> </note>
* `create_alias` - Adds an alias to the set of a given member (user or group) of Amazon WorkMail.
* `create_group` - Creates a group that can be used in Amazon WorkMail by calling the <a>RegisterToWorkMail</a> operation.
* `create_mobile_device_access_rule` - Creates a new mobile device access rule for the specified Amazon WorkMail organization.
* `create_organization` - <p>Creates a new Amazon WorkMail organization. Optionally, you can choose to associate an existing AWS Directory Service directory with your organization. If an AWS Directory Service directory ID is specified, the organization alias must match the directory alias. If you choose not to associate an existing directory with your organization, then we create a new Amazon WorkMail directory for you. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html">Adding an organization</a> in the <i>Amazon WorkMail Administrator Guide</i>.</p> <p>You can associate multiple email domains with an organization, then set your default email domain from the Amazon WorkMail console. You can also associate a domain that is managed in an Amazon Route 53 public hosted zone. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> and <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/default_domain.html">Choosing the default domain</a> in the <i>Amazon WorkMail Administrator Guide</i>.</p> <p>Optionally, you can use a customer managed master key from AWS Key Management Service (AWS KMS) to encrypt email for your organization. If you don't associate an AWS KMS key, Amazon WorkMail creates a default AWS managed master key for you.</p>
* `create_resource` - Creates a new Amazon WorkMail resource. 
* `create_user` - Creates a user who can be used in Amazon WorkMail by calling the <a>RegisterToWorkMail</a> operation.
* `delete_access_control_rule` - Deletes an access control rule for the specified WorkMail organization.
* `delete_alias` - Remove one or more specified aliases from a set of aliases for a given user.
* `delete_group` - Deletes a group from Amazon WorkMail.
* `delete_mailbox_permissions` - Deletes permissions granted to a member (user or group).
* `delete_mobile_device_access_rule` - Deletes a mobile device access rule for the specified Amazon WorkMail organization.
* `delete_organization` - Deletes an Amazon WorkMail organization and all underlying AWS resources managed by Amazon WorkMail as part of the organization. You can choose whether to delete the associated directory. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/remove_organization.html">Removing an organization</a> in the <i>Amazon WorkMail Administrator Guide</i>.
* `delete_resource` - Deletes the specified resource. 
* `delete_retention_policy` - Deletes the specified retention policy from the specified organization.
* `delete_user` - <p>Deletes a user from Amazon WorkMail and all subsequent systems. Before you can delete a user, the user state must be <code>DISABLED</code>. Use the <a>DescribeUser</a> action to confirm the user state.</p> <p>Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for 30 days before they are permanently removed.</p>
* `deregister_from_work_mail` - Mark a user, group, or resource as no longer used in Amazon WorkMail. This action disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days before they are permanently removed. The functionality in the console is <i>Disable</i>.
* `describe_group` - Returns the data available for the group.
* `describe_mailbox_export_job` - Describes the current status of a mailbox export job.
* `describe_organization` - Provides more information regarding a given organization based on its identifier.
* `describe_resource` - Returns the data available for the resource.
* `describe_user` - Provides information regarding the user.
* `disassociate_delegate_from_resource` - Removes a member from the resource's set of delegates.
* `disassociate_member_from_group` - Removes a member from a group.
* `get_access_control_effect` - Gets the effects of an organization's access control rules as they apply to a specified IPv4 address, access protocol action, or user ID. 
* `get_default_retention_policy` - Gets the default retention policy details for the specified organization.
* `get_mailbox_details` - Requests a user's mailbox details for a specified organization and user.
* `get_mobile_device_access_effect` - Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access rules for the Amazon WorkMail organization for a particular user's attributes.
* `list_access_control_rules` - Lists the access control rules for the specified organization.
* `list_aliases` - Creates a paginated call to list the aliases associated with a given entity.
* `list_group_members` - Returns an overview of the members of a group. Users and groups can be members of a group.
* `list_groups` - Returns summaries of the organization's groups.
* `list_mailbox_export_jobs` - Lists the mailbox export jobs started for the specified organization within the last seven days.
* `list_mailbox_permissions` - Lists the mailbox permissions associated with a user, group, or resource mailbox.
* `list_mobile_device_access_rules` - Lists the mobile device access rules for the specified Amazon WorkMail organization.
* `list_organizations` - Returns summaries of the customer's organizations.
* `list_resource_delegates` - Lists the delegates associated with a resource. Users and groups can be resource delegates and answer requests on behalf of the resource.
* `list_resources` - Returns summaries of the organization's resources.
* `list_tags_for_resource` - Lists the tags applied to an Amazon WorkMail organization resource.
* `list_users` - Returns summaries of the organization's users.
* `put_access_control_rule` - Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, and user IDs. Adding a new rule with the same name as an existing rule replaces the older rule.
* `put_mailbox_permissions` - Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.
* `put_retention_policy` - Puts a retention policy to the specified organization.
* `register_to_work_mail` - <p>Registers an existing and disabled user, group, or resource for Amazon WorkMail use by associating a mailbox and calendaring capabilities. It performs no change if the user, group, or resource is enabled and fails if the user, group, or resource is deleted. This operation results in the accumulation of costs. For more information, see <a href="https://aws.amazon.com/workmail/pricing">Pricing</a>. The equivalent console functionality for this operation is <i>Enable</i>. </p> <p>Users can either be created by calling the <a>CreateUser</a> API operation or they can be synchronized from your directory. For more information, see <a>DeregisterFromWorkMail</a>.</p>
* `reset_password` - Allows the administrator to reset the password for a user.
* `start_mailbox_export_job` - Starts a mailbox export job to export MIME-format email messages and calendar items from the specified mailbox to the specified Amazon Simple Storage Service (Amazon S3) bucket. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/mail-export.html">Exporting mailbox content</a> in the <i>Amazon WorkMail Administrator Guide</i>.
* `tag_resource` - Applies the specified tags to the specified Amazon WorkMail organization resource.
* `untag_resource` - Untags the specified tags from the specified Amazon WorkMail organization resource.
* `update_mailbox_quota` - Updates a user's current mailbox quota for a specified organization and user.
* `update_mobile_device_access_rule` - Updates a mobile device access rule for the specified Amazon WorkMail organization.
* `update_primary_email_address` - Updates the primary email for a user, group, or resource. The current email is moved into the list of aliases (or swapped between an existing alias and the current primary email), and the email provided in the input is promoted as the primary.
* `update_resource` - Updates data for the resource. To have the latest information, it must be preceded by a <a>DescribeResource</a> call. The dataset in the request should be the one expected when performing another <code>DescribeResource</code> call.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
