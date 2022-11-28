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
    
req = operations.AndroidenterpriseDevicesForceReportUploadRequest(
    security=operations.AndroidenterpriseDevicesForceReportUploadSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.AndroidenterpriseDevicesForceReportUploadPathParams(
        device_id="a",
        enterprise_id="minima",
        user_id="fugiat",
    ),
    query_params=operations.AndroidenterpriseDevicesForceReportUploadQueryParams(
        dollar_xgafv="2",
        access_token="sed",
        alt="json",
        callback="non",
        fields="aspernatur",
        key="quod",
        oauth_token="et",
        pretty_print=True,
        quota_user="corporis",
        upload_type="rerum",
        upload_protocol="ut",
    ),
)
    
res = s.devices.androidenterprise_devices_force_report_upload(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### devices

* `androidenterprise_devices_force_report_upload` - Uploads a report containing any changes in app states on the device since the last report was generated. You can call this method up to 3 times every 24 hours for a given device. If you exceed the quota, then the Google Play EMM API returns HTTP 429 Too Many Requests.
* `androidenterprise_devices_get` - Retrieves the details of a device.
* `androidenterprise_devices_get_state` - Retrieves whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.
* `androidenterprise_devices_list` - Retrieves the IDs of all of a user's devices.
* `androidenterprise_devices_set_state` - Sets whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.
* `androidenterprise_devices_update` - Updates the device policy. To ensure the policy is properly enforced, you need to prevent unmanaged accounts from accessing Google Play by setting the allowed_accounts in the managed configuration for the Google Play package. See restrict accounts in Google Play. When provisioning a new device, you should set the device policy using this method before adding the managed Google Play Account to the device, otherwise the policy will not be applied for a short period of time after adding the account to the device.

### enterprises

* `androidenterprise_enterprises_acknowledge_notification_set` - Acknowledges notifications that were received from Enterprises.PullNotificationSet to prevent subsequent calls from returning the same notifications.
* `androidenterprise_enterprises_complete_signup` - Completes the signup flow, by specifying the Completion token and Enterprise token. This request must not be called multiple times for a given Enterprise Token.
* `androidenterprise_enterprises_create_web_token` - Returns a unique token to access an embeddable UI. To generate a web UI, pass the generated token into the managed Google Play javascript API. Each token may only be used to start one UI session. See the javascript API documentation for further information.
* `androidenterprise_enterprises_enroll` - Enrolls an enterprise with the calling EMM.
* `androidenterprise_enterprises_generate_signup_url` - Generates a sign-up URL.
* `androidenterprise_enterprises_get` - Retrieves the name and domain of an enterprise.
* `androidenterprise_enterprises_get_service_account` - Returns a service account and credentials. The service account can be bound to the enterprise by calling setAccount. The service account is unique to this enterprise and EMM, and will be deleted if the enterprise is unbound. The credentials contain private key data and are not stored server-side. This method can only be called after calling Enterprises.Enroll or Enterprises.CompleteSignup, and before Enterprises.SetAccount; at other times it will return an error. Subsequent calls after the first will generate a new, unique set of credentials, and invalidate the previously generated credentials. Once the service account is bound to the enterprise, it can be managed using the serviceAccountKeys resource.
* `androidenterprise_enterprises_get_store_layout` - Returns the store layout for the enterprise. If the store layout has not been set, returns "basic" as the store layout type and no homepage.
* `androidenterprise_enterprises_list` - Looks up an enterprise by domain name. This is only supported for enterprises created via the Google-initiated creation flow. Lookup of the id is not needed for enterprises created via the EMM-initiated flow since the EMM learns the enterprise ID in the callback specified in the Enterprises.generateSignupUrl call.
* `androidenterprise_enterprises_pull_notification_set` - Pulls and returns a notification set for the enterprises associated with the service account authenticated for the request. The notification set may be empty if no notification are pending. A notification set returned needs to be acknowledged within 20 seconds by calling Enterprises.AcknowledgeNotificationSet, unless the notification set is empty. Notifications that are not acknowledged within the 20 seconds will eventually be included again in the response to another PullNotificationSet request, and those that are never acknowledged will ultimately be deleted according to the Google Cloud Platform Pub/Sub system policy. Multiple requests might be performed concurrently to retrieve notifications, in which case the pending notifications (if any) will be split among each caller, if any are pending. If no notifications are present, an empty notification list is returned. Subsequent requests may return more notifications once they become available.
* `androidenterprise_enterprises_send_test_push_notification` - Sends a test notification to validate the EMM integration with the Google Cloud Pub/Sub service for this enterprise.
* `androidenterprise_enterprises_set_account` - Sets the account that will be used to authenticate to the API as the enterprise.
* `androidenterprise_enterprises_set_store_layout` - Sets the store layout for the enterprise. By default, storeLayoutType is set to "basic" and the basic store layout is enabled. The basic layout only contains apps approved by the admin, and that have been added to the available product set for a user (using the setAvailableProductSet call). Apps on the page are sorted in order of their product ID value. If you create a custom store layout (by setting storeLayoutType = "custom" and setting a homepage), the basic store layout is disabled.
* `androidenterprise_enterprises_unenroll` - Unenrolls an enterprise from the calling EMM.

### entitlements

* `androidenterprise_entitlements_delete` - Removes an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* `androidenterprise_entitlements_get` - Retrieves details of an entitlement. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* `androidenterprise_entitlements_list` - Lists all entitlements for the specified user. Only the ID is set. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* `androidenterprise_entitlements_update` - Adds or updates an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

### grouplicenses

* `androidenterprise_grouplicenses_get` - Retrieves details of an enterprise's group license for a product. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* `androidenterprise_grouplicenses_list` - Retrieves IDs of all products for which the enterprise has a group license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

### grouplicenseusers

* `androidenterprise_grouplicenseusers_list` - Retrieves the IDs of the users who have been granted entitlements under the license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

### installs

* `androidenterprise_installs_delete` - Requests to remove an app from a device. A call to get or list will still show the app as installed on the device until it is actually removed.
* `androidenterprise_installs_get` - Retrieves details of an installation of an app on a device.
* `androidenterprise_installs_list` - Retrieves the details of all apps installed on the specified device.
* `androidenterprise_installs_update` - Requests to install the latest version of an app to a device. If the app is already installed, then it is updated to the latest version if necessary.

### managedconfigurationsfordevice

* `androidenterprise_managedconfigurationsfordevice_delete` - Removes a per-device managed configuration for an app for the specified device.
* `androidenterprise_managedconfigurationsfordevice_get` - Retrieves details of a per-device managed configuration.
* `androidenterprise_managedconfigurationsfordevice_list` - Lists all the per-device managed configurations for the specified device. Only the ID is set.
* `androidenterprise_managedconfigurationsfordevice_update` - Adds or updates a per-device managed configuration for an app for the specified device.

### managedconfigurationsforuser

* `androidenterprise_managedconfigurationsforuser_delete` - Removes a per-user managed configuration for an app for the specified user.
* `androidenterprise_managedconfigurationsforuser_get` - Retrieves details of a per-user managed configuration for an app for the specified user.
* `androidenterprise_managedconfigurationsforuser_list` - Lists all the per-user managed configurations for the specified user. Only the ID is set.
* `androidenterprise_managedconfigurationsforuser_update` - Adds or updates the managed configuration settings for an app for the specified user. If you support the Managed configurations iframe, you can apply managed configurations to a user by specifying an mcmId and its associated configuration variables (if any) in the request. Alternatively, all EMMs can apply managed configurations by passing a list of managed properties.

### managedconfigurationssettings

* `androidenterprise_managedconfigurationssettings_list` - Lists all the managed configurations settings for the specified app.

### permissions

* `androidenterprise_permissions_get` - Retrieves details of an Android app permission for display to an enterprise admin.

### products

* `androidenterprise_products_approve` -  Approves the specified product and the relevant app permissions, if any. The maximum number of products that you can approve per enterprise customer is 1,000. To learn how to use managed Google Play to design and create a store layout to display approved products to your users, see Store Layout Design. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 
* `androidenterprise_products_generate_approval_url` - Generates a URL that can be rendered in an iframe to display the permissions (if any) of a product. An enterprise admin must view these permissions and accept them on behalf of their organization in order to approve that product. Admins should accept the displayed permissions by interacting with a separate UI element in the EMM console, which in turn should trigger the use of this URL as the approvalUrlInfo.approvalUrl property in a Products.approve call to approve the product. This URL can only be used to display permissions for up to 1 day. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 
* `androidenterprise_products_get` - Retrieves details of a product for display to an enterprise admin.
* `androidenterprise_products_get_app_restrictions_schema` - Retrieves the schema that defines the configurable properties for this product. All products have a schema, but this schema may be empty if no managed configurations have been defined. This schema can be used to populate a UI that allows an admin to configure the product. To apply a managed configuration based on the schema obtained using this API, see Managed Configurations through Play.
* `androidenterprise_products_get_permissions` - Retrieves the Android app permissions required by this app.
* `androidenterprise_products_list` - Finds approved products that match a query, or all approved products if there is no query. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 
* `androidenterprise_products_unapprove` - Unapproves the specified product (and the relevant app permissions, if any) **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

### serviceaccountkeys

* `androidenterprise_serviceaccountkeys_delete` - Removes and invalidates the specified credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.
* `androidenterprise_serviceaccountkeys_insert` - Generates new credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount. Only the type of the key should be populated in the resource to be inserted.
* `androidenterprise_serviceaccountkeys_list` - Lists all active credentials for the service account associated with this enterprise. Only the ID and key type are returned. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.

### storelayoutclusters

* `androidenterprise_storelayoutclusters_delete` - Deletes a cluster.
* `androidenterprise_storelayoutclusters_get` - Retrieves details of a cluster.
* `androidenterprise_storelayoutclusters_insert` - Inserts a new cluster in a page.
* `androidenterprise_storelayoutclusters_list` - Retrieves the details of all clusters on the specified page.
* `androidenterprise_storelayoutclusters_update` - Updates a cluster.

### storelayoutpages

* `androidenterprise_storelayoutpages_delete` - Deletes a store page.
* `androidenterprise_storelayoutpages_get` - Retrieves details of a store page.
* `androidenterprise_storelayoutpages_insert` - Inserts a new store page.
* `androidenterprise_storelayoutpages_list` - Retrieves the details of all pages in the store.
* `androidenterprise_storelayoutpages_update` - Updates the content of a store page.

### users

* `androidenterprise_users_delete` - Deleted an EMM-managed user.
* `androidenterprise_users_generate_authentication_token` - Generates an authentication token which the device policy client can use to provision the given EMM-managed user account on a device. The generated token is single-use and expires after a few minutes. You can provision a maximum of 10 devices per user. This call only works with EMM-managed accounts.
* `androidenterprise_users_get` - Retrieves a user's details.
* `androidenterprise_users_get_available_product_set` - Retrieves the set of products a user is entitled to access. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* `androidenterprise_users_insert` - Creates a new EMM-managed user. The Users resource passed in the body of the request should include an accountIdentifier and an accountType. If a corresponding user already exists with the same account identifier, the user will be updated with the resource. In this case only the displayName field can be changed.
* `androidenterprise_users_list` - Looks up a user by primary email address. This is only supported for Google-managed users. Lookup of the id is not needed for EMM-managed users because the id is already returned in the result of the Users.insert call.
* `androidenterprise_users_revoke_device_access` - Revokes access to all devices currently provisioned to the user. The user will no longer be able to use the managed Play store on any of their managed devices. This call only works with EMM-managed accounts.
* `androidenterprise_users_set_available_product_set` - Modifies the set of products that a user is entitled to access (referred to as *whitelisted* products). Only products that are approved or products that were previously approved (products with revoked approval) can be whitelisted. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* `androidenterprise_users_update` - Updates the details of an EMM-managed user. Can be used with EMM-managed users only (not Google managed users). Pass the new details in the Users resource in the request body. Only the displayName field can be changed. Other fields must either be unset or have the currently active value.

### webapps

* `androidenterprise_webapps_delete` - Deletes an existing web app.
* `androidenterprise_webapps_get` - Gets an existing web app.
* `androidenterprise_webapps_insert` - Creates a new web app for the enterprise.
* `androidenterprise_webapps_list` - Retrieves the details of all web apps for a given enterprise.
* `androidenterprise_webapps_update` - Updates an existing web app.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
