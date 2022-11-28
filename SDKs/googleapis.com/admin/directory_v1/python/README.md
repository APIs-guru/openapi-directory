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
    
req = operations.DirectoryAspsDeleteRequest(
    security=operations.DirectoryAspsDeleteSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.DirectoryAspsDeletePathParams(
        code_id=606334940990121597,
        user_key="voluptatum",
    ),
    query_params=operations.DirectoryAspsDeleteQueryParams(
        dollar_xgafv="2",
        access_token="repudiandae",
        alt="proto",
        callback="aut",
        fields="saepe",
        key="optio",
        oauth_token="animi",
        pretty_print=False,
        quota_user="ut",
        upload_type="fugiat",
        upload_protocol="illum",
    ),
)
    
res = s.asps.directory_asps_delete(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### asps

* `directory_asps_delete` - Deletes an ASP issued by a user.
* `directory_asps_get` - Gets information about an ASP issued by a user.
* `directory_asps_list` - Lists the ASPs issued by a user.

### channels

* `admin_channels_stop` - Stops watching resources through this channel.

### chromeosdevices

* `directory_chromeosdevices_action` - Takes an action that affects a Chrome OS Device. This includes deprovisioning, disabling, and re-enabling devices. *Warning:* * Deprovisioning a device will stop device policy syncing and remove device-level printers. After a device is deprovisioned, it must be wiped before it can be re-enrolled. * Lost or stolen devices should use the disable action. * Re-enabling a disabled device will consume a device license. If you do not have sufficient licenses available when completing the re-enable action, you will receive an error. For more information about deprovisioning and disabling devices, visit the [help center](https://support.google.com/chrome/a/answer/3523633).
* `directory_chromeosdevices_get` - Retrieves a Chrome OS device's properties.
* `directory_chromeosdevices_list` - Retrieves a paginated list of Chrome OS devices within an account.
* `directory_chromeosdevices_move_devices_to_ou` - Moves or inserts multiple Chrome OS devices to an organizational unit. You can move up to 50 devices at once.
* `directory_chromeosdevices_patch` - Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* `directory_chromeosdevices_update` - Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`.

### customer

* `admin_customer_devices_chromeos_commands_get` - Gets command data a specific command issued to the device.
* `admin_customer_devices_chromeos_issue_command` - Issues a command for the device to execute.

### customers

* `admin_customers_chrome_print_servers_batch_create_print_servers` - Creates multiple print servers.
* `admin_customers_chrome_print_servers_batch_delete_print_servers` - Deletes multiple print servers.
* `admin_customers_chrome_print_servers_create` - Creates a print server.
* `admin_customers_chrome_print_servers_delete` - Deletes a print server.
* `admin_customers_chrome_print_servers_get` - Returns a print server's configuration.
* `admin_customers_chrome_print_servers_list` - Lists print server configurations.
* `admin_customers_chrome_print_servers_patch` - Updates a print server's configuration.
* `admin_customers_chrome_printers_batch_create_printers` - Creates printers under given Organization Unit.
* `admin_customers_chrome_printers_batch_delete_printers` - Deletes printers in batch.
* `admin_customers_chrome_printers_create` - Creates a printer under given Organization Unit.
* `admin_customers_chrome_printers_list` - List printers configs.
* `admin_customers_chrome_printers_list_printer_models` - Lists the supported printer models.
* `directory_customers_get` - Retrieves a customer.
* `directory_customers_patch` - Patches a customer.
* `directory_customers_update` - Updates a customer.

### domainAliases

* `directory_domain_aliases_delete` - Deletes a domain Alias of the customer.
* `directory_domain_aliases_get` - Retrieves a domain alias of the customer.
* `directory_domain_aliases_insert` - Inserts a domain alias of the customer.
* `directory_domain_aliases_list` - Lists the domain aliases of the customer.

### domains

* `directory_domains_delete` - Deletes a domain of the customer.
* `directory_domains_get` - Retrieves a domain of the customer.
* `directory_domains_insert` - Inserts a domain of the customer.
* `directory_domains_list` - Lists the domains of the customer.

### groups

* `directory_groups_aliases_delete` - Removes an alias.
* `directory_groups_aliases_insert` - Adds an alias for the group.
* `directory_groups_aliases_list` - Lists all aliases for a group.
* `directory_groups_delete` - Deletes a group.
* `directory_groups_get` - Retrieves a group's properties.
* `directory_groups_insert` - Creates a group.
* `directory_groups_list` - Retrieves all groups of a domain or of a user given a userKey (paginated).
* `directory_groups_patch` - Updates a group's properties. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* `directory_groups_update` - Updates a group's properties.

### members

* `directory_members_delete` - Removes a member from a group.
* `directory_members_get` - Retrieves a group member's properties.
* `directory_members_has_member` - Checks whether the given user is a member of the group. Membership can be direct or nested, but if nested, the `memberKey` and `groupKey` must be entities in the same domain or an `Invalid input` error is returned. To check for nested memberships that include entities outside of the group's domain, use the [`checkTransitiveMembership()`](https://cloud.google.com/identity/docs/reference/rest/v1/groups.memberships/checkTransitiveMembership) method in the Cloud Identity Groups API.
* `directory_members_insert` - Adds a user to the specified group.
* `directory_members_list` - Retrieves a paginated list of all members in a group.
* `directory_members_patch` - Updates the membership properties of a user in the specified group. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* `directory_members_update` - Updates the membership of a user in the specified group.

### mobiledevices

* `directory_mobiledevices_action` - Takes an action that affects a mobile device. For example, remotely wiping a device.
* `directory_mobiledevices_delete` - Removes a mobile device.
* `directory_mobiledevices_get` - Retrieves a mobile device's properties.
* `directory_mobiledevices_list` - Retrieves a paginated list of all user-owned mobile devices for an account. To retrieve a list that includes company-owned devices, use the Cloud Identity [Devices API](https://cloud.google.com/identity/docs/concepts/overview-devices) instead.

### orgunits

* `directory_orgunits_delete` - Removes an organizational unit.
* `directory_orgunits_get` - Retrieves an organizational unit.
* `directory_orgunits_insert` - Adds an organizational unit.
* `directory_orgunits_list` - Retrieves a list of all organizational units for an account.
* `directory_orgunits_patch` - Updates an organizational unit. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch)
* `directory_orgunits_update` - Updates an organizational unit.

### privileges

* `directory_privileges_list` - Retrieves a paginated list of all privileges for a customer.

### resources

* `directory_resources_buildings_delete` - Deletes a building.
* `directory_resources_buildings_get` - Retrieves a building.
* `directory_resources_buildings_insert` - Inserts a building.
* `directory_resources_buildings_list` - Retrieves a list of buildings for an account.
* `directory_resources_buildings_patch` - Patches a building.
* `directory_resources_buildings_update` - Updates a building.
* `directory_resources_calendars_delete` - Deletes a calendar resource.
* `directory_resources_calendars_get` - Retrieves a calendar resource.
* `directory_resources_calendars_insert` - Inserts a calendar resource.
* `directory_resources_calendars_list` - Retrieves a list of calendar resources for an account.
* `directory_resources_calendars_patch` - Patches a calendar resource.
* `directory_resources_calendars_update` - Updates a calendar resource. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved.
* `directory_resources_features_delete` - Deletes a feature.
* `directory_resources_features_get` - Retrieves a feature.
* `directory_resources_features_insert` - Inserts a feature.
* `directory_resources_features_list` - Retrieves a list of features for an account.
* `directory_resources_features_patch` - Patches a feature.
* `directory_resources_features_rename` - Renames a feature.
* `directory_resources_features_update` - Updates a feature.

### roleAssignments

* `directory_role_assignments_delete` - Deletes a role assignment.
* `directory_role_assignments_get` - Retrieves a role assignment.
* `directory_role_assignments_insert` - Creates a role assignment.
* `directory_role_assignments_list` - Retrieves a paginated list of all roleAssignments.

### roles

* `directory_roles_delete` - Deletes a role.
* `directory_roles_get` - Retrieves a role.
* `directory_roles_insert` - Creates a role.
* `directory_roles_list` - Retrieves a paginated list of all the roles in a domain.
* `directory_roles_patch` - Patches a role.
* `directory_roles_update` - Updates a role.

### schemas

* `directory_schemas_delete` - Deletes a schema.
* `directory_schemas_get` - Retrieves a schema.
* `directory_schemas_insert` - Creates a schema.
* `directory_schemas_list` - Retrieves all schemas for a customer.
* `directory_schemas_patch` - Patches a schema.
* `directory_schemas_update` - Updates a schema.

### tokens

* `directory_tokens_delete` - Deletes all access tokens issued by a user for an application.
* `directory_tokens_get` - Gets information about an access token issued by a user.
* `directory_tokens_list` - Returns the set of tokens specified user has issued to 3rd party applications.

### twoStepVerification

* `directory_two_step_verification_turn_off` - Turns off 2-Step Verification for user.

### users

* `directory_users_aliases_delete` - Removes an alias.
* `directory_users_aliases_insert` - Adds an alias.
* `directory_users_aliases_list` - Lists all aliases for a user.
* `directory_users_aliases_watch` - Watches for changes in users list.
* `directory_users_delete` - Deletes a user.
* `directory_users_get` - Retrieves a user.
* `directory_users_insert` - Creates a user.
* `directory_users_list` - Retrieves a paginated list of either deleted users or all users in a domain.
* `directory_users_make_admin` - Makes a user a super administrator.
* `directory_users_patch` - Updates a user using patch semantics. The update method should be used instead, since it also supports patch semantics and has better performance. This method is unable to clear fields that contain repeated objects (`addresses`, `phones`, etc). Use the update method instead.
* `directory_users_photos_delete` - Removes the user's photo.
* `directory_users_photos_get` - Retrieves the user's photo.
* `directory_users_photos_patch` - Adds a photo for the user. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* `directory_users_photos_update` - Adds a photo for the user.
* `directory_users_sign_out` - Signs a user out of all web and device sessions and reset their sign-in cookies. User will have to sign in by authenticating again.
* `directory_users_undelete` - Undeletes a deleted user.
* `directory_users_update` - Updates a user. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved, and fields set to `null` will be cleared.
* `directory_users_watch` - Watches for changes in users list.

### verificationCodes

* `directory_verification_codes_generate` - Generates new backup verification codes for the user.
* `directory_verification_codes_invalidate` - Invalidates the current backup verification codes for the user.
* `directory_verification_codes_list` - Returns the current set of valid backup verification codes for the specified user.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
