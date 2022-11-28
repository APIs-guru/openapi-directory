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
    
    req := operations.DirectoryAspsDeleteRequest{
        Security: operations.DirectoryAspsDeleteSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DirectoryAspsDeletePathParams{
            CodeID: 606334940990121597,
            UserKey: "voluptatum",
        },
        QueryParams: operations.DirectoryAspsDeleteQueryParams{
            DollarXgafv: "2",
            AccessToken: "repudiandae",
            Alt: "proto",
            Callback: "aut",
            Fields: "saepe",
            Key: "optio",
            OauthToken: "animi",
            PrettyPrint: false,
            QuotaUser: "ut",
            UploadType: "fugiat",
            UploadProtocol: "illum",
        },
    }
    
    res, err := s.Asps.DirectoryAspsDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### asps

* `DirectoryAspsDelete` - Deletes an ASP issued by a user.
* `DirectoryAspsGet` - Gets information about an ASP issued by a user.
* `DirectoryAspsList` - Lists the ASPs issued by a user.

### channels

* `AdminChannelsStop` - Stops watching resources through this channel.

### chromeosdevices

* `DirectoryChromeosdevicesAction` - Takes an action that affects a Chrome OS Device. This includes deprovisioning, disabling, and re-enabling devices. *Warning:* * Deprovisioning a device will stop device policy syncing and remove device-level printers. After a device is deprovisioned, it must be wiped before it can be re-enrolled. * Lost or stolen devices should use the disable action. * Re-enabling a disabled device will consume a device license. If you do not have sufficient licenses available when completing the re-enable action, you will receive an error. For more information about deprovisioning and disabling devices, visit the [help center](https://support.google.com/chrome/a/answer/3523633).
* `DirectoryChromeosdevicesGet` - Retrieves a Chrome OS device's properties.
* `DirectoryChromeosdevicesList` - Retrieves a paginated list of Chrome OS devices within an account.
* `DirectoryChromeosdevicesMoveDevicesToOu` - Moves or inserts multiple Chrome OS devices to an organizational unit. You can move up to 50 devices at once.
* `DirectoryChromeosdevicesPatch` - Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* `DirectoryChromeosdevicesUpdate` - Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`.

### customer

* `AdminCustomerDevicesChromeosCommandsGet` - Gets command data a specific command issued to the device.
* `AdminCustomerDevicesChromeosIssueCommand` - Issues a command for the device to execute.

### customers

* `AdminCustomersChromePrintServersBatchCreatePrintServers` - Creates multiple print servers.
* `AdminCustomersChromePrintServersBatchDeletePrintServers` - Deletes multiple print servers.
* `AdminCustomersChromePrintServersCreate` - Creates a print server.
* `AdminCustomersChromePrintServersDelete` - Deletes a print server.
* `AdminCustomersChromePrintServersGet` - Returns a print server's configuration.
* `AdminCustomersChromePrintServersList` - Lists print server configurations.
* `AdminCustomersChromePrintServersPatch` - Updates a print server's configuration.
* `AdminCustomersChromePrintersBatchCreatePrinters` - Creates printers under given Organization Unit.
* `AdminCustomersChromePrintersBatchDeletePrinters` - Deletes printers in batch.
* `AdminCustomersChromePrintersCreate` - Creates a printer under given Organization Unit.
* `AdminCustomersChromePrintersList` - List printers configs.
* `AdminCustomersChromePrintersListPrinterModels` - Lists the supported printer models.
* `DirectoryCustomersGet` - Retrieves a customer.
* `DirectoryCustomersPatch` - Patches a customer.
* `DirectoryCustomersUpdate` - Updates a customer.

### domainAliases

* `DirectoryDomainAliasesDelete` - Deletes a domain Alias of the customer.
* `DirectoryDomainAliasesGet` - Retrieves a domain alias of the customer.
* `DirectoryDomainAliasesInsert` - Inserts a domain alias of the customer.
* `DirectoryDomainAliasesList` - Lists the domain aliases of the customer.

### domains

* `DirectoryDomainsDelete` - Deletes a domain of the customer.
* `DirectoryDomainsGet` - Retrieves a domain of the customer.
* `DirectoryDomainsInsert` - Inserts a domain of the customer.
* `DirectoryDomainsList` - Lists the domains of the customer.

### groups

* `DirectoryGroupsAliasesDelete` - Removes an alias.
* `DirectoryGroupsAliasesInsert` - Adds an alias for the group.
* `DirectoryGroupsAliasesList` - Lists all aliases for a group.
* `DirectoryGroupsDelete` - Deletes a group.
* `DirectoryGroupsGet` - Retrieves a group's properties.
* `DirectoryGroupsInsert` - Creates a group.
* `DirectoryGroupsList` - Retrieves all groups of a domain or of a user given a userKey (paginated).
* `DirectoryGroupsPatch` - Updates a group's properties. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* `DirectoryGroupsUpdate` - Updates a group's properties.

### members

* `DirectoryMembersDelete` - Removes a member from a group.
* `DirectoryMembersGet` - Retrieves a group member's properties.
* `DirectoryMembersHasMember` - Checks whether the given user is a member of the group. Membership can be direct or nested, but if nested, the `memberKey` and `groupKey` must be entities in the same domain or an `Invalid input` error is returned. To check for nested memberships that include entities outside of the group's domain, use the [`checkTransitiveMembership()`](https://cloud.google.com/identity/docs/reference/rest/v1/groups.memberships/checkTransitiveMembership) method in the Cloud Identity Groups API.
* `DirectoryMembersInsert` - Adds a user to the specified group.
* `DirectoryMembersList` - Retrieves a paginated list of all members in a group.
* `DirectoryMembersPatch` - Updates the membership properties of a user in the specified group. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* `DirectoryMembersUpdate` - Updates the membership of a user in the specified group.

### mobiledevices

* `DirectoryMobiledevicesAction` - Takes an action that affects a mobile device. For example, remotely wiping a device.
* `DirectoryMobiledevicesDelete` - Removes a mobile device.
* `DirectoryMobiledevicesGet` - Retrieves a mobile device's properties.
* `DirectoryMobiledevicesList` - Retrieves a paginated list of all user-owned mobile devices for an account. To retrieve a list that includes company-owned devices, use the Cloud Identity [Devices API](https://cloud.google.com/identity/docs/concepts/overview-devices) instead.

### orgunits

* `DirectoryOrgunitsDelete` - Removes an organizational unit.
* `DirectoryOrgunitsGet` - Retrieves an organizational unit.
* `DirectoryOrgunitsInsert` - Adds an organizational unit.
* `DirectoryOrgunitsList` - Retrieves a list of all organizational units for an account.
* `DirectoryOrgunitsPatch` - Updates an organizational unit. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch)
* `DirectoryOrgunitsUpdate` - Updates an organizational unit.

### privileges

* `DirectoryPrivilegesList` - Retrieves a paginated list of all privileges for a customer.

### resources

* `DirectoryResourcesBuildingsDelete` - Deletes a building.
* `DirectoryResourcesBuildingsGet` - Retrieves a building.
* `DirectoryResourcesBuildingsInsert` - Inserts a building.
* `DirectoryResourcesBuildingsList` - Retrieves a list of buildings for an account.
* `DirectoryResourcesBuildingsPatch` - Patches a building.
* `DirectoryResourcesBuildingsUpdate` - Updates a building.
* `DirectoryResourcesCalendarsDelete` - Deletes a calendar resource.
* `DirectoryResourcesCalendarsGet` - Retrieves a calendar resource.
* `DirectoryResourcesCalendarsInsert` - Inserts a calendar resource.
* `DirectoryResourcesCalendarsList` - Retrieves a list of calendar resources for an account.
* `DirectoryResourcesCalendarsPatch` - Patches a calendar resource.
* `DirectoryResourcesCalendarsUpdate` - Updates a calendar resource. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved.
* `DirectoryResourcesFeaturesDelete` - Deletes a feature.
* `DirectoryResourcesFeaturesGet` - Retrieves a feature.
* `DirectoryResourcesFeaturesInsert` - Inserts a feature.
* `DirectoryResourcesFeaturesList` - Retrieves a list of features for an account.
* `DirectoryResourcesFeaturesPatch` - Patches a feature.
* `DirectoryResourcesFeaturesRename` - Renames a feature.
* `DirectoryResourcesFeaturesUpdate` - Updates a feature.

### roleAssignments

* `DirectoryRoleAssignmentsDelete` - Deletes a role assignment.
* `DirectoryRoleAssignmentsGet` - Retrieves a role assignment.
* `DirectoryRoleAssignmentsInsert` - Creates a role assignment.
* `DirectoryRoleAssignmentsList` - Retrieves a paginated list of all roleAssignments.

### roles

* `DirectoryRolesDelete` - Deletes a role.
* `DirectoryRolesGet` - Retrieves a role.
* `DirectoryRolesInsert` - Creates a role.
* `DirectoryRolesList` - Retrieves a paginated list of all the roles in a domain.
* `DirectoryRolesPatch` - Patches a role.
* `DirectoryRolesUpdate` - Updates a role.

### schemas

* `DirectorySchemasDelete` - Deletes a schema.
* `DirectorySchemasGet` - Retrieves a schema.
* `DirectorySchemasInsert` - Creates a schema.
* `DirectorySchemasList` - Retrieves all schemas for a customer.
* `DirectorySchemasPatch` - Patches a schema.
* `DirectorySchemasUpdate` - Updates a schema.

### tokens

* `DirectoryTokensDelete` - Deletes all access tokens issued by a user for an application.
* `DirectoryTokensGet` - Gets information about an access token issued by a user.
* `DirectoryTokensList` - Returns the set of tokens specified user has issued to 3rd party applications.

### twoStepVerification

* `DirectoryTwoStepVerificationTurnOff` - Turns off 2-Step Verification for user.

### users

* `DirectoryUsersAliasesDelete` - Removes an alias.
* `DirectoryUsersAliasesInsert` - Adds an alias.
* `DirectoryUsersAliasesList` - Lists all aliases for a user.
* `DirectoryUsersAliasesWatch` - Watches for changes in users list.
* `DirectoryUsersDelete` - Deletes a user.
* `DirectoryUsersGet` - Retrieves a user.
* `DirectoryUsersInsert` - Creates a user.
* `DirectoryUsersList` - Retrieves a paginated list of either deleted users or all users in a domain.
* `DirectoryUsersMakeAdmin` - Makes a user a super administrator.
* `DirectoryUsersPatch` - Updates a user using patch semantics. The update method should be used instead, since it also supports patch semantics and has better performance. This method is unable to clear fields that contain repeated objects (`addresses`, `phones`, etc). Use the update method instead.
* `DirectoryUsersPhotosDelete` - Removes the user's photo.
* `DirectoryUsersPhotosGet` - Retrieves the user's photo.
* `DirectoryUsersPhotosPatch` - Adds a photo for the user. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* `DirectoryUsersPhotosUpdate` - Adds a photo for the user.
* `DirectoryUsersSignOut` - Signs a user out of all web and device sessions and reset their sign-in cookies. User will have to sign in by authenticating again.
* `DirectoryUsersUndelete` - Undeletes a deleted user.
* `DirectoryUsersUpdate` - Updates a user. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved, and fields set to `null` will be cleared.
* `DirectoryUsersWatch` - Watches for changes in users list.

### verificationCodes

* `DirectoryVerificationCodesGenerate` - Generates new backup verification codes for the user.
* `DirectoryVerificationCodesInvalidate` - Invalidates the current backup verification codes for the user.
* `DirectoryVerificationCodesList` - Returns the current set of valid backup verification codes for the specified user.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
