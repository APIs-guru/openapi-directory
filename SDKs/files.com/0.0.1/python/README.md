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
    
req = operations.GetActionNotificationExportResultsRequest(
    query_params=operations.GetActionNotificationExportResultsQueryParams(
        action_notification_export_id=763388924383789986,
        cursor="molestiae",
        per_page=8246720065789982806,
        user_id=252123505414078850,
    ),
)
    
res = s.action_notification_export_results.get_action_notification_export_results(req)

if res.action_notification_export_result_entities is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### action_notification_export_results

* `get_action_notification_export_results` - List Action Notification Export Results

### action_notification_exports

* `get_action_notification_exports_id` - Show Action Notification Export
* `post_action_notification_exports` - Create Action Notification Export

### action_webhook_failures

* `post_action_webhook_failures_id_retry` - retry Action Webhook Failure

### api_key

* `api_key_delete_current` - Delete current API key.  (Requires current API connection to be using an API key.)
* `api_key_find_current` - Show information about current API key.  (Requires current API connection to be using an API key.)
* `api_key_update_current` - Update current API key.  (Requires current API connection to be using an API key.)

### api_keys

* `delete_api_keys_id` - Delete Api Key
* `get_api_keys` - List Api Keys
* `get_api_keys_id` - Show Api Key
* `patch_api_keys_id` - Update Api Key
* `post_api_keys` - Create Api Key

### apps

* `get_apps` - List Apps

### as2_keys

* `delete_as2_keys_id` - Delete As2 Key
* `get_as2_keys` - List As2 Keys
* `get_as2_keys_id` - Show As2 Key
* `patch_as2_keys_id` - Update As2 Key
* `post_as2_keys` - Create As2 Key

### automations

* `delete_automations_id` - Delete Automation
* `get_automations` - List Automations
* `get_automations_id` - Show Automation
* `patch_automations_id` - Update Automation
* `post_automations` - Create Automation

### bandwidth_snapshots

* `get_bandwidth_snapshots` - List Bandwidth Snapshots

### behaviors

* `behavior_list_for_path` - List Behaviors by path
* `delete_behaviors_id` - Delete Behavior
* `get_behaviors` - List Behaviors
* `get_behaviors_id` - Show Behavior
* `patch_behaviors_id` - Update Behavior
* `post_behaviors` - Create Behavior
* `post_behaviors_webhook_test` - Test webhook.

### bundle_downloads

* `get_bundle_downloads` - List Bundle Downloads

### bundle_recipients

* `get_bundle_recipients` - List Bundle Recipients
* `post_bundle_recipients` - Create Bundle Recipient

### bundle_registrations

* `get_bundle_registrations` - List Bundle Registrations

### bundles

* `delete_bundles_id` - Delete Bundle
* `get_bundles` - List Bundles
* `get_bundles_id` - Show Bundle
* `patch_bundles_id` - Update Bundle
* `post_bundles` - Create Bundle
* `post_bundles_id_share` - Send email(s) with a link to bundle

### clickwraps

* `delete_clickwraps_id` - Delete Clickwrap
* `get_clickwraps` - List Clickwraps
* `get_clickwraps_id` - Show Clickwrap
* `patch_clickwraps_id` - Update Clickwrap
* `post_clickwraps` - Create Clickwrap

### dns_records

* `get_dns_records` - Show site DNS configuration.

### external_events

* `get_external_events` - List External Events
* `get_external_events_id` - Show External Event
* `post_external_events` - Create External Event

### file_actions

* `file_action_begin_upload` - Begin file upload
* `file_action_copy` - Copy file/folder
* `file_action_metadata` - Return metadata for file/folder
* `file_action_move` - Move file/folder

### file_comment_reactions

* `delete_file_comment_reactions_id` - Delete File Comment Reaction
* `post_file_comment_reactions` - Create File Comment Reaction

### file_comments

* `delete_file_comments_id` - Delete File Comment
* `file_comment_list_for_path` - List File Comments by path
* `patch_file_comments_id` - Update File Comment
* `post_file_comments` - Create File Comment

### file_migrations

* `get_file_migrations_id` - Show File Migration

### files

* `delete_files_path` - Delete file/folder
* `file_download` - Download file
* `patch_files_path` - Update file/folder metadata
* `post_files_path` - Upload file

### folders

* `folder_list_for_path` - List Folders by path
* `post_folders_path` - Create folder

### form_field_sets

* `delete_form_field_sets_id` - Delete Form Field Set
* `get_form_field_sets` - List Form Field Sets
* `get_form_field_sets_id` - Show Form Field Set

### group_users

* `delete_group_users_id` - Delete Group User
* `get_group_users` - List Group Users
* `patch_group_users_id` - Update Group User
* `post_group_users` - Create Group User

### groups

* `delete_groups_group_id_memberships_user_id` - Delete Group User
* `delete_groups_id` - Delete Group
* `get_groups` - List Groups
* `get_groups_group_id_permissions` - List Permissions
* `get_groups_group_id_users` - List Group Users
* `get_groups_id` - Show Group
* `patch_groups_group_id_memberships_user_id` - Update Group User
* `patch_groups_id` - Update Group
* `post_groups` - Create Group
* `post_groups_group_id_users` - Create User

### history

* `history_list` - List site full action history.
* `history_list_for_file` - List history for specific file.
* `history_list_for_folder` - List history for specific folder.
* `history_list_for_user` - List history for specific user.
* `history_list_logins` - List site login history.

### history_export_results

* `get_history_export_results` - List History Export Results

### history_exports

* `get_history_exports_id` - Show History Export
* `post_history_exports` - Create History Export

### inbox_recipients

* `get_inbox_recipients` - List Inbox Recipients
* `post_inbox_recipients` - Create Inbox Recipient

### inbox_registrations

* `get_inbox_registrations` - List Inbox Registrations

### inbox_uploads

* `get_inbox_uploads` - List Inbox Uploads

### invoices

* `get_invoices` - List Invoices
* `get_invoices_id` - Show Invoice

### ip_addresses

* `get_ip_addresses` - List IP Addresses associated with the current site
* `get_ip_addresses_reserved` - List all possible public IP addresses

### locks

* `delete_locks_path` - Delete Lock
* `lock_list_for_path` - List Locks by path
* `post_locks_path` - Create Lock

### message_comment_reactions

* `delete_message_comment_reactions_id` - Delete Message Comment Reaction
* `get_message_comment_reactions` - List Message Comment Reactions
* `get_message_comment_reactions_id` - Show Message Comment Reaction
* `post_message_comment_reactions` - Create Message Comment Reaction

### message_comments

* `delete_message_comments_id` - Delete Message Comment
* `get_message_comments` - List Message Comments
* `get_message_comments_id` - Show Message Comment
* `patch_message_comments_id` - Update Message Comment
* `post_message_comments` - Create Message Comment

### message_reactions

* `delete_message_reactions_id` - Delete Message Reaction
* `get_message_reactions` - List Message Reactions
* `get_message_reactions_id` - Show Message Reaction
* `post_message_reactions` - Create Message Reaction

### messages

* `delete_messages_id` - Delete Message
* `get_messages` - List Messages
* `get_messages_id` - Show Message
* `patch_messages_id` - Update Message
* `post_messages` - Create Message

### notifications

* `delete_notifications_id` - Delete Notification
* `get_notifications` - List Notifications
* `get_notifications_id` - Show Notification
* `patch_notifications_id` - Update Notification
* `post_notifications` - Create Notification

### payments

* `get_payments` - List Payments
* `get_payments_id` - Show Payment

### permissions

* `delete_permissions_id` - Delete Permission
* `get_permissions` - List Permissions
* `post_permissions` - Create Permission

### projects

* `delete_projects_id` - Delete Project
* `get_projects` - List Projects
* `get_projects_id` - Show Project
* `patch_projects_id` - Update Project
* `post_projects` - Create Project

### public_keys

* `delete_public_keys_id` - Delete Public Key
* `get_public_keys` - List Public Keys
* `get_public_keys_id` - Show Public Key
* `patch_public_keys_id` - Update Public Key
* `post_public_keys` - Create Public Key

### remote_servers

* `delete_remote_servers_id` - Delete Remote Server
* `get_remote_servers` - List Remote Servers
* `get_remote_servers_id` - Show Remote Server
* `patch_remote_servers_id` - Update Remote Server
* `post_remote_servers` - Create Remote Server

### requests

* `delete_requests_id` - Delete Request
* `get_requests` - List Requests
* `get_requests_folders_path` - List Requests
* `post_requests` - Create Request

### sessions

* `delete_sessions` - Delete user session (log out)
* `post_sessions` - Create user session (log in)

### settings_changes

* `get_settings_changes` - List Settings Changes

### site

* `get_site` - Show site settings
* `get_site_api_keys` - List Api Keys
* `get_site_dns_records` - Show site DNS configuration.
* `get_site_ip_addresses` - List IP Addresses associated with the current site
* `get_site_usage` - Get the most recent usage snapshot (usage data for billing purposes) for a Site.
* `patch_site` - Update site settings.
* `post_site_api_keys` - Create Api Key
* `post_site_test_webhook` - Test webhook.

### sso_strategies

* `get_sso_strategies` - List Sso Strategies
* `get_sso_strategies_id` - Show Sso Strategy

### styles

* `delete_styles_path` - Delete Style
* `get_styles_path` - Show Style
* `patch_styles_path` - Update Style

### sync_jobs

* `get_sync_jobs` - List Sync Jobs

### usage_daily_snapshots

* `get_usage_daily_snapshots` - List Usage Daily Snapshots

### usage_snapshots

* `get_usage_snapshots` - List Usage Snapshots

### user

* `get_user_api_keys` - List Api Keys
* `get_user_as2_keys` - List As2 Keys
* `get_user_groups` - List Group Users
* `get_user_public_keys` - List Public Keys
* `patch_user` - Update User
* `post_user_api_keys` - Create Api Key
* `post_user_as2_keys` - Create As2 Key
* `post_user_public_keys` - Create Public Key

### user_cipher_uses

* `get_user_cipher_uses` - List User Cipher Uses

### user_requests

* `delete_user_requests_id` - Delete User Request
* `get_user_requests` - List User Requests
* `get_user_requests_id` - Show User Request
* `post_user_requests` - Create User Request

### users

* `delete_users_id` - Delete User
* `get_users` - List Users
* `get_users_id` - Show User
* `get_users_user_id_api_keys` - List Api Keys
* `get_users_user_id_as2_keys` - List As2 Keys
* `get_users_user_id_cipher_uses` - List User Cipher Uses
* `get_users_user_id_groups` - List Group Users
* `get_users_user_id_permissions` - List Permissions
* `get_users_user_id_public_keys` - List Public Keys
* `patch_users_id` - Update User
* `post_users` - Create User
* `post_users_id2fa_reset` - Trigger 2FA Reset process for user who has lost access to their existing 2FA methods.
* `post_users_id_resend_welcome_email` - Resend user welcome email
* `post_users_id_unlock` - Unlock user who has been locked out due to failed logins.
* `post_users_user_id_api_keys` - Create Api Key
* `post_users_user_id_as2_keys` - Create As2 Key
* `post_users_user_id_public_keys` - Create Public Key

### webhook_tests

* `post_webhook_tests` - Create Webhook Test

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
