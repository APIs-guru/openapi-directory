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
import { GetActionNotificationExportResultsRequest, GetActionNotificationExportResultsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetActionNotificationExportResultsRequest = {
  queryParams: {
    actionNotificationExportId: 763388924383789986,
    cursor: "molestiae",
    perPage: 8246720065789982806,
    userId: 252123505414078850,
  },
};

sdk.actionNotificationExportResults.getActionNotificationExportResults(req).then((res: GetActionNotificationExportResultsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### action_notification_export_results

* `getActionNotificationExportResults` - List Action Notification Export Results

### action_notification_exports

* `getActionNotificationExportsId` - Show Action Notification Export
* `postActionNotificationExports` - Create Action Notification Export

### action_webhook_failures

* `postActionWebhookFailuresIdRetry` - retry Action Webhook Failure

### api_key

* `apiKeyDeleteCurrent` - Delete current API key.  (Requires current API connection to be using an API key.)
* `apiKeyFindCurrent` - Show information about current API key.  (Requires current API connection to be using an API key.)
* `apiKeyUpdateCurrent` - Update current API key.  (Requires current API connection to be using an API key.)

### api_keys

* `deleteApiKeysId` - Delete Api Key
* `getApiKeys` - List Api Keys
* `getApiKeysId` - Show Api Key
* `patchApiKeysId` - Update Api Key
* `postApiKeys` - Create Api Key

### apps

* `getApps` - List Apps

### as2_keys

* `deleteAs2KeysId` - Delete As2 Key
* `getAs2Keys` - List As2 Keys
* `getAs2KeysId` - Show As2 Key
* `patchAs2KeysId` - Update As2 Key
* `postAs2Keys` - Create As2 Key

### automations

* `deleteAutomationsId` - Delete Automation
* `getAutomations` - List Automations
* `getAutomationsId` - Show Automation
* `patchAutomationsId` - Update Automation
* `postAutomations` - Create Automation

### bandwidth_snapshots

* `getBandwidthSnapshots` - List Bandwidth Snapshots

### behaviors

* `behaviorListForPath` - List Behaviors by path
* `deleteBehaviorsId` - Delete Behavior
* `getBehaviors` - List Behaviors
* `getBehaviorsId` - Show Behavior
* `patchBehaviorsId` - Update Behavior
* `postBehaviors` - Create Behavior
* `postBehaviorsWebhookTest` - Test webhook.

### bundle_downloads

* `getBundleDownloads` - List Bundle Downloads

### bundle_recipients

* `getBundleRecipients` - List Bundle Recipients
* `postBundleRecipients` - Create Bundle Recipient

### bundle_registrations

* `getBundleRegistrations` - List Bundle Registrations

### bundles

* `deleteBundlesId` - Delete Bundle
* `getBundles` - List Bundles
* `getBundlesId` - Show Bundle
* `patchBundlesId` - Update Bundle
* `postBundles` - Create Bundle
* `postBundlesIdShare` - Send email(s) with a link to bundle

### clickwraps

* `deleteClickwrapsId` - Delete Clickwrap
* `getClickwraps` - List Clickwraps
* `getClickwrapsId` - Show Clickwrap
* `patchClickwrapsId` - Update Clickwrap
* `postClickwraps` - Create Clickwrap

### dns_records

* `getDnsRecords` - Show site DNS configuration.

### external_events

* `getExternalEvents` - List External Events
* `getExternalEventsId` - Show External Event
* `postExternalEvents` - Create External Event

### file_actions

* `fileActionBeginUpload` - Begin file upload
* `fileActionCopy` - Copy file/folder
* `fileActionMetadata` - Return metadata for file/folder
* `fileActionMove` - Move file/folder

### file_comment_reactions

* `deleteFileCommentReactionsId` - Delete File Comment Reaction
* `postFileCommentReactions` - Create File Comment Reaction

### file_comments

* `deleteFileCommentsId` - Delete File Comment
* `fileCommentListForPath` - List File Comments by path
* `patchFileCommentsId` - Update File Comment
* `postFileComments` - Create File Comment

### file_migrations

* `getFileMigrationsId` - Show File Migration

### files

* `deleteFilesPath` - Delete file/folder
* `fileDownload` - Download file
* `patchFilesPath` - Update file/folder metadata
* `postFilesPath` - Upload file

### folders

* `folderListForPath` - List Folders by path
* `postFoldersPath` - Create folder

### form_field_sets

* `deleteFormFieldSetsId` - Delete Form Field Set
* `getFormFieldSets` - List Form Field Sets
* `getFormFieldSetsId` - Show Form Field Set

### group_users

* `deleteGroupUsersId` - Delete Group User
* `getGroupUsers` - List Group Users
* `patchGroupUsersId` - Update Group User
* `postGroupUsers` - Create Group User

### groups

* `deleteGroupsGroupIdMembershipsUserId` - Delete Group User
* `deleteGroupsId` - Delete Group
* `getGroups` - List Groups
* `getGroupsGroupIdPermissions` - List Permissions
* `getGroupsGroupIdUsers` - List Group Users
* `getGroupsId` - Show Group
* `patchGroupsGroupIdMembershipsUserId` - Update Group User
* `patchGroupsId` - Update Group
* `postGroups` - Create Group
* `postGroupsGroupIdUsers` - Create User

### history

* `historyList` - List site full action history.
* `historyListForFile` - List history for specific file.
* `historyListForFolder` - List history for specific folder.
* `historyListForUser` - List history for specific user.
* `historyListLogins` - List site login history.

### history_export_results

* `getHistoryExportResults` - List History Export Results

### history_exports

* `getHistoryExportsId` - Show History Export
* `postHistoryExports` - Create History Export

### inbox_recipients

* `getInboxRecipients` - List Inbox Recipients
* `postInboxRecipients` - Create Inbox Recipient

### inbox_registrations

* `getInboxRegistrations` - List Inbox Registrations

### inbox_uploads

* `getInboxUploads` - List Inbox Uploads

### invoices

* `getInvoices` - List Invoices
* `getInvoicesId` - Show Invoice

### ip_addresses

* `getIpAddresses` - List IP Addresses associated with the current site
* `getIpAddressesReserved` - List all possible public IP addresses

### locks

* `deleteLocksPath` - Delete Lock
* `lockListForPath` - List Locks by path
* `postLocksPath` - Create Lock

### message_comment_reactions

* `deleteMessageCommentReactionsId` - Delete Message Comment Reaction
* `getMessageCommentReactions` - List Message Comment Reactions
* `getMessageCommentReactionsId` - Show Message Comment Reaction
* `postMessageCommentReactions` - Create Message Comment Reaction

### message_comments

* `deleteMessageCommentsId` - Delete Message Comment
* `getMessageComments` - List Message Comments
* `getMessageCommentsId` - Show Message Comment
* `patchMessageCommentsId` - Update Message Comment
* `postMessageComments` - Create Message Comment

### message_reactions

* `deleteMessageReactionsId` - Delete Message Reaction
* `getMessageReactions` - List Message Reactions
* `getMessageReactionsId` - Show Message Reaction
* `postMessageReactions` - Create Message Reaction

### messages

* `deleteMessagesId` - Delete Message
* `getMessages` - List Messages
* `getMessagesId` - Show Message
* `patchMessagesId` - Update Message
* `postMessages` - Create Message

### notifications

* `deleteNotificationsId` - Delete Notification
* `getNotifications` - List Notifications
* `getNotificationsId` - Show Notification
* `patchNotificationsId` - Update Notification
* `postNotifications` - Create Notification

### payments

* `getPayments` - List Payments
* `getPaymentsId` - Show Payment

### permissions

* `deletePermissionsId` - Delete Permission
* `getPermissions` - List Permissions
* `postPermissions` - Create Permission

### projects

* `deleteProjectsId` - Delete Project
* `getProjects` - List Projects
* `getProjectsId` - Show Project
* `patchProjectsId` - Update Project
* `postProjects` - Create Project

### public_keys

* `deletePublicKeysId` - Delete Public Key
* `getPublicKeys` - List Public Keys
* `getPublicKeysId` - Show Public Key
* `patchPublicKeysId` - Update Public Key
* `postPublicKeys` - Create Public Key

### remote_servers

* `deleteRemoteServersId` - Delete Remote Server
* `getRemoteServers` - List Remote Servers
* `getRemoteServersId` - Show Remote Server
* `patchRemoteServersId` - Update Remote Server
* `postRemoteServers` - Create Remote Server

### requests

* `deleteRequestsId` - Delete Request
* `getRequests` - List Requests
* `getRequestsFoldersPath` - List Requests
* `postRequests` - Create Request

### sessions

* `deleteSessions` - Delete user session (log out)
* `postSessions` - Create user session (log in)

### settings_changes

* `getSettingsChanges` - List Settings Changes

### site

* `getSite` - Show site settings
* `getSiteApiKeys` - List Api Keys
* `getSiteDnsRecords` - Show site DNS configuration.
* `getSiteIpAddresses` - List IP Addresses associated with the current site
* `getSiteUsage` - Get the most recent usage snapshot (usage data for billing purposes) for a Site.
* `patchSite` - Update site settings.
* `postSiteApiKeys` - Create Api Key
* `postSiteTestWebhook` - Test webhook.

### sso_strategies

* `getSsoStrategies` - List Sso Strategies
* `getSsoStrategiesId` - Show Sso Strategy

### styles

* `deleteStylesPath` - Delete Style
* `getStylesPath` - Show Style
* `patchStylesPath` - Update Style

### sync_jobs

* `getSyncJobs` - List Sync Jobs

### usage_daily_snapshots

* `getUsageDailySnapshots` - List Usage Daily Snapshots

### usage_snapshots

* `getUsageSnapshots` - List Usage Snapshots

### user

* `getUserApiKeys` - List Api Keys
* `getUserAs2Keys` - List As2 Keys
* `getUserGroups` - List Group Users
* `getUserPublicKeys` - List Public Keys
* `patchUser` - Update User
* `postUserApiKeys` - Create Api Key
* `postUserAs2Keys` - Create As2 Key
* `postUserPublicKeys` - Create Public Key

### user_cipher_uses

* `getUserCipherUses` - List User Cipher Uses

### user_requests

* `deleteUserRequestsId` - Delete User Request
* `getUserRequests` - List User Requests
* `getUserRequestsId` - Show User Request
* `postUserRequests` - Create User Request

### users

* `deleteUsersId` - Delete User
* `getUsers` - List Users
* `getUsersId` - Show User
* `getUsersUserIdApiKeys` - List Api Keys
* `getUsersUserIdAs2Keys` - List As2 Keys
* `getUsersUserIdCipherUses` - List User Cipher Uses
* `getUsersUserIdGroups` - List Group Users
* `getUsersUserIdPermissions` - List Permissions
* `getUsersUserIdPublicKeys` - List Public Keys
* `patchUsersId` - Update User
* `postUsers` - Create User
* `postUsersId2faReset` - Trigger 2FA Reset process for user who has lost access to their existing 2FA methods.
* `postUsersIdResendWelcomeEmail` - Resend user welcome email
* `postUsersIdUnlock` - Unlock user who has been locked out due to failed logins.
* `postUsersUserIdApiKeys` - Create Api Key
* `postUsersUserIdAs2Keys` - Create As2 Key
* `postUsersUserIdPublicKeys` - Create Public Key

### webhook_tests

* `postWebhookTests` - Create Webhook Test

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
