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
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    )
)
    
req = operations.CompleteOpenIDLoginRequest(
    query_params=operations.CompleteOpenIDLoginQueryParams(
        code="excepturi",
        id_token="voluptatem",
        state="magni",
    ),
)
    
res = s.auth.complete_open_id_login(req)

if res.login_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### auth

* `complete_open_id_login` - Complete OpenID Connect authentication
* `initiate_open_id_login` - Initiate OpenID Connect authentication
* `login` - Authenticate user (Login)
* `ping` - Ping
* `recover_user_name` - Recover username
* `request_open_id_auth_resources` - Request OpenID Connect authentication resources
* `request_password_reset` - Request password reset
* `reset_password` - Reset password
* `validate_reset_password_token` - Validate information for password reset

### config

* `request_algorithms` - Request algorithms
* `request_general_settings_info` - Request general settings
* `request_infrastructure_properties_info` - Request infrastructure properties
* `request_notification_channels_info` - Request list of notification channels
* `request_password_policies_config_info` - Request password policies
* `request_s3_tags_info` - Request list of configured S3 tags
* `request_system_defaults_info` - Request default values
* `request_system_settings` - Request system settings
* `update_system_settings` - Update system settings

### downloads

* `download_avatar` - Download avatar
* `download_file_via_token` - Download file
* `download_file_via_token_1` - Download file
* `download_zip_archive_via_token` - Download ZIP archive

### eventlog

* `request_audit_node_user_data` - Request node assigned users with permissions
* `request_log_events_as_json` - Request system events
* `request_log_operations` - Request allowed Log Operations

### groups

* `add_group_members` - Add group members
* `create_group` - Create new user group
* `remove_group` - Remove user group
* `remove_group_members` - Remove group members
* `request_group` - Request user group
* `request_group_members` - Request group member users or / and users who can become a member
* `request_group_roles` - Request list of roles assigned to the group
* `request_group_rooms` - Request rooms granted to the group or / and rooms that can be granted
* `request_groups` - Request list of user groups
* `request_last_admin_rooms_groups` - Request rooms where the group is defined as last admin group
* `update_group` - Update user group's metadata

### nodes

* `add_favorite` - Mark a node (room, folder or file) as favorite
* `cancel_file_upload` - Cancel file upload
* `change_pending_assignments` - Handle user-room assignments per group
* `complete_file_upload` - Complete file upload
* `complete_s3_file_upload` - Complete S3 file upload
* `configure_room` - Configure room
* `copy_nodes` - Copy node(s)
* `create_and_preserve_room_rescue_key_pair` - Create key pair and preserve copy of old private key
* `create_file_upload_channel` - Create new file upload channel
* `create_folder` - Create new folder
* `create_node_comment` - Create node comment
* `create_room` - Create new room
* `download_file` - Download file
* `download_file_1` - Download file
* `download_zip_archive` - Download files / folders as ZIP archive
* `empty_deleted_nodes` - Empty recycle bin
* `encrypt_room` - Encrypt room
* `generate_download_url` - Generate download URL
* `generate_download_url_for_zip_archive` - Generate download URL for ZIP download
* `generate_presigned_urls_files` - Generate presigned URLs for S3 file upload
* `handle_room_webhook_assignments` - Assign or unassign webhooks to room
* `move_nodes` - Move node(s)
* `remove_deleted_nodes` - Remove nodes from recycle bin
* `remove_favorite` - Unmark a node (room, folder or file) as favorite
* `remove_node` - Remove node
* `remove_node_comment` - Remove node comment
* `remove_nodes` - Remove nodes
* `remove_room_rescue_key_pair` - Remove rooms's rescue key pair
* `request_deleted_node` - Request deleted node
* `request_deleted_node_versions` - Request deleted versions of nodes
* `request_deleted_nodes_summary` - Request list of deleted nodes
* `request_list_of_webhooks_for_room` - Request list of webhooks that are assigned or can be assigned to this room
* `request_missing_file_keys` - Request files without user's file key
* `request_node` - Request node
* `request_node_comments` - Request list of node comments
* `request_node_parents` - Request list of parent nodes
* `request_nodes` - Request list of nodes
* `request_pending_assignments` - Request user-room assignments per group
* `request_room_activities_log_as_json` - Request events of a room
* `request_room_activities_log_as_json_old` - Request events of a room
* `request_room_groups` - Request room granted group(s) or / and group(s) that can be granted
* `request_room_rescue_key` - Request room rescue key
* `request_room_rescue_key_pair` - Request room rescue key
* `request_room_rescue_key_pairs` - Request all room rescue key pairs
* `request_room_s3_tags` - Request list of all assigned S3 tags to the room
* `request_room_users` - Request room granted user(s) or / and user(s) that can be granted
* `request_system_rescue_key` - Request system rescue key
* `request_upload_status_files` - Request status of S3 file upload
* `request_user_file_key` - Request user's file key
* `restore_nodes` - Restore deleted nodes
* `revoke_room_groups` - Revoke granted group(s) from room
* `revoke_room_users` - Revoke granted user(s) from room
* `search_nodes` - Search nodes
* `set_room_rescue_key_pair` - Set room's rescue key pair
* `set_room_s3_tags` - Set S3 tags for a room
* `set_user_file_keys` - Set file keys for a list of users and files
* `update_favorites` - Mark or unmark a list of nodes (room, folder or file) as favorite
* `update_file` - Updates a file’s metadata
* `update_files` - Updates a list of  file’s metadata
* `update_folder` - Updates folder’s metadata
* `update_node_comment` - Edit node comment
* `update_room` - Updates room’s metadata
* `update_room_groups` - Add or change room granted group(s)
* `update_room_users` - Add or change room granted user(s)
* `upload_file_as_multipart` - Upload file

### provisioning

* `create_customer` - Create customer
* `create_tenant_webhook` - Create tenant webhook
* `remove_customer` - Remove customer
* `remove_customer_attribute` - Remove customer attribute
* `remove_tenant_webhook` - Remove tenant webhook
* `request_customer` - Get customer
* `request_customer_attributes` - Request customer attributes
* `request_customer_users` - Request list of customer users
* `request_customers` - Request list of customers
* `request_list_of_event_types_for_tenant` - Request list of event types
* `request_list_of_tenant_webhooks` - Request list of tenant webhooks
* `request_tenant_webhook` - Request tenant webhook
* `reset_tenant_webhook_lifetime` - Reset tenant webhook lifetime
* `set_customer_attributes` - Set customer attributes
* `update_customer` - Update customer
* `update_customer_attributes` - Add or edit customer attributes
* `update_tenant_webhook` - Update tenant webhook

### public

* `cancel_file_upload_via_share` - Cancel file upload
* `complete_file_upload_via_share` - Complete file upload
* `complete_s3_file_upload_via_share` - Complete S3 file upload
* `create_share_upload_channel` - Create new file upload channel
* `download_file_via_token_public` - Download file with token
* `download_file_via_token_public_1` - Download file with token
* `generate_download_url_public` - Generate download URL
* `generate_presigned_urls_public` - Generate presigned URLs for S3 file upload
* `request_active_directory_auth_info` - Request Active Directory authentication information
* `request_open_id_auth_info` - Request OpenID Connect provider authentication information
* `request_public_download_share_info` - Request public Download Share information
* `request_public_upload_share_info` - Request public Upload Share information
* `request_software_version` - Request software version information
* `request_system_info` - Request system information
* `request_system_time` - Request system time
* `request_third_party_dependencies` - Request third-party software dependencies
* `request_upload_status_public` - Request status of S3 file upload
* `upload_file_as_multipart_public_1` - Upload file

### resources

* `request_subscription_scopes` - Request list of subscription scopes
* `request_user_avatar` - Request user avatar

### roles

* `add_role_groups` - Assign group(s) to the role
* `add_role_users` - Assign user(s) to the role
* `request_role_groups` - Request groups with specific role
* `request_role_users` - Request users with specific role
* `request_roles` - Request all roles with assigned rights
* `revoke_role_groups` - Revoke granted role from group(s)
* `revoke_role_users` - Revoke granted role from user(s)

### settings

* `create_and_preserve_key_pair` - Create system rescue key pair and preserve copy of old private key
* `create_webhook` - Create webhook
* `remove_system_rescue_key_pair` - Remove system rescue key pair
* `remove_webhook` - Remove webhook
* `request_all_system_rescue_key_pairs` - Request all system rescue key pairs
* `request_list_of_event_types_for_config_manager` - Request list of event types
* `request_list_of_webhooks` - Request list of webhooks
* `request_notification_channels` - Request list of notification channels
* `request_settings` - Request customer settings
* `request_system_rescue_key_pair` - Request system rescue key pair
* `request_webhook` - Request webhook
* `reset_webhook_lifetime` - Reset webhook lifetime
* `set_settings` - Set customer settings
* `set_system_rescue_key_pair` - Activate client-side encryption for customer
* `toggle_notification_channels` - Toggle notification channels
* `update_webhook` - Update webhook

### shares

* `create_download_share` - Create new Download Share
* `create_upload_share` - Create new Upload Share
* `delete_download_shares` - Remove Download Shares
* `delete_upload_shares` - Remove Upload Shares
* `remove_download_share` - Remove Download Share
* `remove_upload_share` - Remove Upload Share
* `request_download_share` - Request Download Share
* `request_download_share_qr` - Request Download Share via QR Code
* `request_download_shares` - Request list of Download Shares
* `request_upload_share` - Request Upload Share
* `request_upload_share_qr` - Request Upload Share via QR Code
* `request_upload_shares` - Request list of Upload Shares
* `send_download_share_link_via_email` - Send an existing Download Share link via email
* `send_upload_share_link_via_email` - Send an existing Upload Share link via email
* `update_download_share` - Update Download Share
* `update_download_shares` - Update a list of Download Shares
* `update_upload_share` - Update Upload Share
* `update_upload_shares` - Update List of Upload Shares

### syslog

* `request_audit_node_user_data_syslog` - Request nodes assigned users with permissions
* `request_log_operations_syslog` - Request allowed log operations
* `request_syslog_events` - Request system events

### system-auth-config

* `create_ad_config` - Create Active Directory configuration
* `create_o_auth_client` - Create OAuth client
* `create_open_id_idp_config` - Create OpenID Connect IDP configuration
* `create_radius_config` - Create RADIUS configuration
* `remove_ad_config` - Remove Active Directory configuration
* `remove_o_auth_client` - Remove OAuth client
* `remove_open_id_idp_config` - Remove OpenID Connect IDP configuration
* `remove_radius_config` - Remove RADIUS configuration
* `request_ad_config` - Request Active Directory configuration
* `request_ad_configs` - Request list of Active Directory configurations
* `request_o_auth_client` - Request OAuth client
* `request_o_auth_clients` - Request list of OAuth clients
* `request_open_id_idp_config` - Request OpenID Connect IDP configuration
* `request_open_id_idp_configs` - Request list of OpenID Connect IDP configurations
* `request_radius_config` - Request RADIUS configuration
* `test_ad_config` - Test Active Directory configuration
* `test_radius_config` - Test RADIUS server availability
* `update_ad_config` - Update Active Directory configuration
* `update_o_auth_client` - Update OAuth client
* `update_open_id_idp_config` - Update OpenID Connect IDP configuration
* `update_radius_config` - Update RADIUS configuration

### system-policies-config

* `change_password_policies_config` - Change password policies
* `enforce_login_password_change` - Enforce login password change for all users
* `request_password_policies_config` - Request password policies
* `request_password_policies_for_password_type` - Request password policies for a certain password type

### system-settings-config

* `request_auth_config` - Request authentication settings
* `request_eventlog_config` - Request eventlog settings
* `request_general_settings` - Request general settings
* `request_infrastructure_properties` - Request infrastructure properties
* `request_syslog_config` - Request syslog settings
* `request_system_defaults` - Request system defaults
* `update_auth_config` - Update authentication settings
* `update_eventlog_config` - Update eventlog settings
* `update_general_settings` - Update general settings
* `update_syslog_config` - Update syslog settings
* `update_system_defaults` - Update system defaults

### system-storage-config

* `create_s3_config` - Create S3 storage configuration
* `create_s3_tag` - Create S3 tag
* `remove_s3_tag` - Remove S3 tag
* `request3_config` - Request S3 storage configuration
* `request_s3_tag` - Request S3 tag
* `request_s3_tag_list` - Request list of configured S3 tags
* `update_s3_config` - Update S3 storage configuration

### uploads

* `cancel_file_upload_by_token` - Cancel file upload
* `complete_file_upload_by_token` - Complete file upload
* `upload_file_by_token_as_binary_1` - Upload file

### user

* `change_user_password` - Change user's password
* `create_and_preserve_user_key_pair` - Create key pair and preserve copy of old private key
* `enable_customer_encryption` - Activate client-side encryption for customer
* `list_download_share_subscriptions` - List Download Share subscriptions
* `list_node_subscriptions` - List node subscriptions
* `list_upload_share_subscriptions` - List Upload Share subscriptions
* `logout` - Invalidate authentication token
* `ping_user` - (authenticated) Ping
* `remove_o_auth_approval` - Remove OAuth client approval
* `remove_o_auth_authorization` - Remove a OAuth authorization
* `remove_o_auth_authorizations` - Remove all OAuth authorizations of a client
* `remove_profile_attribute` - Remove user profile attribute
* `remove_user_key_pair` - Remove user's key pair
* `request_avatar` - Request avatar
* `request_customer_info` - Request customer information for user
* `request_customer_key_pair` - Request customer's key pair
* `request_list_of_notification_configs` - Request list of notification configurations
* `request_o_auth_approvals` - Request list of OAuth client approvals
* `request_o_auth_authorizations` - Request list of OAuth client authorizations
* `request_profile_attributes` - Request user profile attributes
* `request_user_info` - Request user account information
* `request_user_key_pair` - Request user's key pair
* `request_user_key_pairs` - Request all user key pairs
* `reset_avatar` - Reset avatar
* `set_profile_attributes` - Set user profile attributes
* `set_user_key_pair` - Set user's key pair
* `subscribe_download_share` - Subscribe Download Share for notifications
* `subscribe_download_shares` - Subscribe or Unsubscribe a List of Download Shares for notifications
* `subscribe_node` - Subscribe node for notifications
* `subscribe_upload_share` - Subscribe Upload Share for notifications
* `subscribe_upload_shares` - Subscribe or Unsubscribe a List of Upload Shares for notifications
* `unsubscribe_download_share` - Unsubscribe Download Share from notifications
* `unsubscribe_node` - Unsubscribe node from notifications
* `unsubscribe_upload_share` - Unsubscribe Upload Share from notifications
* `update_node_subscriptions` - Subscribe or Unsubscribe a List of nodes for notifications
* `update_notification_config` - Update notification configuration
* `update_profile_attributes` - Add or edit user profile attributes
* `update_user_account` - Update user account
* `upload_avatar_as_multipart` - Change avatar

### users

* `create_user` - Create new user
* `remove_user` - Remove user
* `remove_user_attribute` - Remove custom user attribute
* `request_last_admin_rooms_users` - Request rooms where the user is last admin
* `request_user` - Request user
* `request_user_attributes` - Request custom user attributes
* `request_user_groups` - Request groups that user is a member of or / and can become a member
* `request_user_roles` - Request user's granted roles
* `request_users` - Request users
* `request_users_rooms` - Request rooms granted to the user or / and rooms that can be granted
* `set_user_attributes` - Set custom user attributes
* `update_user` - Update user's metadata
* `update_user_attributes` - Add or edit custom user attributes

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
