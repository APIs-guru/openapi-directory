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
import { DeleteItvPurchasePlatformRequest, DeleteItvPurchasePlatformResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeleteItvPurchasePlatformRequest = {
  security: {
    accountAuth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    platform: "ea",
  },
  queryParams: {
    lang: "deleniti",
  },
  request: {
    profileToken: "sed",
  },
};

sdk.sdk.deleteItvPurchasePlatform(req).then((res: DeleteItvPurchasePlatformResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `deleteItvPurchasePlatform` - Cancel a plan subscription.

A cancelled subscription will continue to be valid until the subscription
expiry date or next renewal date.

* `getEePlans` - Returns all the plans available for EE flow including additional description data.
* `getItvItemsummaryExternalId` - Redirects to corresponding Axis Item details page.
* `getItvPlansPlatform` - Returns the plans available for specified payment platform.
* `getItvProfile` - Returns the ITV profile object.
* `getItvRokuPlans` - Gets available Roku plans.
* `getPlansId` - Returns the details of a Plan with the specified id.
* `activateSaveOffer` - Activates the discount for a user. Only Stripe platform is currently supported.
* `addPaymentMethod` - Add a new payment method to an account.
* `assignMsisdn` - Assigns a msisdn to a profile on ITV side.
* `assignToken` - Assigns an UserToken to a profile on the ITV side. Currently throws an exception.
* `authorizeDevice` - Authorize a device from a generated device authorization code.

This is the second step in the process of authorizing a device by pin code.

Firstly the device must request a generated authorization code via the
`/authorization/device/code` endpoint.

This endpoint then authorizes the device associated with the code to sign in
to a user account. Typically this endpoint will be called from a page
presented in the web app under the account section.

Once authorized, the device will then be able to sign in to that account
via the `/authorization/device` endpoint, without needing to provide the 
credentials of the user.

* `bookmarkItem` - Bookmark an item under the active profile.

Creates one if it doesn't exist, overwrites one if it does.

* `cancelSubscription` - Cancel a plan subscription.

A cancelled subscription will continue to be valid until the subscription
expiry date or next renewal date.

* `changeCardDetails` - Change payment card details.
* `changeEmail` - Change email address related to account/profile.

The expected token scope is Settings.

* `changeMarketing` - Change marketing preferences related to account/profile.

The expected token scope is Settings.

* `changePassword` - Change the password of an account.

The expected token scope is Settings.

* `changePin` - Change the pin of an account.
* `checkEeBtEligibility` - Check whether or not a user is eligible for switching to Bt or EE offers.
* `checkPreviousEntitlements` - Check whether the user has been previously entitled.
* `checkUserToken` - Checks a provided token for BT eligible user.

* `checkVoucher` - Validates the coupon/voucher for specified payment platform.
* `confirmPurchase` - Confirms purchase and returns the details of purchased subscription for specified payment platform.
* `confirmPurchaseStrong` - Confirms purchase and returns the details of purchased subscription for specified payment platform.
* `confirmPurchaseWithOffer` - Confirms purchase and returns the details of purchased subscription for specified payment platform.
* `createPinRequest` - Creates a PIN request that will send an SMS to the given msisdn.
This call is to validate MSISDN entered by a user not comming through EE network.
This call should be followed by POST ee/pin.

* `createProfile` - Create a new profile under the active account.
* `createToken` - Returns a token for later calls to EE API. TTL is one hour. Recommended is FE refreshes this token before each call.
* `deleteAccount` - Delete account in compliance with GDPR.

The expected token scope is Settings.

* `deleteItemBookmark` - Unbookmark an item under the active profile.
* `deleteProfileWithId` - Delete a profile with a specific id under the active account.

Note that you cannot delete the primary profile.

* `deleteWatched` - Remove the watched status of items under the active profile. Passing in
specific `itemId`s to the `item_ids` query parameter will cause only these
items to be removed. **If this list is missing all watched items will be
removed**

* `deregisterDevice` - Deregister a playback device from an account.
* `executeTransaction` - Sends request to execute specified transaction.
* `forgotPassword` - Request the password of an account's primary profile be reset.

Should be called when a user has forgotten their password.

This will send an email with a password reset link to the email address of the
primary profile of an account.

The link, once clicked, should take the user to the "reset-password" page of the
website. Here they will enter their new password and submit to the /reset-password
endpoint here, along with the password reset token provided in the original link.

* `generateDeviceAuthorizationCode` - Get a generated device authorization code.

This is the first step in the process of authorizing a device by pin code.
The device will make a request to this endpoint providing a unique identifier
for the device such as a serial number. This endpoint will then return a
generated code which is tied to the given device.

The code may subsequently be used to authorize the device to sign in to an
account via the `/account/devices/authorization` endpoint. Typically this
will be from a page presented in the web app under the account section.

Once authorized, the device will then be able to sign in to that account
via the `/authorization/device` endpoint, without needing to provide the 
credentials of the user.

* `generateNonce` - Generate a new account nonce.

A nonce may be required to help sign a response from a third party
service which will be passed back to these services.

For example a Facebook single-sign-on request initiated by a client
application may first get a nonce from here to include in the request.
Facebook will then include the nonce in the auth token it issues. This
token can be passed back to our services and the nonce checked for validity.

* `getAccount` - Get the details of an account along with the profiles and entitlements under it.
* `getAccountToken` - Request one or more `Account` level authorization tokens each with a chosen scope.

Tokens are used to access restricted service endpoints. These restricted endpoints
will require a specific token type (e.g Account) with a specific scope (e.g. Catalog)
before access is granted.

For convenience, where a Profile level token with the same scope exists it will also be returned.

Authorization with pin is not supported on this endpoint anymore. Use `/itv/pinauthorization`
endpoint instead.

* `getAccountTokenByCode` - Get Catalog tokens for an account using a device authorization code.
Where a Profile level token of Catalog scope exists it will also be returned.

This is the final step in the process of authorizing a device by pin code.

Firstly the device must request a generated authorization code via the
`/authorization/device/code` endpoint.

The code is subsequently used to authorize the device to sign in to a given
account via the `/account/devices/authorization` endpoint. Typically this
will be from a page presented in the web app under the account section.

Once authorized, this endpoint will allow the device to sign in without
needing to provide the credentials of the user.

* `getAccountTokenWithPin` - Provides authorization with parental control pin.

Returns an array containing account token with Playback scope.

Requires access token with Catalog scope.

Pin must be a 4-digit string

* `getAnonNextPlaybackItem` - Identical to GET /account/profile/items/{itemId}/next route but for users
that are not logged in i.e. this endpoint does not require authorisation

* `getAppConfig` - Get the global configuration for an application. Should be called during app statup.

This includes things like device and playback rules, classifications,
sitemap and subscriptions.

You have the option to select specific configuration objects using the 'include'
parameter, or if unspecified, getting all configuration.

* `getBillingHistory` - Returns the list of billing records for specified payment platform.
* `getBookmarkList` - Returns the list of bookmarked items under the active profile.
* `getBookmarks` - Get the map of bookmarked item ids (itemId => creationDate) under the active profile.
* `getCardDetails` - Get payment card details.
* `getContinueWatchingList` - Returns a list of items which have been watched but not completed under the active
profile.

Multiple episodes under the same show may be watched or in progress, however only a
single item belonging to a particular show will be included in the returned list.

The next episode to continue watching for a particular show will be the most recent
incompletely watched episode, or the next episode following the most recently
completely watched episode. Based on the specified `show_item_type` type, either the next
episode, the season of the next episode, or the show will be included in the list.

* `getCurrentEntitlement` - Returns current entitlement.
* `getCurrentSubscription` - Returns the details of current subscription for specified payment platform.
* `getDevice` - Get a registered device.
* `getDevices` - Get all devices registered under this account.

Also includes information around device registration and deregistration limits.

* `getEligibleOffers` - Returns eligible partner specific offers for the querying partner for an EE MSISDN.
This call is supposed to be called after we have MSISDN accired.
This call should be followed by POST /ee/msisdn.

* `getEntitlements` - Get all entitlements under the account.

This list is returned under the call to get account information so a call here is
only required when wishing to refresh a local copy of entitlements.

* `getEntitlementsHistory` - Returns the state of subscription for any payment platform.
* `getFeatureFlag` - Gets info whether or not a feature is enabled or disabled using a feature flag. Feature flags are set as a custom field within PM. It also supports custom feature flag data if needed. Such data can be return as well.
* `getFullPriceRenewal` - Returns full price renewal state and reason for specific user.
* `getItem` - Returns the details of an item with the specified id.
* `getItemBookmark` - Get the bookmark for an item under the active profile.
* `getItemChildrenList` - Returns the List of child summary items under an item.

If the item is a Season then the children will be episodes and ordered by episode number.

If the item is a Show then the children will be Seasons and ordered by season number.

Returns 404 if no children found.

* `getItemDownloadables` - Returns the details of an item with the specified id.
* `getItemMediaFiles` - Get the video files associated with an item given maximum resolution, device type
and one or more delivery types.

This endpoint accepts an Account Catalog token, however if when requesting
playback files you receive an *403 status code with error code 1* then the file
you're requesting is classification restricted. This means you should switch
to target the `/account/items/{id}/videos-guarded` endpoint, passing it an Account
Playback token. If not already obtained, this token can be requested via the
`/itv/pinauthorization` endpoint with an account level pin.

For convenience you may also access free / public files through this endpoint
instead of the /items/{id}/videos endpoint, when authenticated.

Returns an array of video file objects which each include a url to a video.

The first entry in the array contains what is predicted to be the best match.
The remainder of the entries, if any, may contain resolutions below what was
requests. For example if you request HD-720 the response may also contain
SD entries.

If you specify multiple delivery types, then the response array will insert
types in the order you specify them in the query. For example `stream,progressive`
would return an array with 0 or more stream files followed by 0 or more progressive files.

If no files are found a 404 is returned.

* `getItemMediaFilesGuarded` - Get the video files associated with an item given maximum resolution, device type
and one or more delivery types.

This endpoint is identical to the `/account/items/{id}/videos` however it expects
an Account Playback token. This token, and in association this endpoint, is specifically
for use when playback files are classification restricted and require an account
level pin to access them.

Returns an array of video file objects which each include a url to a video.

The first entry in the array contains what is predicted to be the best match.
The remainder of the entries, if any, may contain resolutions below what was
requests. For example if you request HD-720 the response may also contain
SD entries.

If you specify multiple delivery types, then the response array will insert
types in the order you specify them in the query. For example `stream,progressive`
would return an array with 0 or more stream files followed by 0 or more progressive files.

If no files are found a 404 is returned.

* `getItemRating` - Get the rating info for an item under the active profile.
* `getItemRelatedList` - Returns the list of items related to the parent item.

Note for now, due to the size of the list being unknown, only a single page will be returned.

* `getItemWatchedStatus` - Get the watched status info for an item under the active profile.
* `getItemsMediaClipFiles` - Get the media clip files associated with items.

* `getItvPage` - Returns a page with the specified id.

This is a cut down version for low memory devices.123

If targeting the search page you must url encode the search term as a parameter
using the `q` key. For example if your browser path looks like `/search?q=the`
then what you pass to this endpoint would look like `/itv/page?path=/search%3Fq%3Dthe`.

* `getItvProfileToken` - Returns the ITV profile token.
* `getList` - Returns a list of items under the specified item list
* `getLists` - Returns an array of item lists with their first page of content resolved.
* `getNextPlaybackItem` - Returns the next item to play given a source item id.

For an unwatched show it returns the first episode available to the account.

For a watched show it returns the last incompletely watched episode by the profile,
or the episode that immediately follows the last completely watched episode 
or nothing.

For an episode it always returns the immediately following episode, if available to
the account, or nothing.

If the response does not contain a `next` property then no item was found.

* `getPage` - Returns a page with the specified id.

If targeting the search page you must url encode the search term as a parameter
using the `q` key. For example if your browser path looks like `/search?q=the`
then what you pass to this endpoint would look like `/page?path=/search%3Fq%3Dthe`.

* `getPaymentMethod` - Get a payment method under an account.
* `getPaymentMethods` - Get the available payment methods under an account.
* `getPlan` - Returns the plan description for EE flow including additional description data.
* `getPlanByToken` - Returns all the plans available for BT flow including additional description data.
* `getPlans` - Returns all the plans available for BT flow including additional description data.
* `getProfile` - Get the details of the active profile, including watched, bookmarked and rated items.
* `getProfileToken` - Request one or more `Profile` level authorization tokens each with a chosen scope.

Tokens are used to access restricted service endpoints. These restriced endpoints
will require a specific token type (e.g Profile) with a specific scope (e.g. Catalog)
before access is granted.

* `getProfileWithId` - Get the summary of a profile with a specific id under the active account.
* `getPublicItemMediaFiles` - Get the free / public video files associated with an item given maximum resolution,
device type and one or more delivery types.

Returns an array of video file objects which each include a url to a video.

The first entry in the array contains what is predicted to be the best match.
The remainder of the entries, if any, may contain resolutions below what was
requests. For example if you request HD-720 the response may also contain
SD entries.

If you specify multiple delivery types, then the response array will insert
types in the order you specify them in the query. For example `stream,progressive`
would return an array with 0 or more stream files followed by 0 or more progressive files.

If no files are found a 404 is returned.

* `getPublicPreview` - Returns public preview for Samsung based on the page '/samsung-preview' configured in PresentationManager.
There is a hard limit of max 40 items to be returned. It splits evenly items count into the page rows, remaining items are added into the first row.

* `getPurchases` - Get a list of all purchases made under an account.
* `getRatings` - Get the map of rated item ids (itemId => rating out of 10) under the active profile.
* `getRatingsList` - Returns the list of rated items under the active profile.
* `getRecommendedList` - Get the list of recommended items under the active profile.
* `getSaveOffer` - Checks the provided coupon id for a user. Only Stripe platform is currently supported.
* `getSchedules` - Returns schedules for a defined set of channels over a requested period.

Schedules are requested in hour blocks and returned grouped by the channel
they belong to.

For example, to load 12 hours of schedules for channels `4343` and `5234`,
on 21/2/2017 starting from 08:00.

```
channels=4343,5234
date=2017-02-21
hour=8
duration=12
```

Please remember that `date` and `hour` combined represent a normal datetime, 
so they should be converted to UTC on the client - this will help to avoid 
issues with EPG schedules near midnight.

If a channel id is passed which doesn't exist then this endpoint will
return an empty schedule list for it. If instead we returned 404,
this would invalidate all other channel schedules in the same request
which would be unfriendly for clients presenting these channel schedules.

* `getSubscriptionData` - Returns the details of subscription data for a user with specified id.
* `getSubscriptionState` - Returns the state of subscription for any payment platform.
* `getSubscriptionStatus` - Returns status of latest payment intent.
* `getUpcomingInvoice` - Returns an upcoming invoice
* `getVoucherById` - Checks the provided coupon id for a user. Only Stripe platform is currently supported.
* `getWatched` - Get the map of watched item ids (itemId => last playhead position) under the active profile.
* `getWatchedList` - Returns the list of watched items under the active profile.
* `googlePaySubscription` - Get the list of recommended items under the active profile.
* `makePurchase` - Purchase a plan or item offer.
The result of a successful transaction is a new entitlement.

* `rateItem` - Rate an item under the active profile.

Creates one if it doesn't exist, overwrites one if it does.

* `refreshToken` - Refresh an account or profile level authorization token which is marked as refreshable.
* `register` - Register a new user, creating them an account.

Registration, when successful, will return an array of access tokens so the user is
immediately signed in.

It returns Catalog and Commerce scoped tokens for both Account and Profile.
The Commerce ones are intended to allow the purchase of a subscription plan
in the step after registration, without the user being prompted to enter
their username and password again.

An email will also be sent with a link they need to click to confirm their
email address. This confirmation is done via the /verify-email endpoint.

* `registerDevice` - Register a playback device under an account.

If a device with the same id already exists a `409` conflict will be returned.

* `removePaymentMethod` - Remove a payment method from an account.
* `renameDevice` - Rename a device
* `requestEmailVerification` - Request that the email address tied to an account be verified.

This will send a verification email to the email address of the primary profile containing
a link which, once clicked, completes the verification process via the /verify-email endpoint.

Note that when an account is created this email is sent automatically so there's no need
to call this directly.

If the user doesn't click the link before it expires then this endpoint can be called
to request a new verification email. In the future it may also be used if we add support
for changing an account email address.

* `resetPassword` - When a user requests to reset their password via the /request-password-reset endpoint, an
email is sent to the email address of the primary profile of the account. This email contains a link
with a reset token as query parameter. The link should take the user to the "reset-password"
page of the website.

From the reset-password page a user should enter the new password they wish to use. 
It should then be submitted to this endpoint,
along with the reset token from the email link. 
The token should be provided in the body as resetToken property.

* `resubscribe` - Resubscription for a user.
* `search` - Search the catalog of items and people.
* `setItemWatchedStatus` - Record the watched playhead position of a video under the active profile.

Can be used later to resume a video from where it was last watched.

Creates one if it doesn't exist, overwrites one if it does.

* `signOut` - When a user signs out of an application we need to clear some
basic cookies we assigned them during token authorization.

* `singleSignOn` - Exchange a third party single-sign-on token for our own authorization tokens.
* `updateAccount` - Update the details of an account.

With the exception of the address, this supports partial updates, so you can send just the
properties you wish to update.

When the address is provided any properties which are omitted from the address will be cleared.

* `updatePaymentIntentStrong` - Change payment method details.
* `updatePaymentMethodStrong` - Change payment method details.
* `updateProfile` - Update ITV profile.

The expected token scope is Settings.

* `updateProfileWithId` - Update the summary of a profile with a specific id under the active account.

This supports partial updates so you can send just the properties you wish to update.

* `updateSubscription` - Renew a cancelled subscription or switch subscription to a different plan.

When renewing a cancelled subscription membership, hit this endpoint with
the id of subscription to renew.

To switch plans provide the id of the current active subscription membership
of the account, and in the query specify the id of the plan to switch to.

* `upgradePlan` - Upgrades the plan for the current user.
* `validatePinRequest` - Validate PIN request created by calling POST /ee/pin This call is to validate MSISDN entered by a user not comming through EE network. This call should be called after PUT /ee/pin. This call should be followed by POST /ee/offers.
* `verifyEmail` - When an account is created an email is sent to the email address of the new account.
This contains a link, which once clicked, verifies the email address of the account is correct.

The link contains a token as a query parameter which should be passed as the authorization
bearer token to this endpoint to complete email verification.

The token has en expiry, so if the link is not clicked before it expires, the account holder
may need to request a new verification email be sent. This can be done via the endpoint
/account/request-email-verification.


<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
