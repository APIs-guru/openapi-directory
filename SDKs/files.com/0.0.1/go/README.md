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
    s := sdk.New()
    
    req := operations.GetActionNotificationExportResultsRequest{
        QueryParams: operations.GetActionNotificationExportResultsQueryParams{
            ActionNotificationExportID: 763388924383789986,
            Cursor: "molestiae",
            PerPage: 8246720065789982806,
            UserID: 252123505414078850,
        },
    }
    
    res, err := s.ActionNotificationExportResults.GetActionNotificationExportResults(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionNotificationExportResultEntities != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### action_notification_export_results

* `GetActionNotificationExportResults` - List Action Notification Export Results

### action_notification_exports

* `GetActionNotificationExportsID` - Show Action Notification Export
* `PostActionNotificationExports` - Create Action Notification Export

### action_webhook_failures

* `PostActionWebhookFailuresIDRetry` - retry Action Webhook Failure

### api_key

* `APIKeyDeleteCurrent` - Delete current API key.  (Requires current API connection to be using an API key.)
* `APIKeyFindCurrent` - Show information about current API key.  (Requires current API connection to be using an API key.)
* `APIKeyUpdateCurrent` - Update current API key.  (Requires current API connection to be using an API key.)

### api_keys

* `DeleteAPIKeysID` - Delete Api Key
* `GetAPIKeys` - List Api Keys
* `GetAPIKeysID` - Show Api Key
* `PatchAPIKeysID` - Update Api Key
* `PostAPIKeys` - Create Api Key

### apps

* `GetApps` - List Apps

### as2_keys

* `DeleteAs2KeysID` - Delete As2 Key
* `GetAs2Keys` - List As2 Keys
* `GetAs2KeysID` - Show As2 Key
* `PatchAs2KeysID` - Update As2 Key
* `PostAs2Keys` - Create As2 Key

### automations

* `DeleteAutomationsID` - Delete Automation
* `GetAutomations` - List Automations
* `GetAutomationsID` - Show Automation
* `PatchAutomationsID` - Update Automation
* `PostAutomations` - Create Automation

### bandwidth_snapshots

* `GetBandwidthSnapshots` - List Bandwidth Snapshots

### behaviors

* `BehaviorListForPath` - List Behaviors by path
* `DeleteBehaviorsID` - Delete Behavior
* `GetBehaviors` - List Behaviors
* `GetBehaviorsID` - Show Behavior
* `PatchBehaviorsID` - Update Behavior
* `PostBehaviors` - Create Behavior
* `PostBehaviorsWebhookTest` - Test webhook.

### bundle_downloads

* `GetBundleDownloads` - List Bundle Downloads

### bundle_recipients

* `GetBundleRecipients` - List Bundle Recipients
* `PostBundleRecipients` - Create Bundle Recipient

### bundle_registrations

* `GetBundleRegistrations` - List Bundle Registrations

### bundles

* `DeleteBundlesID` - Delete Bundle
* `GetBundles` - List Bundles
* `GetBundlesID` - Show Bundle
* `PatchBundlesID` - Update Bundle
* `PostBundles` - Create Bundle
* `PostBundlesIDShare` - Send email(s) with a link to bundle

### clickwraps

* `DeleteClickwrapsID` - Delete Clickwrap
* `GetClickwraps` - List Clickwraps
* `GetClickwrapsID` - Show Clickwrap
* `PatchClickwrapsID` - Update Clickwrap
* `PostClickwraps` - Create Clickwrap

### dns_records

* `GetDNSRecords` - Show site DNS configuration.

### external_events

* `GetExternalEvents` - List External Events
* `GetExternalEventsID` - Show External Event
* `PostExternalEvents` - Create External Event

### file_actions

* `FileActionBeginUpload` - Begin file upload
* `FileActionCopy` - Copy file/folder
* `FileActionMetadata` - Return metadata for file/folder
* `FileActionMove` - Move file/folder

### file_comment_reactions

* `DeleteFileCommentReactionsID` - Delete File Comment Reaction
* `PostFileCommentReactions` - Create File Comment Reaction

### file_comments

* `DeleteFileCommentsID` - Delete File Comment
* `FileCommentListForPath` - List File Comments by path
* `PatchFileCommentsID` - Update File Comment
* `PostFileComments` - Create File Comment

### file_migrations

* `GetFileMigrationsID` - Show File Migration

### files

* `DeleteFilesPath` - Delete file/folder
* `FileDownload` - Download file
* `PatchFilesPath` - Update file/folder metadata
* `PostFilesPath` - Upload file

### folders

* `FolderListForPath` - List Folders by path
* `PostFoldersPath` - Create folder

### form_field_sets

* `DeleteFormFieldSetsID` - Delete Form Field Set
* `GetFormFieldSets` - List Form Field Sets
* `GetFormFieldSetsID` - Show Form Field Set

### group_users

* `DeleteGroupUsersID` - Delete Group User
* `GetGroupUsers` - List Group Users
* `PatchGroupUsersID` - Update Group User
* `PostGroupUsers` - Create Group User

### groups

* `DeleteGroupsGroupIDMembershipsUserID` - Delete Group User
* `DeleteGroupsID` - Delete Group
* `GetGroups` - List Groups
* `GetGroupsGroupIDPermissions` - List Permissions
* `GetGroupsGroupIDUsers` - List Group Users
* `GetGroupsID` - Show Group
* `PatchGroupsGroupIDMembershipsUserID` - Update Group User
* `PatchGroupsID` - Update Group
* `PostGroups` - Create Group
* `PostGroupsGroupIDUsers` - Create User

### history

* `HistoryList` - List site full action history.
* `HistoryListForFile` - List history for specific file.
* `HistoryListForFolder` - List history for specific folder.
* `HistoryListForUser` - List history for specific user.
* `HistoryListLogins` - List site login history.

### history_export_results

* `GetHistoryExportResults` - List History Export Results

### history_exports

* `GetHistoryExportsID` - Show History Export
* `PostHistoryExports` - Create History Export

### inbox_recipients

* `GetInboxRecipients` - List Inbox Recipients
* `PostInboxRecipients` - Create Inbox Recipient

### inbox_registrations

* `GetInboxRegistrations` - List Inbox Registrations

### inbox_uploads

* `GetInboxUploads` - List Inbox Uploads

### invoices

* `GetInvoices` - List Invoices
* `GetInvoicesID` - Show Invoice

### ip_addresses

* `GetIPAddresses` - List IP Addresses associated with the current site
* `GetIPAddressesReserved` - List all possible public IP addresses

### locks

* `DeleteLocksPath` - Delete Lock
* `LockListForPath` - List Locks by path
* `PostLocksPath` - Create Lock

### message_comment_reactions

* `DeleteMessageCommentReactionsID` - Delete Message Comment Reaction
* `GetMessageCommentReactions` - List Message Comment Reactions
* `GetMessageCommentReactionsID` - Show Message Comment Reaction
* `PostMessageCommentReactions` - Create Message Comment Reaction

### message_comments

* `DeleteMessageCommentsID` - Delete Message Comment
* `GetMessageComments` - List Message Comments
* `GetMessageCommentsID` - Show Message Comment
* `PatchMessageCommentsID` - Update Message Comment
* `PostMessageComments` - Create Message Comment

### message_reactions

* `DeleteMessageReactionsID` - Delete Message Reaction
* `GetMessageReactions` - List Message Reactions
* `GetMessageReactionsID` - Show Message Reaction
* `PostMessageReactions` - Create Message Reaction

### messages

* `DeleteMessagesID` - Delete Message
* `GetMessages` - List Messages
* `GetMessagesID` - Show Message
* `PatchMessagesID` - Update Message
* `PostMessages` - Create Message

### notifications

* `DeleteNotificationsID` - Delete Notification
* `GetNotifications` - List Notifications
* `GetNotificationsID` - Show Notification
* `PatchNotificationsID` - Update Notification
* `PostNotifications` - Create Notification

### payments

* `GetPayments` - List Payments
* `GetPaymentsID` - Show Payment

### permissions

* `DeletePermissionsID` - Delete Permission
* `GetPermissions` - List Permissions
* `PostPermissions` - Create Permission

### projects

* `DeleteProjectsID` - Delete Project
* `GetProjects` - List Projects
* `GetProjectsID` - Show Project
* `PatchProjectsID` - Update Project
* `PostProjects` - Create Project

### public_keys

* `DeletePublicKeysID` - Delete Public Key
* `GetPublicKeys` - List Public Keys
* `GetPublicKeysID` - Show Public Key
* `PatchPublicKeysID` - Update Public Key
* `PostPublicKeys` - Create Public Key

### remote_servers

* `DeleteRemoteServersID` - Delete Remote Server
* `GetRemoteServers` - List Remote Servers
* `GetRemoteServersID` - Show Remote Server
* `PatchRemoteServersID` - Update Remote Server
* `PostRemoteServers` - Create Remote Server

### requests

* `DeleteRequestsID` - Delete Request
* `GetRequests` - List Requests
* `GetRequestsFoldersPath` - List Requests
* `PostRequests` - Create Request

### sessions

* `DeleteSessions` - Delete user session (log out)
* `PostSessions` - Create user session (log in)

### settings_changes

* `GetSettingsChanges` - List Settings Changes

### site

* `GetSite` - Show site settings
* `GetSiteAPIKeys` - List Api Keys
* `GetSiteDNSRecords` - Show site DNS configuration.
* `GetSiteIPAddresses` - List IP Addresses associated with the current site
* `GetSiteUsage` - Get the most recent usage snapshot (usage data for billing purposes) for a Site.
* `PatchSite` - Update site settings.
* `PostSiteAPIKeys` - Create Api Key
* `PostSiteTestWebhook` - Test webhook.

### sso_strategies

* `GetSsoStrategies` - List Sso Strategies
* `GetSsoStrategiesID` - Show Sso Strategy

### styles

* `DeleteStylesPath` - Delete Style
* `GetStylesPath` - Show Style
* `PatchStylesPath` - Update Style

### sync_jobs

* `GetSyncJobs` - List Sync Jobs

### usage_daily_snapshots

* `GetUsageDailySnapshots` - List Usage Daily Snapshots

### usage_snapshots

* `GetUsageSnapshots` - List Usage Snapshots

### user

* `GetUserAPIKeys` - List Api Keys
* `GetUserAs2Keys` - List As2 Keys
* `GetUserGroups` - List Group Users
* `GetUserPublicKeys` - List Public Keys
* `PatchUser` - Update User
* `PostUserAPIKeys` - Create Api Key
* `PostUserAs2Keys` - Create As2 Key
* `PostUserPublicKeys` - Create Public Key

### user_cipher_uses

* `GetUserCipherUses` - List User Cipher Uses

### user_requests

* `DeleteUserRequestsID` - Delete User Request
* `GetUserRequests` - List User Requests
* `GetUserRequestsID` - Show User Request
* `PostUserRequests` - Create User Request

### users

* `DeleteUsersID` - Delete User
* `GetUsers` - List Users
* `GetUsersID` - Show User
* `GetUsersUserIDAPIKeys` - List Api Keys
* `GetUsersUserIDAs2Keys` - List As2 Keys
* `GetUsersUserIDCipherUses` - List User Cipher Uses
* `GetUsersUserIDGroups` - List Group Users
* `GetUsersUserIDPermissions` - List Permissions
* `GetUsersUserIDPublicKeys` - List Public Keys
* `PatchUsersID` - Update User
* `PostUsers` - Create User
* `PostUsersId2faReset` - Trigger 2FA Reset process for user who has lost access to their existing 2FA methods.
* `PostUsersIDResendWelcomeEmail` - Resend user welcome email
* `PostUsersIDUnlock` - Unlock user who has been locked out due to failed logins.
* `PostUsersUserIDAPIKeys` - Create Api Key
* `PostUsersUserIDAs2Keys` - Create As2 Key
* `PostUsersUserIDPublicKeys` - Create Public Key

### webhook_tests

* `PostWebhookTests` - Create Webhook Test

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
