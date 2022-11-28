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
import { DirectoryAspsDeleteRequest, DirectoryAspsDeleteResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DirectoryAspsDeleteRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    codeId: 606334940990121597,
    userKey: "voluptatum",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "repudiandae",
    alt: "proto",
    callback: "aut",
    fields: "saepe",
    key: "optio",
    oauthToken: "animi",
    prettyPrint: false,
    quotaUser: "ut",
    uploadType: "fugiat",
    uploadProtocol: "illum",
  },
};

sdk.asps.directoryAspsDelete(req).then((res: DirectoryAspsDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### asps

* `directoryAspsDelete` - Deletes an ASP issued by a user.
* `directoryAspsGet` - Gets information about an ASP issued by a user.
* `directoryAspsList` - Lists the ASPs issued by a user.

### channels

* `adminChannelsStop` - Stops watching resources through this channel.

### chromeosdevices

* `directoryChromeosdevicesAction` - Takes an action that affects a Chrome OS Device. This includes deprovisioning, disabling, and re-enabling devices. *Warning:* * Deprovisioning a device will stop device policy syncing and remove device-level printers. After a device is deprovisioned, it must be wiped before it can be re-enrolled. * Lost or stolen devices should use the disable action. * Re-enabling a disabled device will consume a device license. If you do not have sufficient licenses available when completing the re-enable action, you will receive an error. For more information about deprovisioning and disabling devices, visit the [help center](https://support.google.com/chrome/a/answer/3523633).
* `directoryChromeosdevicesGet` - Retrieves a Chrome OS device's properties.
* `directoryChromeosdevicesList` - Retrieves a paginated list of Chrome OS devices within an account.
* `directoryChromeosdevicesMoveDevicesToOu` - Moves or inserts multiple Chrome OS devices to an organizational unit. You can move up to 50 devices at once.
* `directoryChromeosdevicesPatch` - Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* `directoryChromeosdevicesUpdate` - Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`.

### customer

* `adminCustomerDevicesChromeosCommandsGet` - Gets command data a specific command issued to the device.
* `adminCustomerDevicesChromeosIssueCommand` - Issues a command for the device to execute.

### customers

* `adminCustomersChromePrintServersBatchCreatePrintServers` - Creates multiple print servers.
* `adminCustomersChromePrintServersBatchDeletePrintServers` - Deletes multiple print servers.
* `adminCustomersChromePrintServersCreate` - Creates a print server.
* `adminCustomersChromePrintServersDelete` - Deletes a print server.
* `adminCustomersChromePrintServersGet` - Returns a print server's configuration.
* `adminCustomersChromePrintServersList` - Lists print server configurations.
* `adminCustomersChromePrintServersPatch` - Updates a print server's configuration.
* `adminCustomersChromePrintersBatchCreatePrinters` - Creates printers under given Organization Unit.
* `adminCustomersChromePrintersBatchDeletePrinters` - Deletes printers in batch.
* `adminCustomersChromePrintersCreate` - Creates a printer under given Organization Unit.
* `adminCustomersChromePrintersList` - List printers configs.
* `adminCustomersChromePrintersListPrinterModels` - Lists the supported printer models.
* `directoryCustomersGet` - Retrieves a customer.
* `directoryCustomersPatch` - Patches a customer.
* `directoryCustomersUpdate` - Updates a customer.

### domainAliases

* `directoryDomainAliasesDelete` - Deletes a domain Alias of the customer.
* `directoryDomainAliasesGet` - Retrieves a domain alias of the customer.
* `directoryDomainAliasesInsert` - Inserts a domain alias of the customer.
* `directoryDomainAliasesList` - Lists the domain aliases of the customer.

### domains

* `directoryDomainsDelete` - Deletes a domain of the customer.
* `directoryDomainsGet` - Retrieves a domain of the customer.
* `directoryDomainsInsert` - Inserts a domain of the customer.
* `directoryDomainsList` - Lists the domains of the customer.

### groups

* `directoryGroupsAliasesDelete` - Removes an alias.
* `directoryGroupsAliasesInsert` - Adds an alias for the group.
* `directoryGroupsAliasesList` - Lists all aliases for a group.
* `directoryGroupsDelete` - Deletes a group.
* `directoryGroupsGet` - Retrieves a group's properties.
* `directoryGroupsInsert` - Creates a group.
* `directoryGroupsList` - Retrieves all groups of a domain or of a user given a userKey (paginated).
* `directoryGroupsPatch` - Updates a group's properties. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* `directoryGroupsUpdate` - Updates a group's properties.

### members

* `directoryMembersDelete` - Removes a member from a group.
* `directoryMembersGet` - Retrieves a group member's properties.
* `directoryMembersHasMember` - Checks whether the given user is a member of the group. Membership can be direct or nested, but if nested, the `memberKey` and `groupKey` must be entities in the same domain or an `Invalid input` error is returned. To check for nested memberships that include entities outside of the group's domain, use the [`checkTransitiveMembership()`](https://cloud.google.com/identity/docs/reference/rest/v1/groups.memberships/checkTransitiveMembership) method in the Cloud Identity Groups API.
* `directoryMembersInsert` - Adds a user to the specified group.
* `directoryMembersList` - Retrieves a paginated list of all members in a group.
* `directoryMembersPatch` - Updates the membership properties of a user in the specified group. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* `directoryMembersUpdate` - Updates the membership of a user in the specified group.

### mobiledevices

* `directoryMobiledevicesAction` - Takes an action that affects a mobile device. For example, remotely wiping a device.
* `directoryMobiledevicesDelete` - Removes a mobile device.
* `directoryMobiledevicesGet` - Retrieves a mobile device's properties.
* `directoryMobiledevicesList` - Retrieves a paginated list of all user-owned mobile devices for an account. To retrieve a list that includes company-owned devices, use the Cloud Identity [Devices API](https://cloud.google.com/identity/docs/concepts/overview-devices) instead.

### orgunits

* `directoryOrgunitsDelete` - Removes an organizational unit.
* `directoryOrgunitsGet` - Retrieves an organizational unit.
* `directoryOrgunitsInsert` - Adds an organizational unit.
* `directoryOrgunitsList` - Retrieves a list of all organizational units for an account.
* `directoryOrgunitsPatch` - Updates an organizational unit. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch)
* `directoryOrgunitsUpdate` - Updates an organizational unit.

### privileges

* `directoryPrivilegesList` - Retrieves a paginated list of all privileges for a customer.

### resources

* `directoryResourcesBuildingsDelete` - Deletes a building.
* `directoryResourcesBuildingsGet` - Retrieves a building.
* `directoryResourcesBuildingsInsert` - Inserts a building.
* `directoryResourcesBuildingsList` - Retrieves a list of buildings for an account.
* `directoryResourcesBuildingsPatch` - Patches a building.
* `directoryResourcesBuildingsUpdate` - Updates a building.
* `directoryResourcesCalendarsDelete` - Deletes a calendar resource.
* `directoryResourcesCalendarsGet` - Retrieves a calendar resource.
* `directoryResourcesCalendarsInsert` - Inserts a calendar resource.
* `directoryResourcesCalendarsList` - Retrieves a list of calendar resources for an account.
* `directoryResourcesCalendarsPatch` - Patches a calendar resource.
* `directoryResourcesCalendarsUpdate` - Updates a calendar resource. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved.
* `directoryResourcesFeaturesDelete` - Deletes a feature.
* `directoryResourcesFeaturesGet` - Retrieves a feature.
* `directoryResourcesFeaturesInsert` - Inserts a feature.
* `directoryResourcesFeaturesList` - Retrieves a list of features for an account.
* `directoryResourcesFeaturesPatch` - Patches a feature.
* `directoryResourcesFeaturesRename` - Renames a feature.
* `directoryResourcesFeaturesUpdate` - Updates a feature.

### roleAssignments

* `directoryRoleAssignmentsDelete` - Deletes a role assignment.
* `directoryRoleAssignmentsGet` - Retrieves a role assignment.
* `directoryRoleAssignmentsInsert` - Creates a role assignment.
* `directoryRoleAssignmentsList` - Retrieves a paginated list of all roleAssignments.

### roles

* `directoryRolesDelete` - Deletes a role.
* `directoryRolesGet` - Retrieves a role.
* `directoryRolesInsert` - Creates a role.
* `directoryRolesList` - Retrieves a paginated list of all the roles in a domain.
* `directoryRolesPatch` - Patches a role.
* `directoryRolesUpdate` - Updates a role.

### schemas

* `directorySchemasDelete` - Deletes a schema.
* `directorySchemasGet` - Retrieves a schema.
* `directorySchemasInsert` - Creates a schema.
* `directorySchemasList` - Retrieves all schemas for a customer.
* `directorySchemasPatch` - Patches a schema.
* `directorySchemasUpdate` - Updates a schema.

### tokens

* `directoryTokensDelete` - Deletes all access tokens issued by a user for an application.
* `directoryTokensGet` - Gets information about an access token issued by a user.
* `directoryTokensList` - Returns the set of tokens specified user has issued to 3rd party applications.

### twoStepVerification

* `directoryTwoStepVerificationTurnOff` - Turns off 2-Step Verification for user.

### users

* `directoryUsersAliasesDelete` - Removes an alias.
* `directoryUsersAliasesInsert` - Adds an alias.
* `directoryUsersAliasesList` - Lists all aliases for a user.
* `directoryUsersAliasesWatch` - Watches for changes in users list.
* `directoryUsersDelete` - Deletes a user.
* `directoryUsersGet` - Retrieves a user.
* `directoryUsersInsert` - Creates a user.
* `directoryUsersList` - Retrieves a paginated list of either deleted users or all users in a domain.
* `directoryUsersMakeAdmin` - Makes a user a super administrator.
* `directoryUsersPatch` - Updates a user using patch semantics. The update method should be used instead, since it also supports patch semantics and has better performance. This method is unable to clear fields that contain repeated objects (`addresses`, `phones`, etc). Use the update method instead.
* `directoryUsersPhotosDelete` - Removes the user's photo.
* `directoryUsersPhotosGet` - Retrieves the user's photo.
* `directoryUsersPhotosPatch` - Adds a photo for the user. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* `directoryUsersPhotosUpdate` - Adds a photo for the user.
* `directoryUsersSignOut` - Signs a user out of all web and device sessions and reset their sign-in cookies. User will have to sign in by authenticating again.
* `directoryUsersUndelete` - Undeletes a deleted user.
* `directoryUsersUpdate` - Updates a user. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved, and fields set to `null` will be cleared.
* `directoryUsersWatch` - Watches for changes in users list.

### verificationCodes

* `directoryVerificationCodesGenerate` - Generates new backup verification codes for the user.
* `directoryVerificationCodesInvalidate` - Invalidates the current backup verification codes for the user.
* `directoryVerificationCodesList` - Returns the current set of valid backup verification codes for the specified user.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
