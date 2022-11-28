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
    
    req := operations.AssociateDelegateToResourceRequest{
        Headers: operations.AssociateDelegateToResourceHeaders{
            XAmzAlgorithm: "velit",
            XAmzContentSha256: "consequatur",
            XAmzCredential: "reiciendis",
            XAmzDate: "perspiciatis",
            XAmzSecurityToken: "labore",
            XAmzSignature: "earum",
            XAmzSignedHeaders: "perferendis",
            XAmzTarget: "WorkMailService.AssociateDelegateToResource",
        },
        Request: shared.AssociateDelegateToResourceRequest{
            EntityID: "adipisci",
            OrganizationID: "quos",
            ResourceID: "odit",
        },
    }
    
    res, err := s.Sdk.AssociateDelegateToResource(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateDelegateToResourceResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AssociateDelegateToResource` - Adds a member (user or group) to the resource's set of delegates.
* `AssociateMemberToGroup` - Adds a member (user or group) to the group's set.
* `CancelMailboxExportJob` - <p>Cancels a mailbox export job.</p> <note> <p>If the mailbox export job is near completion, it might not be possible to cancel it.</p> </note>
* `CreateAlias` - Adds an alias to the set of a given member (user or group) of Amazon WorkMail.
* `CreateGroup` - Creates a group that can be used in Amazon WorkMail by calling the <a>RegisterToWorkMail</a> operation.
* `CreateMobileDeviceAccessRule` - Creates a new mobile device access rule for the specified Amazon WorkMail organization.
* `CreateOrganization` - <p>Creates a new Amazon WorkMail organization. Optionally, you can choose to associate an existing AWS Directory Service directory with your organization. If an AWS Directory Service directory ID is specified, the organization alias must match the directory alias. If you choose not to associate an existing directory with your organization, then we create a new Amazon WorkMail directory for you. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html">Adding an organization</a> in the <i>Amazon WorkMail Administrator Guide</i>.</p> <p>You can associate multiple email domains with an organization, then set your default email domain from the Amazon WorkMail console. You can also associate a domain that is managed in an Amazon Route 53 public hosted zone. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> and <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/default_domain.html">Choosing the default domain</a> in the <i>Amazon WorkMail Administrator Guide</i>.</p> <p>Optionally, you can use a customer managed master key from AWS Key Management Service (AWS KMS) to encrypt email for your organization. If you don't associate an AWS KMS key, Amazon WorkMail creates a default AWS managed master key for you.</p>
* `CreateResource` - Creates a new Amazon WorkMail resource. 
* `CreateUser` - Creates a user who can be used in Amazon WorkMail by calling the <a>RegisterToWorkMail</a> operation.
* `DeleteAccessControlRule` - Deletes an access control rule for the specified WorkMail organization.
* `DeleteAlias` - Remove one or more specified aliases from a set of aliases for a given user.
* `DeleteGroup` - Deletes a group from Amazon WorkMail.
* `DeleteMailboxPermissions` - Deletes permissions granted to a member (user or group).
* `DeleteMobileDeviceAccessRule` - Deletes a mobile device access rule for the specified Amazon WorkMail organization.
* `DeleteOrganization` - Deletes an Amazon WorkMail organization and all underlying AWS resources managed by Amazon WorkMail as part of the organization. You can choose whether to delete the associated directory. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/remove_organization.html">Removing an organization</a> in the <i>Amazon WorkMail Administrator Guide</i>.
* `DeleteResource` - Deletes the specified resource. 
* `DeleteRetentionPolicy` - Deletes the specified retention policy from the specified organization.
* `DeleteUser` - <p>Deletes a user from Amazon WorkMail and all subsequent systems. Before you can delete a user, the user state must be <code>DISABLED</code>. Use the <a>DescribeUser</a> action to confirm the user state.</p> <p>Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for 30 days before they are permanently removed.</p>
* `DeregisterFromWorkMail` - Mark a user, group, or resource as no longer used in Amazon WorkMail. This action disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days before they are permanently removed. The functionality in the console is <i>Disable</i>.
* `DescribeGroup` - Returns the data available for the group.
* `DescribeMailboxExportJob` - Describes the current status of a mailbox export job.
* `DescribeOrganization` - Provides more information regarding a given organization based on its identifier.
* `DescribeResource` - Returns the data available for the resource.
* `DescribeUser` - Provides information regarding the user.
* `DisassociateDelegateFromResource` - Removes a member from the resource's set of delegates.
* `DisassociateMemberFromGroup` - Removes a member from a group.
* `GetAccessControlEffect` - Gets the effects of an organization's access control rules as they apply to a specified IPv4 address, access protocol action, or user ID. 
* `GetDefaultRetentionPolicy` - Gets the default retention policy details for the specified organization.
* `GetMailboxDetails` - Requests a user's mailbox details for a specified organization and user.
* `GetMobileDeviceAccessEffect` - Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access rules for the Amazon WorkMail organization for a particular user's attributes.
* `ListAccessControlRules` - Lists the access control rules for the specified organization.
* `ListAliases` - Creates a paginated call to list the aliases associated with a given entity.
* `ListGroupMembers` - Returns an overview of the members of a group. Users and groups can be members of a group.
* `ListGroups` - Returns summaries of the organization's groups.
* `ListMailboxExportJobs` - Lists the mailbox export jobs started for the specified organization within the last seven days.
* `ListMailboxPermissions` - Lists the mailbox permissions associated with a user, group, or resource mailbox.
* `ListMobileDeviceAccessRules` - Lists the mobile device access rules for the specified Amazon WorkMail organization.
* `ListOrganizations` - Returns summaries of the customer's organizations.
* `ListResourceDelegates` - Lists the delegates associated with a resource. Users and groups can be resource delegates and answer requests on behalf of the resource.
* `ListResources` - Returns summaries of the organization's resources.
* `ListTagsForResource` - Lists the tags applied to an Amazon WorkMail organization resource.
* `ListUsers` - Returns summaries of the organization's users.
* `PutAccessControlRule` - Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, and user IDs. Adding a new rule with the same name as an existing rule replaces the older rule.
* `PutMailboxPermissions` - Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.
* `PutRetentionPolicy` - Puts a retention policy to the specified organization.
* `RegisterToWorkMail` - <p>Registers an existing and disabled user, group, or resource for Amazon WorkMail use by associating a mailbox and calendaring capabilities. It performs no change if the user, group, or resource is enabled and fails if the user, group, or resource is deleted. This operation results in the accumulation of costs. For more information, see <a href="https://aws.amazon.com/workmail/pricing">Pricing</a>. The equivalent console functionality for this operation is <i>Enable</i>. </p> <p>Users can either be created by calling the <a>CreateUser</a> API operation or they can be synchronized from your directory. For more information, see <a>DeregisterFromWorkMail</a>.</p>
* `ResetPassword` - Allows the administrator to reset the password for a user.
* `StartMailboxExportJob` - Starts a mailbox export job to export MIME-format email messages and calendar items from the specified mailbox to the specified Amazon Simple Storage Service (Amazon S3) bucket. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/mail-export.html">Exporting mailbox content</a> in the <i>Amazon WorkMail Administrator Guide</i>.
* `TagResource` - Applies the specified tags to the specified Amazon WorkMail organization resource.
* `UntagResource` - Untags the specified tags from the specified Amazon WorkMail organization resource.
* `UpdateMailboxQuota` - Updates a user's current mailbox quota for a specified organization and user.
* `UpdateMobileDeviceAccessRule` - Updates a mobile device access rule for the specified Amazon WorkMail organization.
* `UpdatePrimaryEmailAddress` - Updates the primary email for a user, group, or resource. The current email is moved into the list of aliases (or swapped between an existing alias and the current primary email), and the email provided in the input is promoted as the primary.
* `UpdateResource` - Updates data for the resource. To have the latest information, it must be preceded by a <a>DescribeResource</a> call. The dataset in the request should be the one expected when performing another <code>DescribeResource</code> call.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
