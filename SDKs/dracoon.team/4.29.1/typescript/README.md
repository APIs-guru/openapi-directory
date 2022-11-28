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
import { CompleteOpenIdLoginRequest, CompleteOpenIdLoginResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  }
));
    
const req: CompleteOpenIdLoginRequest = {
  queryParams: {
    code: "excepturi",
    idToken: "voluptatem",
    state: "magni",
  },
};

sdk.auth.completeOpenIdLogin(req).then((res: CompleteOpenIdLoginResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### auth

* `completeOpenIdLogin` - Complete OpenID Connect authentication
* `initiateOpenIdLogin` - Initiate OpenID Connect authentication
* `login` - Authenticate user (Login)
* `ping` - Ping
* `recoverUserName` - Recover username
* `requestOpenIdAuthResources` - Request OpenID Connect authentication resources
* `requestPasswordReset` - Request password reset
* `resetPassword` - Reset password
* `validateResetPasswordToken` - Validate information for password reset

### config

* `requestAlgorithms` - Request algorithms
* `requestGeneralSettingsInfo` - Request general settings
* `requestInfrastructurePropertiesInfo` - Request infrastructure properties
* `requestNotificationChannelsInfo` - Request list of notification channels
* `requestPasswordPoliciesConfigInfo` - Request password policies
* `requestS3TagsInfo` - Request list of configured S3 tags
* `requestSystemDefaultsInfo` - Request default values
* `requestSystemSettings` - Request system settings
* `updateSystemSettings` - Update system settings

### downloads

* `downloadAvatar` - Download avatar
* `downloadFileViaToken` - Download file
* `downloadFileViaToken1` - Download file
* `downloadZipArchiveViaToken` - Download ZIP archive

### eventlog

* `requestAuditNodeUserData` - Request node assigned users with permissions
* `requestLogEventsAsJson` - Request system events
* `requestLogOperations` - Request allowed Log Operations

### groups

* `addGroupMembers` - Add group members
* `createGroup` - Create new user group
* `removeGroup` - Remove user group
* `removeGroupMembers` - Remove group members
* `requestGroup` - Request user group
* `requestGroupMembers` - Request group member users or / and users who can become a member
* `requestGroupRoles` - Request list of roles assigned to the group
* `requestGroupRooms` - Request rooms granted to the group or / and rooms that can be granted
* `requestGroups` - Request list of user groups
* `requestLastAdminRoomsGroups` - Request rooms where the group is defined as last admin group
* `updateGroup` - Update user group's metadata

### nodes

* `addFavorite` - Mark a node (room, folder or file) as favorite
* `cancelFileUpload` - Cancel file upload
* `changePendingAssignments` - Handle user-room assignments per group
* `completeFileUpload` - Complete file upload
* `completeS3FileUpload` - Complete S3 file upload
* `configureRoom` - Configure room
* `copyNodes` - Copy node(s)
* `createAndPreserveRoomRescueKeyPair` - Create key pair and preserve copy of old private key
* `createFileUploadChannel` - Create new file upload channel
* `createFolder` - Create new folder
* `createNodeComment` - Create node comment
* `createRoom` - Create new room
* `downloadFile` - Download file
* `downloadFile1` - Download file
* `downloadZipArchive` - Download files / folders as ZIP archive
* `emptyDeletedNodes` - Empty recycle bin
* `encryptRoom` - Encrypt room
* `generateDownloadUrl` - Generate download URL
* `generateDownloadUrlForZipArchive` - Generate download URL for ZIP download
* `generatePresignedUrlsFiles` - Generate presigned URLs for S3 file upload
* `handleRoomWebhookAssignments` - Assign or unassign webhooks to room
* `moveNodes` - Move node(s)
* `removeDeletedNodes` - Remove nodes from recycle bin
* `removeFavorite` - Unmark a node (room, folder or file) as favorite
* `removeNode` - Remove node
* `removeNodeComment` - Remove node comment
* `removeNodes` - Remove nodes
* `removeRoomRescueKeyPair` - Remove rooms's rescue key pair
* `requestDeletedNode` - Request deleted node
* `requestDeletedNodeVersions` - Request deleted versions of nodes
* `requestDeletedNodesSummary` - Request list of deleted nodes
* `requestListOfWebhooksForRoom` - Request list of webhooks that are assigned or can be assigned to this room
* `requestMissingFileKeys` - Request files without user's file key
* `requestNode` - Request node
* `requestNodeComments` - Request list of node comments
* `requestNodeParents` - Request list of parent nodes
* `requestNodes` - Request list of nodes
* `requestPendingAssignments` - Request user-room assignments per group
* `requestRoomActivitiesLogAsJson` - Request events of a room
* `requestRoomActivitiesLogAsJsonOld` - Request events of a room
* `requestRoomGroups` - Request room granted group(s) or / and group(s) that can be granted
* `requestRoomRescueKey` - Request room rescue key
* `requestRoomRescueKeyPair` - Request room rescue key
* `requestRoomRescueKeyPairs` - Request all room rescue key pairs
* `requestRoomS3Tags` - Request list of all assigned S3 tags to the room
* `requestRoomUsers` - Request room granted user(s) or / and user(s) that can be granted
* `requestSystemRescueKey` - Request system rescue key
* `requestUploadStatusFiles` - Request status of S3 file upload
* `requestUserFileKey` - Request user's file key
* `restoreNodes` - Restore deleted nodes
* `revokeRoomGroups` - Revoke granted group(s) from room
* `revokeRoomUsers` - Revoke granted user(s) from room
* `searchNodes` - Search nodes
* `setRoomRescueKeyPair` - Set room's rescue key pair
* `setRoomS3Tags` - Set S3 tags for a room
* `setUserFileKeys` - Set file keys for a list of users and files
* `updateFavorites` - Mark or unmark a list of nodes (room, folder or file) as favorite
* `updateFile` - Updates a file’s metadata
* `updateFiles` - Updates a list of  file’s metadata
* `updateFolder` - Updates folder’s metadata
* `updateNodeComment` - Edit node comment
* `updateRoom` - Updates room’s metadata
* `updateRoomGroups` - Add or change room granted group(s)
* `updateRoomUsers` - Add or change room granted user(s)
* `uploadFileAsMultipart` - Upload file

### provisioning

* `createCustomer` - Create customer
* `createTenantWebhook` - Create tenant webhook
* `removeCustomer` - Remove customer
* `removeCustomerAttribute` - Remove customer attribute
* `removeTenantWebhook` - Remove tenant webhook
* `requestCustomer` - Get customer
* `requestCustomerAttributes` - Request customer attributes
* `requestCustomerUsers` - Request list of customer users
* `requestCustomers` - Request list of customers
* `requestListOfEventTypesForTenant` - Request list of event types
* `requestListOfTenantWebhooks` - Request list of tenant webhooks
* `requestTenantWebhook` - Request tenant webhook
* `resetTenantWebhookLifetime` - Reset tenant webhook lifetime
* `setCustomerAttributes` - Set customer attributes
* `updateCustomer` - Update customer
* `updateCustomerAttributes` - Add or edit customer attributes
* `updateTenantWebhook` - Update tenant webhook

### public

* `cancelFileUploadViaShare` - Cancel file upload
* `completeFileUploadViaShare` - Complete file upload
* `completeS3FileUploadViaShare` - Complete S3 file upload
* `createShareUploadChannel` - Create new file upload channel
* `downloadFileViaTokenPublic` - Download file with token
* `downloadFileViaTokenPublic1` - Download file with token
* `generateDownloadUrlPublic` - Generate download URL
* `generatePresignedUrlsPublic` - Generate presigned URLs for S3 file upload
* `requestActiveDirectoryAuthInfo` - Request Active Directory authentication information
* `requestOpenIdAuthInfo` - Request OpenID Connect provider authentication information
* `requestPublicDownloadShareInfo` - Request public Download Share information
* `requestPublicUploadShareInfo` - Request public Upload Share information
* `requestSoftwareVersion` - Request software version information
* `requestSystemInfo` - Request system information
* `requestSystemTime` - Request system time
* `requestThirdPartyDependencies` - Request third-party software dependencies
* `requestUploadStatusPublic` - Request status of S3 file upload
* `uploadFileAsMultipartPublic1` - Upload file

### resources

* `requestSubscriptionScopes` - Request list of subscription scopes
* `requestUserAvatar` - Request user avatar

### roles

* `addRoleGroups` - Assign group(s) to the role
* `addRoleUsers` - Assign user(s) to the role
* `requestRoleGroups` - Request groups with specific role
* `requestRoleUsers` - Request users with specific role
* `requestRoles` - Request all roles with assigned rights
* `revokeRoleGroups` - Revoke granted role from group(s)
* `revokeRoleUsers` - Revoke granted role from user(s)

### settings

* `createAndPreserveKeyPair` - Create system rescue key pair and preserve copy of old private key
* `createWebhook` - Create webhook
* `removeSystemRescueKeyPair` - Remove system rescue key pair
* `removeWebhook` - Remove webhook
* `requestAllSystemRescueKeyPairs` - Request all system rescue key pairs
* `requestListOfEventTypesForConfigManager` - Request list of event types
* `requestListOfWebhooks` - Request list of webhooks
* `requestNotificationChannels` - Request list of notification channels
* `requestSettings` - Request customer settings
* `requestSystemRescueKeyPair` - Request system rescue key pair
* `requestWebhook` - Request webhook
* `resetWebhookLifetime` - Reset webhook lifetime
* `setSettings` - Set customer settings
* `setSystemRescueKeyPair` - Activate client-side encryption for customer
* `toggleNotificationChannels` - Toggle notification channels
* `updateWebhook` - Update webhook

### shares

* `createDownloadShare` - Create new Download Share
* `createUploadShare` - Create new Upload Share
* `deleteDownloadShares` - Remove Download Shares
* `deleteUploadShares` - Remove Upload Shares
* `removeDownloadShare` - Remove Download Share
* `removeUploadShare` - Remove Upload Share
* `requestDownloadShare` - Request Download Share
* `requestDownloadShareQr` - Request Download Share via QR Code
* `requestDownloadShares` - Request list of Download Shares
* `requestUploadShare` - Request Upload Share
* `requestUploadShareQr` - Request Upload Share via QR Code
* `requestUploadShares` - Request list of Upload Shares
* `sendDownloadShareLinkViaEmail` - Send an existing Download Share link via email
* `sendUploadShareLinkViaEmail` - Send an existing Upload Share link via email
* `updateDownloadShare` - Update Download Share
* `updateDownloadShares` - Update a list of Download Shares
* `updateUploadShare` - Update Upload Share
* `updateUploadShares` - Update List of Upload Shares

### syslog

* `requestAuditNodeUserDataSyslog` - Request nodes assigned users with permissions
* `requestLogOperationsSyslog` - Request allowed log operations
* `requestSyslogEvents` - Request system events

### system-auth-config

* `createAdConfig` - Create Active Directory configuration
* `createOAuthClient` - Create OAuth client
* `createOpenIdIdpConfig` - Create OpenID Connect IDP configuration
* `createRadiusConfig` - Create RADIUS configuration
* `removeAdConfig` - Remove Active Directory configuration
* `removeOAuthClient` - Remove OAuth client
* `removeOpenIdIdpConfig` - Remove OpenID Connect IDP configuration
* `removeRadiusConfig` - Remove RADIUS configuration
* `requestAdConfig` - Request Active Directory configuration
* `requestAdConfigs` - Request list of Active Directory configurations
* `requestOAuthClient` - Request OAuth client
* `requestOAuthClients` - Request list of OAuth clients
* `requestOpenIdIdpConfig` - Request OpenID Connect IDP configuration
* `requestOpenIdIdpConfigs` - Request list of OpenID Connect IDP configurations
* `requestRadiusConfig` - Request RADIUS configuration
* `testAdConfig` - Test Active Directory configuration
* `testRadiusConfig` - Test RADIUS server availability
* `updateAdConfig` - Update Active Directory configuration
* `updateOAuthClient` - Update OAuth client
* `updateOpenIdIdpConfig` - Update OpenID Connect IDP configuration
* `updateRadiusConfig` - Update RADIUS configuration

### system-policies-config

* `changePasswordPoliciesConfig` - Change password policies
* `enforceLoginPasswordChange` - Enforce login password change for all users
* `requestPasswordPoliciesConfig` - Request password policies
* `requestPasswordPoliciesForPasswordType` - Request password policies for a certain password type

### system-settings-config

* `requestAuthConfig` - Request authentication settings
* `requestEventlogConfig` - Request eventlog settings
* `requestGeneralSettings` - Request general settings
* `requestInfrastructureProperties` - Request infrastructure properties
* `requestSyslogConfig` - Request syslog settings
* `requestSystemDefaults` - Request system defaults
* `updateAuthConfig` - Update authentication settings
* `updateEventlogConfig` - Update eventlog settings
* `updateGeneralSettings` - Update general settings
* `updateSyslogConfig` - Update syslog settings
* `updateSystemDefaults` - Update system defaults

### system-storage-config

* `createS3Config` - Create S3 storage configuration
* `createS3Tag` - Create S3 tag
* `removeS3Tag` - Remove S3 tag
* `request3Config` - Request S3 storage configuration
* `requestS3Tag` - Request S3 tag
* `requestS3TagList` - Request list of configured S3 tags
* `updateS3Config` - Update S3 storage configuration

### uploads

* `cancelFileUploadByToken` - Cancel file upload
* `completeFileUploadByToken` - Complete file upload
* `uploadFileByTokenAsBinary1` - Upload file

### user

* `changeUserPassword` - Change user's password
* `createAndPreserveUserKeyPair` - Create key pair and preserve copy of old private key
* `enableCustomerEncryption` - Activate client-side encryption for customer
* `listDownloadShareSubscriptions` - List Download Share subscriptions
* `listNodeSubscriptions` - List node subscriptions
* `listUploadShareSubscriptions` - List Upload Share subscriptions
* `logout` - Invalidate authentication token
* `pingUser` - (authenticated) Ping
* `removeOAuthApproval` - Remove OAuth client approval
* `removeOAuthAuthorization` - Remove a OAuth authorization
* `removeOAuthAuthorizations` - Remove all OAuth authorizations of a client
* `removeProfileAttribute` - Remove user profile attribute
* `removeUserKeyPair` - Remove user's key pair
* `requestAvatar` - Request avatar
* `requestCustomerInfo` - Request customer information for user
* `requestCustomerKeyPair` - Request customer's key pair
* `requestListOfNotificationConfigs` - Request list of notification configurations
* `requestOAuthApprovals` - Request list of OAuth client approvals
* `requestOAuthAuthorizations` - Request list of OAuth client authorizations
* `requestProfileAttributes` - Request user profile attributes
* `requestUserInfo` - Request user account information
* `requestUserKeyPair` - Request user's key pair
* `requestUserKeyPairs` - Request all user key pairs
* `resetAvatar` - Reset avatar
* `setProfileAttributes` - Set user profile attributes
* `setUserKeyPair` - Set user's key pair
* `subscribeDownloadShare` - Subscribe Download Share for notifications
* `subscribeDownloadShares` - Subscribe or Unsubscribe a List of Download Shares for notifications
* `subscribeNode` - Subscribe node for notifications
* `subscribeUploadShare` - Subscribe Upload Share for notifications
* `subscribeUploadShares` - Subscribe or Unsubscribe a List of Upload Shares for notifications
* `unsubscribeDownloadShare` - Unsubscribe Download Share from notifications
* `unsubscribeNode` - Unsubscribe node from notifications
* `unsubscribeUploadShare` - Unsubscribe Upload Share from notifications
* `updateNodeSubscriptions` - Subscribe or Unsubscribe a List of nodes for notifications
* `updateNotificationConfig` - Update notification configuration
* `updateProfileAttributes` - Add or edit user profile attributes
* `updateUserAccount` - Update user account
* `uploadAvatarAsMultipart` - Change avatar

### users

* `createUser` - Create new user
* `removeUser` - Remove user
* `removeUserAttribute` - Remove custom user attribute
* `requestLastAdminRoomsUsers` - Request rooms where the user is last admin
* `requestUser` - Request user
* `requestUserAttributes` - Request custom user attributes
* `requestUserGroups` - Request groups that user is a member of or / and can become a member
* `requestUserRoles` - Request user's granted roles
* `requestUsers` - Request users
* `requestUsersRooms` - Request rooms granted to the user or / and rooms that can be granted
* `setUserAttributes` - Set custom user attributes
* `updateUser` - Update user's metadata
* `updateUserAttributes` - Add or edit custom user attributes

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
