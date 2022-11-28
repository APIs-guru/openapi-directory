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
import { AndroidenterpriseDevicesForceReportUploadRequest, AndroidenterpriseDevicesForceReportUploadResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AndroidenterpriseDevicesForceReportUploadRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    deviceId: "a",
    enterpriseId: "minima",
    userId: "fugiat",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "sed",
    alt: "json",
    callback: "non",
    fields: "aspernatur",
    key: "quod",
    oauthToken: "et",
    prettyPrint: true,
    quotaUser: "corporis",
    uploadType: "rerum",
    uploadProtocol: "ut",
  },
};

sdk.devices.androidenterpriseDevicesForceReportUpload(req).then((res: AndroidenterpriseDevicesForceReportUploadResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### devices

* `androidenterpriseDevicesForceReportUpload` - Uploads a report containing any changes in app states on the device since the last report was generated. You can call this method up to 3 times every 24 hours for a given device. If you exceed the quota, then the Google Play EMM API returns HTTP 429 Too Many Requests.
* `androidenterpriseDevicesGet` - Retrieves the details of a device.
* `androidenterpriseDevicesGetState` - Retrieves whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.
* `androidenterpriseDevicesList` - Retrieves the IDs of all of a user's devices.
* `androidenterpriseDevicesSetState` - Sets whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.
* `androidenterpriseDevicesUpdate` - Updates the device policy. To ensure the policy is properly enforced, you need to prevent unmanaged accounts from accessing Google Play by setting the allowed_accounts in the managed configuration for the Google Play package. See restrict accounts in Google Play. When provisioning a new device, you should set the device policy using this method before adding the managed Google Play Account to the device, otherwise the policy will not be applied for a short period of time after adding the account to the device.

### enterprises

* `androidenterpriseEnterprisesAcknowledgeNotificationSet` - Acknowledges notifications that were received from Enterprises.PullNotificationSet to prevent subsequent calls from returning the same notifications.
* `androidenterpriseEnterprisesCompleteSignup` - Completes the signup flow, by specifying the Completion token and Enterprise token. This request must not be called multiple times for a given Enterprise Token.
* `androidenterpriseEnterprisesCreateWebToken` - Returns a unique token to access an embeddable UI. To generate a web UI, pass the generated token into the managed Google Play javascript API. Each token may only be used to start one UI session. See the javascript API documentation for further information.
* `androidenterpriseEnterprisesEnroll` - Enrolls an enterprise with the calling EMM.
* `androidenterpriseEnterprisesGenerateSignupUrl` - Generates a sign-up URL.
* `androidenterpriseEnterprisesGet` - Retrieves the name and domain of an enterprise.
* `androidenterpriseEnterprisesGetServiceAccount` - Returns a service account and credentials. The service account can be bound to the enterprise by calling setAccount. The service account is unique to this enterprise and EMM, and will be deleted if the enterprise is unbound. The credentials contain private key data and are not stored server-side. This method can only be called after calling Enterprises.Enroll or Enterprises.CompleteSignup, and before Enterprises.SetAccount; at other times it will return an error. Subsequent calls after the first will generate a new, unique set of credentials, and invalidate the previously generated credentials. Once the service account is bound to the enterprise, it can be managed using the serviceAccountKeys resource.
* `androidenterpriseEnterprisesGetStoreLayout` - Returns the store layout for the enterprise. If the store layout has not been set, returns "basic" as the store layout type and no homepage.
* `androidenterpriseEnterprisesList` - Looks up an enterprise by domain name. This is only supported for enterprises created via the Google-initiated creation flow. Lookup of the id is not needed for enterprises created via the EMM-initiated flow since the EMM learns the enterprise ID in the callback specified in the Enterprises.generateSignupUrl call.
* `androidenterpriseEnterprisesPullNotificationSet` - Pulls and returns a notification set for the enterprises associated with the service account authenticated for the request. The notification set may be empty if no notification are pending. A notification set returned needs to be acknowledged within 20 seconds by calling Enterprises.AcknowledgeNotificationSet, unless the notification set is empty. Notifications that are not acknowledged within the 20 seconds will eventually be included again in the response to another PullNotificationSet request, and those that are never acknowledged will ultimately be deleted according to the Google Cloud Platform Pub/Sub system policy. Multiple requests might be performed concurrently to retrieve notifications, in which case the pending notifications (if any) will be split among each caller, if any are pending. If no notifications are present, an empty notification list is returned. Subsequent requests may return more notifications once they become available.
* `androidenterpriseEnterprisesSendTestPushNotification` - Sends a test notification to validate the EMM integration with the Google Cloud Pub/Sub service for this enterprise.
* `androidenterpriseEnterprisesSetAccount` - Sets the account that will be used to authenticate to the API as the enterprise.
* `androidenterpriseEnterprisesSetStoreLayout` - Sets the store layout for the enterprise. By default, storeLayoutType is set to "basic" and the basic store layout is enabled. The basic layout only contains apps approved by the admin, and that have been added to the available product set for a user (using the setAvailableProductSet call). Apps on the page are sorted in order of their product ID value. If you create a custom store layout (by setting storeLayoutType = "custom" and setting a homepage), the basic store layout is disabled.
* `androidenterpriseEnterprisesUnenroll` - Unenrolls an enterprise from the calling EMM.

### entitlements

* `androidenterpriseEntitlementsDelete` - Removes an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* `androidenterpriseEntitlementsGet` - Retrieves details of an entitlement. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* `androidenterpriseEntitlementsList` - Lists all entitlements for the specified user. Only the ID is set. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* `androidenterpriseEntitlementsUpdate` - Adds or updates an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

### grouplicenses

* `androidenterpriseGrouplicensesGet` - Retrieves details of an enterprise's group license for a product. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* `androidenterpriseGrouplicensesList` - Retrieves IDs of all products for which the enterprise has a group license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

### grouplicenseusers

* `androidenterpriseGrouplicenseusersList` - Retrieves the IDs of the users who have been granted entitlements under the license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

### installs

* `androidenterpriseInstallsDelete` - Requests to remove an app from a device. A call to get or list will still show the app as installed on the device until it is actually removed.
* `androidenterpriseInstallsGet` - Retrieves details of an installation of an app on a device.
* `androidenterpriseInstallsList` - Retrieves the details of all apps installed on the specified device.
* `androidenterpriseInstallsUpdate` - Requests to install the latest version of an app to a device. If the app is already installed, then it is updated to the latest version if necessary.

### managedconfigurationsfordevice

* `androidenterpriseManagedconfigurationsfordeviceDelete` - Removes a per-device managed configuration for an app for the specified device.
* `androidenterpriseManagedconfigurationsfordeviceGet` - Retrieves details of a per-device managed configuration.
* `androidenterpriseManagedconfigurationsfordeviceList` - Lists all the per-device managed configurations for the specified device. Only the ID is set.
* `androidenterpriseManagedconfigurationsfordeviceUpdate` - Adds or updates a per-device managed configuration for an app for the specified device.

### managedconfigurationsforuser

* `androidenterpriseManagedconfigurationsforuserDelete` - Removes a per-user managed configuration for an app for the specified user.
* `androidenterpriseManagedconfigurationsforuserGet` - Retrieves details of a per-user managed configuration for an app for the specified user.
* `androidenterpriseManagedconfigurationsforuserList` - Lists all the per-user managed configurations for the specified user. Only the ID is set.
* `androidenterpriseManagedconfigurationsforuserUpdate` - Adds or updates the managed configuration settings for an app for the specified user. If you support the Managed configurations iframe, you can apply managed configurations to a user by specifying an mcmId and its associated configuration variables (if any) in the request. Alternatively, all EMMs can apply managed configurations by passing a list of managed properties.

### managedconfigurationssettings

* `androidenterpriseManagedconfigurationssettingsList` - Lists all the managed configurations settings for the specified app.

### permissions

* `androidenterprisePermissionsGet` - Retrieves details of an Android app permission for display to an enterprise admin.

### products

* `androidenterpriseProductsApprove` -  Approves the specified product and the relevant app permissions, if any. The maximum number of products that you can approve per enterprise customer is 1,000. To learn how to use managed Google Play to design and create a store layout to display approved products to your users, see Store Layout Design. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 
* `androidenterpriseProductsGenerateApprovalUrl` - Generates a URL that can be rendered in an iframe to display the permissions (if any) of a product. An enterprise admin must view these permissions and accept them on behalf of their organization in order to approve that product. Admins should accept the displayed permissions by interacting with a separate UI element in the EMM console, which in turn should trigger the use of this URL as the approvalUrlInfo.approvalUrl property in a Products.approve call to approve the product. This URL can only be used to display permissions for up to 1 day. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 
* `androidenterpriseProductsGet` - Retrieves details of a product for display to an enterprise admin.
* `androidenterpriseProductsGetAppRestrictionsSchema` - Retrieves the schema that defines the configurable properties for this product. All products have a schema, but this schema may be empty if no managed configurations have been defined. This schema can be used to populate a UI that allows an admin to configure the product. To apply a managed configuration based on the schema obtained using this API, see Managed Configurations through Play.
* `androidenterpriseProductsGetPermissions` - Retrieves the Android app permissions required by this app.
* `androidenterpriseProductsList` - Finds approved products that match a query, or all approved products if there is no query. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 
* `androidenterpriseProductsUnapprove` - Unapproves the specified product (and the relevant app permissions, if any) **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

### serviceaccountkeys

* `androidenterpriseServiceaccountkeysDelete` - Removes and invalidates the specified credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.
* `androidenterpriseServiceaccountkeysInsert` - Generates new credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount. Only the type of the key should be populated in the resource to be inserted.
* `androidenterpriseServiceaccountkeysList` - Lists all active credentials for the service account associated with this enterprise. Only the ID and key type are returned. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.

### storelayoutclusters

* `androidenterpriseStorelayoutclustersDelete` - Deletes a cluster.
* `androidenterpriseStorelayoutclustersGet` - Retrieves details of a cluster.
* `androidenterpriseStorelayoutclustersInsert` - Inserts a new cluster in a page.
* `androidenterpriseStorelayoutclustersList` - Retrieves the details of all clusters on the specified page.
* `androidenterpriseStorelayoutclustersUpdate` - Updates a cluster.

### storelayoutpages

* `androidenterpriseStorelayoutpagesDelete` - Deletes a store page.
* `androidenterpriseStorelayoutpagesGet` - Retrieves details of a store page.
* `androidenterpriseStorelayoutpagesInsert` - Inserts a new store page.
* `androidenterpriseStorelayoutpagesList` - Retrieves the details of all pages in the store.
* `androidenterpriseStorelayoutpagesUpdate` - Updates the content of a store page.

### users

* `androidenterpriseUsersDelete` - Deleted an EMM-managed user.
* `androidenterpriseUsersGenerateAuthenticationToken` - Generates an authentication token which the device policy client can use to provision the given EMM-managed user account on a device. The generated token is single-use and expires after a few minutes. You can provision a maximum of 10 devices per user. This call only works with EMM-managed accounts.
* `androidenterpriseUsersGet` - Retrieves a user's details.
* `androidenterpriseUsersGetAvailableProductSet` - Retrieves the set of products a user is entitled to access. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* `androidenterpriseUsersInsert` - Creates a new EMM-managed user. The Users resource passed in the body of the request should include an accountIdentifier and an accountType. If a corresponding user already exists with the same account identifier, the user will be updated with the resource. In this case only the displayName field can be changed.
* `androidenterpriseUsersList` - Looks up a user by primary email address. This is only supported for Google-managed users. Lookup of the id is not needed for EMM-managed users because the id is already returned in the result of the Users.insert call.
* `androidenterpriseUsersRevokeDeviceAccess` - Revokes access to all devices currently provisioned to the user. The user will no longer be able to use the managed Play store on any of their managed devices. This call only works with EMM-managed accounts.
* `androidenterpriseUsersSetAvailableProductSet` - Modifies the set of products that a user is entitled to access (referred to as *whitelisted* products). Only products that are approved or products that were previously approved (products with revoked approval) can be whitelisted. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* `androidenterpriseUsersUpdate` - Updates the details of an EMM-managed user. Can be used with EMM-managed users only (not Google managed users). Pass the new details in the Users resource in the request body. Only the displayName field can be changed. Other fields must either be unset or have the currently active value.

### webapps

* `androidenterpriseWebappsDelete` - Deletes an existing web app.
* `androidenterpriseWebappsGet` - Gets an existing web app.
* `androidenterpriseWebappsInsert` - Creates a new web app for the enterprise.
* `androidenterpriseWebappsList` - Retrieves the details of all web apps for a given enterprise.
* `androidenterpriseWebappsUpdate` - Updates an existing web app.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
