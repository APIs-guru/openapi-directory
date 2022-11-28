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
import { AssociateDelegateToResourceRequest, AssociateDelegateToResourceResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AssociateDelegateToResourceRequest = {
  headers: {
    xAmzAlgorithm: "velit",
    xAmzContentSha256: "consequatur",
    xAmzCredential: "reiciendis",
    xAmzDate: "perspiciatis",
    xAmzSecurityToken: "labore",
    xAmzSignature: "earum",
    xAmzSignedHeaders: "perferendis",
    xAmzTarget: "WorkMailService.AssociateDelegateToResource",
  },
  request: {
    entityId: "adipisci",
    organizationId: "quos",
    resourceId: "odit",
  },
};

sdk.sdk.associateDelegateToResource(req).then((res: AssociateDelegateToResourceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `associateDelegateToResource` - Adds a member (user or group) to the resource's set of delegates.
* `associateMemberToGroup` - Adds a member (user or group) to the group's set.
* `cancelMailboxExportJob` - <p>Cancels a mailbox export job.</p> <note> <p>If the mailbox export job is near completion, it might not be possible to cancel it.</p> </note>
* `createAlias` - Adds an alias to the set of a given member (user or group) of Amazon WorkMail.
* `createGroup` - Creates a group that can be used in Amazon WorkMail by calling the <a>RegisterToWorkMail</a> operation.
* `createMobileDeviceAccessRule` - Creates a new mobile device access rule for the specified Amazon WorkMail organization.
* `createOrganization` - <p>Creates a new Amazon WorkMail organization. Optionally, you can choose to associate an existing AWS Directory Service directory with your organization. If an AWS Directory Service directory ID is specified, the organization alias must match the directory alias. If you choose not to associate an existing directory with your organization, then we create a new Amazon WorkMail directory for you. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html">Adding an organization</a> in the <i>Amazon WorkMail Administrator Guide</i>.</p> <p>You can associate multiple email domains with an organization, then set your default email domain from the Amazon WorkMail console. You can also associate a domain that is managed in an Amazon Route 53 public hosted zone. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> and <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/default_domain.html">Choosing the default domain</a> in the <i>Amazon WorkMail Administrator Guide</i>.</p> <p>Optionally, you can use a customer managed master key from AWS Key Management Service (AWS KMS) to encrypt email for your organization. If you don't associate an AWS KMS key, Amazon WorkMail creates a default AWS managed master key for you.</p>
* `createResource` - Creates a new Amazon WorkMail resource. 
* `createUser` - Creates a user who can be used in Amazon WorkMail by calling the <a>RegisterToWorkMail</a> operation.
* `deleteAccessControlRule` - Deletes an access control rule for the specified WorkMail organization.
* `deleteAlias` - Remove one or more specified aliases from a set of aliases for a given user.
* `deleteGroup` - Deletes a group from Amazon WorkMail.
* `deleteMailboxPermissions` - Deletes permissions granted to a member (user or group).
* `deleteMobileDeviceAccessRule` - Deletes a mobile device access rule for the specified Amazon WorkMail organization.
* `deleteOrganization` - Deletes an Amazon WorkMail organization and all underlying AWS resources managed by Amazon WorkMail as part of the organization. You can choose whether to delete the associated directory. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/remove_organization.html">Removing an organization</a> in the <i>Amazon WorkMail Administrator Guide</i>.
* `deleteResource` - Deletes the specified resource. 
* `deleteRetentionPolicy` - Deletes the specified retention policy from the specified organization.
* `deleteUser` - <p>Deletes a user from Amazon WorkMail and all subsequent systems. Before you can delete a user, the user state must be <code>DISABLED</code>. Use the <a>DescribeUser</a> action to confirm the user state.</p> <p>Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for 30 days before they are permanently removed.</p>
* `deregisterFromWorkMail` - Mark a user, group, or resource as no longer used in Amazon WorkMail. This action disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days before they are permanently removed. The functionality in the console is <i>Disable</i>.
* `describeGroup` - Returns the data available for the group.
* `describeMailboxExportJob` - Describes the current status of a mailbox export job.
* `describeOrganization` - Provides more information regarding a given organization based on its identifier.
* `describeResource` - Returns the data available for the resource.
* `describeUser` - Provides information regarding the user.
* `disassociateDelegateFromResource` - Removes a member from the resource's set of delegates.
* `disassociateMemberFromGroup` - Removes a member from a group.
* `getAccessControlEffect` - Gets the effects of an organization's access control rules as they apply to a specified IPv4 address, access protocol action, or user ID. 
* `getDefaultRetentionPolicy` - Gets the default retention policy details for the specified organization.
* `getMailboxDetails` - Requests a user's mailbox details for a specified organization and user.
* `getMobileDeviceAccessEffect` - Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access rules for the Amazon WorkMail organization for a particular user's attributes.
* `listAccessControlRules` - Lists the access control rules for the specified organization.
* `listAliases` - Creates a paginated call to list the aliases associated with a given entity.
* `listGroupMembers` - Returns an overview of the members of a group. Users and groups can be members of a group.
* `listGroups` - Returns summaries of the organization's groups.
* `listMailboxExportJobs` - Lists the mailbox export jobs started for the specified organization within the last seven days.
* `listMailboxPermissions` - Lists the mailbox permissions associated with a user, group, or resource mailbox.
* `listMobileDeviceAccessRules` - Lists the mobile device access rules for the specified Amazon WorkMail organization.
* `listOrganizations` - Returns summaries of the customer's organizations.
* `listResourceDelegates` - Lists the delegates associated with a resource. Users and groups can be resource delegates and answer requests on behalf of the resource.
* `listResources` - Returns summaries of the organization's resources.
* `listTagsForResource` - Lists the tags applied to an Amazon WorkMail organization resource.
* `listUsers` - Returns summaries of the organization's users.
* `putAccessControlRule` - Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, and user IDs. Adding a new rule with the same name as an existing rule replaces the older rule.
* `putMailboxPermissions` - Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.
* `putRetentionPolicy` - Puts a retention policy to the specified organization.
* `registerToWorkMail` - <p>Registers an existing and disabled user, group, or resource for Amazon WorkMail use by associating a mailbox and calendaring capabilities. It performs no change if the user, group, or resource is enabled and fails if the user, group, or resource is deleted. This operation results in the accumulation of costs. For more information, see <a href="https://aws.amazon.com/workmail/pricing">Pricing</a>. The equivalent console functionality for this operation is <i>Enable</i>. </p> <p>Users can either be created by calling the <a>CreateUser</a> API operation or they can be synchronized from your directory. For more information, see <a>DeregisterFromWorkMail</a>.</p>
* `resetPassword` - Allows the administrator to reset the password for a user.
* `startMailboxExportJob` - Starts a mailbox export job to export MIME-format email messages and calendar items from the specified mailbox to the specified Amazon Simple Storage Service (Amazon S3) bucket. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/mail-export.html">Exporting mailbox content</a> in the <i>Amazon WorkMail Administrator Guide</i>.
* `tagResource` - Applies the specified tags to the specified Amazon WorkMail organization resource.
* `untagResource` - Untags the specified tags from the specified Amazon WorkMail organization resource.
* `updateMailboxQuota` - Updates a user's current mailbox quota for a specified organization and user.
* `updateMobileDeviceAccessRule` - Updates a mobile device access rule for the specified Amazon WorkMail organization.
* `updatePrimaryEmailAddress` - Updates the primary email for a user, group, or resource. The current email is moved into the list of aliases (or swapped between an existing alias and the current primary email), and the email provided in the input is promoted as the primary.
* `updateResource` - Updates data for the resource. To have the latest information, it must be preceded by a <a>DescribeResource</a> call. The dataset in the request should be the one expected when performing another <code>DescribeResource</code> call.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
