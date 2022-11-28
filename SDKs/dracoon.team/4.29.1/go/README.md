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
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CompleteOpenIDLoginRequest{
        QueryParams: operations.CompleteOpenIDLoginQueryParams{
            Code: "excepturi",
            IDToken: "voluptatem",
            State: "magni",
        },
    }
    
    res, err := s.Auth.CompleteOpenIDLogin(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.LoginResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### auth

* `CompleteOpenIDLogin` - Complete OpenID Connect authentication
* `InitiateOpenIDLogin` - Initiate OpenID Connect authentication
* `Login` - Authenticate user (Login)
* `Ping` - Ping
* `RecoverUserName` - Recover username
* `RequestOpenIDAuthResources` - Request OpenID Connect authentication resources
* `RequestPasswordReset` - Request password reset
* `ResetPassword` - Reset password
* `ValidateResetPasswordToken` - Validate information for password reset

### config

* `RequestAlgorithms` - Request algorithms
* `RequestGeneralSettingsInfo` - Request general settings
* `RequestInfrastructurePropertiesInfo` - Request infrastructure properties
* `RequestNotificationChannelsInfo` - Request list of notification channels
* `RequestPasswordPoliciesConfigInfo` - Request password policies
* `RequestS3TagsInfo` - Request list of configured S3 tags
* `RequestSystemDefaultsInfo` - Request default values
* `RequestSystemSettings` - Request system settings
* `UpdateSystemSettings` - Update system settings

### downloads

* `DownloadAvatar` - Download avatar
* `DownloadFileViaToken` - Download file
* `DownloadFileViaToken1` - Download file
* `DownloadZipArchiveViaToken` - Download ZIP archive

### eventlog

* `RequestAuditNodeUserData` - Request node assigned users with permissions
* `RequestLogEventsAsJSON` - Request system events
* `RequestLogOperations` - Request allowed Log Operations

### groups

* `AddGroupMembers` - Add group members
* `CreateGroup` - Create new user group
* `RemoveGroup` - Remove user group
* `RemoveGroupMembers` - Remove group members
* `RequestGroup` - Request user group
* `RequestGroupMembers` - Request group member users or / and users who can become a member
* `RequestGroupRoles` - Request list of roles assigned to the group
* `RequestGroupRooms` - Request rooms granted to the group or / and rooms that can be granted
* `RequestGroups` - Request list of user groups
* `RequestLastAdminRoomsGroups` - Request rooms where the group is defined as last admin group
* `UpdateGroup` - Update user group's metadata

### nodes

* `AddFavorite` - Mark a node (room, folder or file) as favorite
* `CancelFileUpload` - Cancel file upload
* `ChangePendingAssignments` - Handle user-room assignments per group
* `CompleteFileUpload` - Complete file upload
* `CompleteS3FileUpload` - Complete S3 file upload
* `ConfigureRoom` - Configure room
* `CopyNodes` - Copy node(s)
* `CreateAndPreserveRoomRescueKeyPair` - Create key pair and preserve copy of old private key
* `CreateFileUploadChannel` - Create new file upload channel
* `CreateFolder` - Create new folder
* `CreateNodeComment` - Create node comment
* `CreateRoom` - Create new room
* `DownloadFile` - Download file
* `DownloadFile1` - Download file
* `DownloadZipArchive` - Download files / folders as ZIP archive
* `EmptyDeletedNodes` - Empty recycle bin
* `EncryptRoom` - Encrypt room
* `GenerateDownloadURL` - Generate download URL
* `GenerateDownloadURLForZipArchive` - Generate download URL for ZIP download
* `GeneratePresignedUrlsFiles` - Generate presigned URLs for S3 file upload
* `HandleRoomWebhookAssignments` - Assign or unassign webhooks to room
* `MoveNodes` - Move node(s)
* `RemoveDeletedNodes` - Remove nodes from recycle bin
* `RemoveFavorite` - Unmark a node (room, folder or file) as favorite
* `RemoveNode` - Remove node
* `RemoveNodeComment` - Remove node comment
* `RemoveNodes` - Remove nodes
* `RemoveRoomRescueKeyPair` - Remove rooms's rescue key pair
* `RequestDeletedNode` - Request deleted node
* `RequestDeletedNodeVersions` - Request deleted versions of nodes
* `RequestDeletedNodesSummary` - Request list of deleted nodes
* `RequestListOfWebhooksForRoom` - Request list of webhooks that are assigned or can be assigned to this room
* `RequestMissingFileKeys` - Request files without user's file key
* `RequestNode` - Request node
* `RequestNodeComments` - Request list of node comments
* `RequestNodeParents` - Request list of parent nodes
* `RequestNodes` - Request list of nodes
* `RequestPendingAssignments` - Request user-room assignments per group
* `RequestRoomActivitiesLogAsJSON` - Request events of a room
* `RequestRoomActivitiesLogAsJSONOld` - Request events of a room
* `RequestRoomGroups` - Request room granted group(s) or / and group(s) that can be granted
* `RequestRoomRescueKey` - Request room rescue key
* `RequestRoomRescueKeyPair` - Request room rescue key
* `RequestRoomRescueKeyPairs` - Request all room rescue key pairs
* `RequestRoomS3Tags` - Request list of all assigned S3 tags to the room
* `RequestRoomUsers` - Request room granted user(s) or / and user(s) that can be granted
* `RequestSystemRescueKey` - Request system rescue key
* `RequestUploadStatusFiles` - Request status of S3 file upload
* `RequestUserFileKey` - Request user's file key
* `RestoreNodes` - Restore deleted nodes
* `RevokeRoomGroups` - Revoke granted group(s) from room
* `RevokeRoomUsers` - Revoke granted user(s) from room
* `SearchNodes` - Search nodes
* `SetRoomRescueKeyPair` - Set room's rescue key pair
* `SetRoomS3Tags` - Set S3 tags for a room
* `SetUserFileKeys` - Set file keys for a list of users and files
* `UpdateFavorites` - Mark or unmark a list of nodes (room, folder or file) as favorite
* `UpdateFile` - Updates a file’s metadata
* `UpdateFiles` - Updates a list of  file’s metadata
* `UpdateFolder` - Updates folder’s metadata
* `UpdateNodeComment` - Edit node comment
* `UpdateRoom` - Updates room’s metadata
* `UpdateRoomGroups` - Add or change room granted group(s)
* `UpdateRoomUsers` - Add or change room granted user(s)
* `UploadFileAsMultipart` - Upload file

### provisioning

* `CreateCustomer` - Create customer
* `CreateTenantWebhook` - Create tenant webhook
* `RemoveCustomer` - Remove customer
* `RemoveCustomerAttribute` - Remove customer attribute
* `RemoveTenantWebhook` - Remove tenant webhook
* `RequestCustomer` - Get customer
* `RequestCustomerAttributes` - Request customer attributes
* `RequestCustomerUsers` - Request list of customer users
* `RequestCustomers` - Request list of customers
* `RequestListOfEventTypesForTenant` - Request list of event types
* `RequestListOfTenantWebhooks` - Request list of tenant webhooks
* `RequestTenantWebhook` - Request tenant webhook
* `ResetTenantWebhookLifetime` - Reset tenant webhook lifetime
* `SetCustomerAttributes` - Set customer attributes
* `UpdateCustomer` - Update customer
* `UpdateCustomerAttributes` - Add or edit customer attributes
* `UpdateTenantWebhook` - Update tenant webhook

### public

* `CancelFileUploadViaShare` - Cancel file upload
* `CompleteFileUploadViaShare` - Complete file upload
* `CompleteS3FileUploadViaShare` - Complete S3 file upload
* `CreateShareUploadChannel` - Create new file upload channel
* `DownloadFileViaTokenPublic` - Download file with token
* `DownloadFileViaTokenPublic1` - Download file with token
* `GenerateDownloadURLPublic` - Generate download URL
* `GeneratePresignedUrlsPublic` - Generate presigned URLs for S3 file upload
* `RequestActiveDirectoryAuthInfo` - Request Active Directory authentication information
* `RequestOpenIDAuthInfo` - Request OpenID Connect provider authentication information
* `RequestPublicDownloadShareInfo` - Request public Download Share information
* `RequestPublicUploadShareInfo` - Request public Upload Share information
* `RequestSoftwareVersion` - Request software version information
* `RequestSystemInfo` - Request system information
* `RequestSystemTime` - Request system time
* `RequestThirdPartyDependencies` - Request third-party software dependencies
* `RequestUploadStatusPublic` - Request status of S3 file upload
* `UploadFileAsMultipartPublic1` - Upload file

### resources

* `RequestSubscriptionScopes` - Request list of subscription scopes
* `RequestUserAvatar` - Request user avatar

### roles

* `AddRoleGroups` - Assign group(s) to the role
* `AddRoleUsers` - Assign user(s) to the role
* `RequestRoleGroups` - Request groups with specific role
* `RequestRoleUsers` - Request users with specific role
* `RequestRoles` - Request all roles with assigned rights
* `RevokeRoleGroups` - Revoke granted role from group(s)
* `RevokeRoleUsers` - Revoke granted role from user(s)

### settings

* `CreateAndPreserveKeyPair` - Create system rescue key pair and preserve copy of old private key
* `CreateWebhook` - Create webhook
* `RemoveSystemRescueKeyPair` - Remove system rescue key pair
* `RemoveWebhook` - Remove webhook
* `RequestAllSystemRescueKeyPairs` - Request all system rescue key pairs
* `RequestListOfEventTypesForConfigManager` - Request list of event types
* `RequestListOfWebhooks` - Request list of webhooks
* `RequestNotificationChannels` - Request list of notification channels
* `RequestSettings` - Request customer settings
* `RequestSystemRescueKeyPair` - Request system rescue key pair
* `RequestWebhook` - Request webhook
* `ResetWebhookLifetime` - Reset webhook lifetime
* `SetSettings` - Set customer settings
* `SetSystemRescueKeyPair` - Activate client-side encryption for customer
* `ToggleNotificationChannels` - Toggle notification channels
* `UpdateWebhook` - Update webhook

### shares

* `CreateDownloadShare` - Create new Download Share
* `CreateUploadShare` - Create new Upload Share
* `DeleteDownloadShares` - Remove Download Shares
* `DeleteUploadShares` - Remove Upload Shares
* `RemoveDownloadShare` - Remove Download Share
* `RemoveUploadShare` - Remove Upload Share
* `RequestDownloadShare` - Request Download Share
* `RequestDownloadShareQr` - Request Download Share via QR Code
* `RequestDownloadShares` - Request list of Download Shares
* `RequestUploadShare` - Request Upload Share
* `RequestUploadShareQr` - Request Upload Share via QR Code
* `RequestUploadShares` - Request list of Upload Shares
* `SendDownloadShareLinkViaEmail` - Send an existing Download Share link via email
* `SendUploadShareLinkViaEmail` - Send an existing Upload Share link via email
* `UpdateDownloadShare` - Update Download Share
* `UpdateDownloadShares` - Update a list of Download Shares
* `UpdateUploadShare` - Update Upload Share
* `UpdateUploadShares` - Update List of Upload Shares

### syslog

* `RequestAuditNodeUserDataSyslog` - Request nodes assigned users with permissions
* `RequestLogOperationsSyslog` - Request allowed log operations
* `RequestSyslogEvents` - Request system events

### system-auth-config

* `CreateAdConfig` - Create Active Directory configuration
* `CreateOAuthClient` - Create OAuth client
* `CreateOpenIDIdpConfig` - Create OpenID Connect IDP configuration
* `CreateRadiusConfig` - Create RADIUS configuration
* `RemoveAdConfig` - Remove Active Directory configuration
* `RemoveOAuthClient` - Remove OAuth client
* `RemoveOpenIDIdpConfig` - Remove OpenID Connect IDP configuration
* `RemoveRadiusConfig` - Remove RADIUS configuration
* `RequestAdConfig` - Request Active Directory configuration
* `RequestAdConfigs` - Request list of Active Directory configurations
* `RequestOAuthClient` - Request OAuth client
* `RequestOAuthClients` - Request list of OAuth clients
* `RequestOpenIDIdpConfig` - Request OpenID Connect IDP configuration
* `RequestOpenIDIdpConfigs` - Request list of OpenID Connect IDP configurations
* `RequestRadiusConfig` - Request RADIUS configuration
* `TestAdConfig` - Test Active Directory configuration
* `TestRadiusConfig` - Test RADIUS server availability
* `UpdateAdConfig` - Update Active Directory configuration
* `UpdateOAuthClient` - Update OAuth client
* `UpdateOpenIDIdpConfig` - Update OpenID Connect IDP configuration
* `UpdateRadiusConfig` - Update RADIUS configuration

### system-policies-config

* `ChangePasswordPoliciesConfig` - Change password policies
* `EnforceLoginPasswordChange` - Enforce login password change for all users
* `RequestPasswordPoliciesConfig` - Request password policies
* `RequestPasswordPoliciesForPasswordType` - Request password policies for a certain password type

### system-settings-config

* `RequestAuthConfig` - Request authentication settings
* `RequestEventlogConfig` - Request eventlog settings
* `RequestGeneralSettings` - Request general settings
* `RequestInfrastructureProperties` - Request infrastructure properties
* `RequestSyslogConfig` - Request syslog settings
* `RequestSystemDefaults` - Request system defaults
* `UpdateAuthConfig` - Update authentication settings
* `UpdateEventlogConfig` - Update eventlog settings
* `UpdateGeneralSettings` - Update general settings
* `UpdateSyslogConfig` - Update syslog settings
* `UpdateSystemDefaults` - Update system defaults

### system-storage-config

* `CreateS3Config` - Create S3 storage configuration
* `CreateS3Tag` - Create S3 tag
* `RemoveS3Tag` - Remove S3 tag
* `Request3Config` - Request S3 storage configuration
* `RequestS3Tag` - Request S3 tag
* `RequestS3TagList` - Request list of configured S3 tags
* `UpdateS3Config` - Update S3 storage configuration

### uploads

* `CancelFileUploadByToken` - Cancel file upload
* `CompleteFileUploadByToken` - Complete file upload
* `UploadFileByTokenAsBinary1` - Upload file

### user

* `ChangeUserPassword` - Change user's password
* `CreateAndPreserveUserKeyPair` - Create key pair and preserve copy of old private key
* `EnableCustomerEncryption` - Activate client-side encryption for customer
* `ListDownloadShareSubscriptions` - List Download Share subscriptions
* `ListNodeSubscriptions` - List node subscriptions
* `ListUploadShareSubscriptions` - List Upload Share subscriptions
* `Logout` - Invalidate authentication token
* `PingUser` - (authenticated) Ping
* `RemoveOAuthApproval` - Remove OAuth client approval
* `RemoveOAuthAuthorization` - Remove a OAuth authorization
* `RemoveOAuthAuthorizations` - Remove all OAuth authorizations of a client
* `RemoveProfileAttribute` - Remove user profile attribute
* `RemoveUserKeyPair` - Remove user's key pair
* `RequestAvatar` - Request avatar
* `RequestCustomerInfo` - Request customer information for user
* `RequestCustomerKeyPair` - Request customer's key pair
* `RequestListOfNotificationConfigs` - Request list of notification configurations
* `RequestOAuthApprovals` - Request list of OAuth client approvals
* `RequestOAuthAuthorizations` - Request list of OAuth client authorizations
* `RequestProfileAttributes` - Request user profile attributes
* `RequestUserInfo` - Request user account information
* `RequestUserKeyPair` - Request user's key pair
* `RequestUserKeyPairs` - Request all user key pairs
* `ResetAvatar` - Reset avatar
* `SetProfileAttributes` - Set user profile attributes
* `SetUserKeyPair` - Set user's key pair
* `SubscribeDownloadShare` - Subscribe Download Share for notifications
* `SubscribeDownloadShares` - Subscribe or Unsubscribe a List of Download Shares for notifications
* `SubscribeNode` - Subscribe node for notifications
* `SubscribeUploadShare` - Subscribe Upload Share for notifications
* `SubscribeUploadShares` - Subscribe or Unsubscribe a List of Upload Shares for notifications
* `UnsubscribeDownloadShare` - Unsubscribe Download Share from notifications
* `UnsubscribeNode` - Unsubscribe node from notifications
* `UnsubscribeUploadShare` - Unsubscribe Upload Share from notifications
* `UpdateNodeSubscriptions` - Subscribe or Unsubscribe a List of nodes for notifications
* `UpdateNotificationConfig` - Update notification configuration
* `UpdateProfileAttributes` - Add or edit user profile attributes
* `UpdateUserAccount` - Update user account
* `UploadAvatarAsMultipart` - Change avatar

### users

* `CreateUser` - Create new user
* `RemoveUser` - Remove user
* `RemoveUserAttribute` - Remove custom user attribute
* `RequestLastAdminRoomsUsers` - Request rooms where the user is last admin
* `RequestUser` - Request user
* `RequestUserAttributes` - Request custom user attributes
* `RequestUserGroups` - Request groups that user is a member of or / and can become a member
* `RequestUserRoles` - Request user's granted roles
* `RequestUsers` - Request users
* `RequestUsersRooms` - Request rooms granted to the user or / and rooms that can be granted
* `SetUserAttributes` - Set custom user attributes
* `UpdateUser` - Update user's metadata
* `UpdateUserAttributes` - Add or edit custom user attributes

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
