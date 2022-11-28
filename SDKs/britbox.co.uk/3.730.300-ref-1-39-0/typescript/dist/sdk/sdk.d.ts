import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://britbox.co.uk/api"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * deleteItvPurchasePlatform - Cancel a plan subscription.
     *
     * A cancelled subscription will continue to be valid until the subscription
     * expiry date or next renewal date.
     *
    **/
    deleteItvPurchasePlatform(req: operations.DeleteItvPurchasePlatformRequest, config?: AxiosRequestConfig): Promise<operations.DeleteItvPurchasePlatformResponse>;
    /**
     * getEePlans - Returns all the plans available for EE flow including additional description data.
    **/
    getEePlans(req: operations.GetEePlansRequest, config?: AxiosRequestConfig): Promise<operations.GetEePlansResponse>;
    /**
     * getItvItemsummaryExternalId - Redirects to corresponding Axis Item details page.
    **/
    getItvItemsummaryExternalId(req: operations.GetItvItemsummaryExternalIdRequest, config?: AxiosRequestConfig): Promise<operations.GetItvItemsummaryExternalIdResponse>;
    /**
     * getItvPlansPlatform - Returns the plans available for specified payment platform.
    **/
    getItvPlansPlatform(req: operations.GetItvPlansPlatformRequest, config?: AxiosRequestConfig): Promise<operations.GetItvPlansPlatformResponse>;
    /**
     * getItvProfile - Returns the ITV profile object.
    **/
    getItvProfile(req: operations.GetItvProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetItvProfileResponse>;
    /**
     * getItvRokuPlans - Gets available Roku plans.
    **/
    getItvRokuPlans(req: operations.GetItvRokuPlansRequest, config?: AxiosRequestConfig): Promise<operations.GetItvRokuPlansResponse>;
    /**
     * getPlansId - Returns the details of a Plan with the specified id.
    **/
    getPlansId(req: operations.GetPlansIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPlansIdResponse>;
    /**
     * activateSaveOffer - Activates the discount for a user. Only Stripe platform is currently supported.
    **/
    activateSaveOffer(req: operations.ActivateSaveOfferRequest, config?: AxiosRequestConfig): Promise<operations.ActivateSaveOfferResponse>;
    /**
     * addPaymentMethod - Add a new payment method to an account.
    **/
    addPaymentMethod(req: operations.AddPaymentMethodRequest, config?: AxiosRequestConfig): Promise<operations.AddPaymentMethodResponse>;
    /**
     * assignMsisdn - Assigns a msisdn to a profile on ITV side.
    **/
    assignMsisdn(req: operations.AssignMsisdnRequest, config?: AxiosRequestConfig): Promise<operations.AssignMsisdnResponse>;
    /**
     * assignToken - Assigns an UserToken to a profile on the ITV side. Currently throws an exception.
    **/
    assignToken(req: operations.AssignTokenRequest, config?: AxiosRequestConfig): Promise<operations.AssignTokenResponse>;
    /**
     * authorizeDevice - Authorize a device from a generated device authorization code.
     *
     * This is the second step in the process of authorizing a device by pin code.
     *
     * Firstly the device must request a generated authorization code via the
     * `/authorization/device/code` endpoint.
     *
     * This endpoint then authorizes the device associated with the code to sign in
     * to a user account. Typically this endpoint will be called from a page
     * presented in the web app under the account section.
     *
     * Once authorized, the device will then be able to sign in to that account
     * via the `/authorization/device` endpoint, without needing to provide the
     * credentials of the user.
     *
    **/
    authorizeDevice(req: operations.AuthorizeDeviceRequest, config?: AxiosRequestConfig): Promise<operations.AuthorizeDeviceResponse>;
    /**
     * bookmarkItem - Bookmark an item under the active profile.
     *
     * Creates one if it doesn't exist, overwrites one if it does.
     *
    **/
    bookmarkItem(req: operations.BookmarkItemRequest, config?: AxiosRequestConfig): Promise<operations.BookmarkItemResponse>;
    /**
     * cancelSubscription - Cancel a plan subscription.
     *
     * A cancelled subscription will continue to be valid until the subscription
     * expiry date or next renewal date.
     *
    **/
    cancelSubscription(req: operations.CancelSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.CancelSubscriptionResponse>;
    /**
     * changeCardDetails - Change payment card details.
    **/
    changeCardDetails(req: operations.ChangeCardDetailsRequest, config?: AxiosRequestConfig): Promise<operations.ChangeCardDetailsResponse>;
    /**
     * changeEmail - Change email address related to account/profile.
     *
     * The expected token scope is Settings.
     *
    **/
    changeEmail(req: operations.ChangeEmailRequest, config?: AxiosRequestConfig): Promise<operations.ChangeEmailResponse>;
    /**
     * changeMarketing - Change marketing preferences related to account/profile.
     *
     * The expected token scope is Settings.
     *
    **/
    changeMarketing(req: operations.ChangeMarketingRequest, config?: AxiosRequestConfig): Promise<operations.ChangeMarketingResponse>;
    /**
     * changePassword - Change the password of an account.
     *
     * The expected token scope is Settings.
     *
    **/
    changePassword(req: operations.ChangePasswordRequest, config?: AxiosRequestConfig): Promise<operations.ChangePasswordResponse>;
    /**
     * changePin - Change the pin of an account.
    **/
    changePin(req: operations.ChangePinRequest, config?: AxiosRequestConfig): Promise<operations.ChangePinResponse>;
    /**
     * checkEeBtEligibility - Check whether or not a user is eligible for switching to Bt or EE offers.
    **/
    checkEeBtEligibility(req: operations.CheckEeBtEligibilityRequest, config?: AxiosRequestConfig): Promise<operations.CheckEeBtEligibilityResponse>;
    /**
     * checkPreviousEntitlements - Check whether the user has been previously entitled.
    **/
    checkPreviousEntitlements(req: operations.CheckPreviousEntitlementsRequest, config?: AxiosRequestConfig): Promise<operations.CheckPreviousEntitlementsResponse>;
    /**
     * checkUserToken - Checks a provided token for BT eligible user.
     *
    **/
    checkUserToken(req: operations.CheckUserTokenRequest, config?: AxiosRequestConfig): Promise<operations.CheckUserTokenResponse>;
    /**
     * checkVoucher - Validates the coupon/voucher for specified payment platform.
    **/
    checkVoucher(req: operations.CheckVoucherRequest, config?: AxiosRequestConfig): Promise<operations.CheckVoucherResponse>;
    /**
     * confirmPurchase - Confirms purchase and returns the details of purchased subscription for specified payment platform.
    **/
    confirmPurchase(req: operations.ConfirmPurchaseRequest, config?: AxiosRequestConfig): Promise<operations.ConfirmPurchaseResponse>;
    /**
     * confirmPurchaseStrong - Confirms purchase and returns the details of purchased subscription for specified payment platform.
    **/
    confirmPurchaseStrong(req: operations.ConfirmPurchaseStrongRequest, config?: AxiosRequestConfig): Promise<operations.ConfirmPurchaseStrongResponse>;
    /**
     * confirmPurchaseWithOffer - Confirms purchase and returns the details of purchased subscription for specified payment platform.
    **/
    confirmPurchaseWithOffer(req: operations.ConfirmPurchaseWithOfferRequest, config?: AxiosRequestConfig): Promise<operations.ConfirmPurchaseWithOfferResponse>;
    /**
     * createPinRequest - Creates a PIN request that will send an SMS to the given msisdn.
     * This call is to validate MSISDN entered by a user not comming through EE network.
     * This call should be followed by POST ee/pin.
     *
    **/
    createPinRequest(req: operations.CreatePinRequestRequest, config?: AxiosRequestConfig): Promise<operations.CreatePinRequestResponse>;
    /**
     * createProfile - Create a new profile under the active account.
    **/
    createProfile(req: operations.CreateProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateProfileResponse>;
    /**
     * createToken - Returns a token for later calls to EE API. TTL is one hour. Recommended is FE refreshes this token before each call.
    **/
    createToken(config?: AxiosRequestConfig): Promise<operations.CreateTokenResponse>;
    /**
     * deleteAccount - Delete account in compliance with GDPR.
     *
     * The expected token scope is Settings.
     *
    **/
    deleteAccount(req: operations.DeleteAccountRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAccountResponse>;
    /**
     * deleteItemBookmark - Unbookmark an item under the active profile.
    **/
    deleteItemBookmark(req: operations.DeleteItemBookmarkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteItemBookmarkResponse>;
    /**
     * deleteProfileWithId - Delete a profile with a specific id under the active account.
     *
     * Note that you cannot delete the primary profile.
     *
    **/
    deleteProfileWithId(req: operations.DeleteProfileWithIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProfileWithIdResponse>;
    /**
     * deleteWatched - Remove the watched status of items under the active profile. Passing in
     * specific `itemId`s to the `item_ids` query parameter will cause only these
     * items to be removed. **If this list is missing all watched items will be
     * removed**
     *
    **/
    deleteWatched(req: operations.DeleteWatchedRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWatchedResponse>;
    /**
     * deregisterDevice - Deregister a playback device from an account.
    **/
    deregisterDevice(req: operations.DeregisterDeviceRequest, config?: AxiosRequestConfig): Promise<operations.DeregisterDeviceResponse>;
    /**
     * executeTransaction - Sends request to execute specified transaction.
    **/
    executeTransaction(req: operations.ExecuteTransactionRequest, config?: AxiosRequestConfig): Promise<operations.ExecuteTransactionResponse>;
    /**
     * forgotPassword - Request the password of an account's primary profile be reset.
     *
     * Should be called when a user has forgotten their password.
     *
     * This will send an email with a password reset link to the email address of the
     * primary profile of an account.
     *
     * The link, once clicked, should take the user to the "reset-password" page of the
     * website. Here they will enter their new password and submit to the /reset-password
     * endpoint here, along with the password reset token provided in the original link.
     *
    **/
    forgotPassword(req: operations.ForgotPasswordRequest, config?: AxiosRequestConfig): Promise<operations.ForgotPasswordResponse>;
    /**
     * generateDeviceAuthorizationCode - Get a generated device authorization code.
     *
     * This is the first step in the process of authorizing a device by pin code.
     * The device will make a request to this endpoint providing a unique identifier
     * for the device such as a serial number. This endpoint will then return a
     * generated code which is tied to the given device.
     *
     * The code may subsequently be used to authorize the device to sign in to an
     * account via the `/account/devices/authorization` endpoint. Typically this
     * will be from a page presented in the web app under the account section.
     *
     * Once authorized, the device will then be able to sign in to that account
     * via the `/authorization/device` endpoint, without needing to provide the
     * credentials of the user.
     *
    **/
    generateDeviceAuthorizationCode(req: operations.GenerateDeviceAuthorizationCodeRequest, config?: AxiosRequestConfig): Promise<operations.GenerateDeviceAuthorizationCodeResponse>;
    /**
     * generateNonce - Generate a new account nonce.
     *
     * A nonce may be required to help sign a response from a third party
     * service which will be passed back to these services.
     *
     * For example a Facebook single-sign-on request initiated by a client
     * application may first get a nonce from here to include in the request.
     * Facebook will then include the nonce in the auth token it issues. This
     * token can be passed back to our services and the nonce checked for validity.
     *
    **/
    generateNonce(req: operations.GenerateNonceRequest, config?: AxiosRequestConfig): Promise<operations.GenerateNonceResponse>;
    /**
     * getAccount - Get the details of an account along with the profiles and entitlements under it.
    **/
    getAccount(req: operations.GetAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountResponse>;
    /**
     * getAccountToken - Request one or more `Account` level authorization tokens each with a chosen scope.
     *
     * Tokens are used to access restricted service endpoints. These restricted endpoints
     * will require a specific token type (e.g Account) with a specific scope (e.g. Catalog)
     * before access is granted.
     *
     * For convenience, where a Profile level token with the same scope exists it will also be returned.
     *
     * Authorization with pin is not supported on this endpoint anymore. Use `/itv/pinauthorization`
     * endpoint instead.
     *
    **/
    getAccountToken(req: operations.GetAccountTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountTokenResponse>;
    /**
     * getAccountTokenByCode - Get Catalog tokens for an account using a device authorization code.
     * Where a Profile level token of Catalog scope exists it will also be returned.
     *
     * This is the final step in the process of authorizing a device by pin code.
     *
     * Firstly the device must request a generated authorization code via the
     * `/authorization/device/code` endpoint.
     *
     * The code is subsequently used to authorize the device to sign in to a given
     * account via the `/account/devices/authorization` endpoint. Typically this
     * will be from a page presented in the web app under the account section.
     *
     * Once authorized, this endpoint will allow the device to sign in without
     * needing to provide the credentials of the user.
     *
    **/
    getAccountTokenByCode(req: operations.GetAccountTokenByCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountTokenByCodeResponse>;
    /**
     * getAccountTokenWithPin - Provides authorization with parental control pin.
     *
     * Returns an array containing account token with Playback scope.
     *
     * Requires access token with Catalog scope.
     *
     * Pin must be a 4-digit string
     *
    **/
    getAccountTokenWithPin(req: operations.GetAccountTokenWithPinRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountTokenWithPinResponse>;
    /**
     * getAnonNextPlaybackItem - Identical to GET /account/profile/items/{itemId}/next route but for users
     * that are not logged in i.e. this endpoint does not require authorisation
     *
    **/
    getAnonNextPlaybackItem(req: operations.GetAnonNextPlaybackItemRequest, config?: AxiosRequestConfig): Promise<operations.GetAnonNextPlaybackItemResponse>;
    /**
     * getAppConfig - Get the global configuration for an application. Should be called during app statup.
     *
     * This includes things like device and playback rules, classifications,
     * sitemap and subscriptions.
     *
     * You have the option to select specific configuration objects using the 'include'
     * parameter, or if unspecified, getting all configuration.
     *
    **/
    getAppConfig(req: operations.GetAppConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetAppConfigResponse>;
    /**
     * getBillingHistory - Returns the list of billing records for specified payment platform.
    **/
    getBillingHistory(req: operations.GetBillingHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetBillingHistoryResponse>;
    /**
     * getBookmarkList - Returns the list of bookmarked items under the active profile.
    **/
    getBookmarkList(req: operations.GetBookmarkListRequest, config?: AxiosRequestConfig): Promise<operations.GetBookmarkListResponse>;
    /**
     * getBookmarks - Get the map of bookmarked item ids (itemId => creationDate) under the active profile.
    **/
    getBookmarks(req: operations.GetBookmarksRequest, config?: AxiosRequestConfig): Promise<operations.GetBookmarksResponse>;
    /**
     * getCardDetails - Get payment card details.
    **/
    getCardDetails(req: operations.GetCardDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetCardDetailsResponse>;
    /**
     * getContinueWatchingList - Returns a list of items which have been watched but not completed under the active
     * profile.
     *
     * Multiple episodes under the same show may be watched or in progress, however only a
     * single item belonging to a particular show will be included in the returned list.
     *
     * The next episode to continue watching for a particular show will be the most recent
     * incompletely watched episode, or the next episode following the most recently
     * completely watched episode. Based on the specified `show_item_type` type, either the next
     * episode, the season of the next episode, or the show will be included in the list.
     *
    **/
    getContinueWatchingList(req: operations.GetContinueWatchingListRequest, config?: AxiosRequestConfig): Promise<operations.GetContinueWatchingListResponse>;
    /**
     * getCurrentEntitlement - Returns current entitlement.
    **/
    getCurrentEntitlement(req: operations.GetCurrentEntitlementRequest, config?: AxiosRequestConfig): Promise<operations.GetCurrentEntitlementResponse>;
    /**
     * getCurrentSubscription - Returns the details of current subscription for specified payment platform.
    **/
    getCurrentSubscription(req: operations.GetCurrentSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GetCurrentSubscriptionResponse>;
    /**
     * getDevice - Get a registered device.
    **/
    getDevice(req: operations.GetDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceResponse>;
    /**
     * getDevices - Get all devices registered under this account.
     *
     * Also includes information around device registration and deregistration limits.
     *
    **/
    getDevices(req: operations.GetDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetDevicesResponse>;
    /**
     * getEligibleOffers - Returns eligible partner specific offers for the querying partner for an EE MSISDN.
     * This call is supposed to be called after we have MSISDN accired.
     * This call should be followed by POST /ee/msisdn.
     *
    **/
    getEligibleOffers(req: operations.GetEligibleOffersRequest, config?: AxiosRequestConfig): Promise<operations.GetEligibleOffersResponse>;
    /**
     * getEntitlements - Get all entitlements under the account.
     *
     * This list is returned under the call to get account information so a call here is
     * only required when wishing to refresh a local copy of entitlements.
     *
    **/
    getEntitlements(req: operations.GetEntitlementsRequest, config?: AxiosRequestConfig): Promise<operations.GetEntitlementsResponse>;
    /**
     * getEntitlementsHistory - Returns the state of subscription for any payment platform.
    **/
    getEntitlementsHistory(req: operations.GetEntitlementsHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetEntitlementsHistoryResponse>;
    /**
     * getFeatureFlag - Gets info whether or not a feature is enabled or disabled using a feature flag. Feature flags are set as a custom field within PM. It also supports custom feature flag data if needed. Such data can be return as well.
    **/
    getFeatureFlag(req: operations.GetFeatureFlagRequest, config?: AxiosRequestConfig): Promise<operations.GetFeatureFlagResponse>;
    /**
     * getFullPriceRenewal - Returns full price renewal state and reason for specific user.
    **/
    getFullPriceRenewal(req: operations.GetFullPriceRenewalRequest, config?: AxiosRequestConfig): Promise<operations.GetFullPriceRenewalResponse>;
    /**
     * getItem - Returns the details of an item with the specified id.
    **/
    getItem(req: operations.GetItemRequest, config?: AxiosRequestConfig): Promise<operations.GetItemResponse>;
    /**
     * getItemBookmark - Get the bookmark for an item under the active profile.
    **/
    getItemBookmark(req: operations.GetItemBookmarkRequest, config?: AxiosRequestConfig): Promise<operations.GetItemBookmarkResponse>;
    /**
     * getItemChildrenList - Returns the List of child summary items under an item.
     *
     * If the item is a Season then the children will be episodes and ordered by episode number.
     *
     * If the item is a Show then the children will be Seasons and ordered by season number.
     *
     * Returns 404 if no children found.
     *
    **/
    getItemChildrenList(req: operations.GetItemChildrenListRequest, config?: AxiosRequestConfig): Promise<operations.GetItemChildrenListResponse>;
    /**
     * getItemDownloadables - Returns the details of an item with the specified id.
    **/
    getItemDownloadables(req: operations.GetItemDownloadablesRequest, config?: AxiosRequestConfig): Promise<operations.GetItemDownloadablesResponse>;
    /**
     * getItemMediaFiles - Get the video files associated with an item given maximum resolution, device type
     * and one or more delivery types.
     *
     * This endpoint accepts an Account Catalog token, however if when requesting
     * playback files you receive an *403 status code with error code 1* then the file
     * you're requesting is classification restricted. This means you should switch
     * to target the `/account/items/{id}/videos-guarded` endpoint, passing it an Account
     * Playback token. If not already obtained, this token can be requested via the
     * `/itv/pinauthorization` endpoint with an account level pin.
     *
     * For convenience you may also access free / public files through this endpoint
     * instead of the /items/{id}/videos endpoint, when authenticated.
     *
     * Returns an array of video file objects which each include a url to a video.
     *
     * The first entry in the array contains what is predicted to be the best match.
     * The remainder of the entries, if any, may contain resolutions below what was
     * requests. For example if you request HD-720 the response may also contain
     * SD entries.
     *
     * If you specify multiple delivery types, then the response array will insert
     * types in the order you specify them in the query. For example `stream,progressive`
     * would return an array with 0 or more stream files followed by 0 or more progressive files.
     *
     * If no files are found a 404 is returned.
     *
    **/
    getItemMediaFiles(req: operations.GetItemMediaFilesRequest, config?: AxiosRequestConfig): Promise<operations.GetItemMediaFilesResponse>;
    /**
     * getItemMediaFilesGuarded - Get the video files associated with an item given maximum resolution, device type
     * and one or more delivery types.
     *
     * This endpoint is identical to the `/account/items/{id}/videos` however it expects
     * an Account Playback token. This token, and in association this endpoint, is specifically
     * for use when playback files are classification restricted and require an account
     * level pin to access them.
     *
     * Returns an array of video file objects which each include a url to a video.
     *
     * The first entry in the array contains what is predicted to be the best match.
     * The remainder of the entries, if any, may contain resolutions below what was
     * requests. For example if you request HD-720 the response may also contain
     * SD entries.
     *
     * If you specify multiple delivery types, then the response array will insert
     * types in the order you specify them in the query. For example `stream,progressive`
     * would return an array with 0 or more stream files followed by 0 or more progressive files.
     *
     * If no files are found a 404 is returned.
     *
    **/
    getItemMediaFilesGuarded(req: operations.GetItemMediaFilesGuardedRequest, config?: AxiosRequestConfig): Promise<operations.GetItemMediaFilesGuardedResponse>;
    /**
     * getItemRating - Get the rating info for an item under the active profile.
    **/
    getItemRating(req: operations.GetItemRatingRequest, config?: AxiosRequestConfig): Promise<operations.GetItemRatingResponse>;
    /**
     * getItemRelatedList - Returns the list of items related to the parent item.
     *
     * Note for now, due to the size of the list being unknown, only a single page will be returned.
     *
    **/
    getItemRelatedList(req: operations.GetItemRelatedListRequest, config?: AxiosRequestConfig): Promise<operations.GetItemRelatedListResponse>;
    /**
     * getItemWatchedStatus - Get the watched status info for an item under the active profile.
    **/
    getItemWatchedStatus(req: operations.GetItemWatchedStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetItemWatchedStatusResponse>;
    /**
     * getItemsMediaClipFiles - Get the media clip files associated with items.
     *
    **/
    getItemsMediaClipFiles(req: operations.GetItemsMediaClipFilesRequest, config?: AxiosRequestConfig): Promise<operations.GetItemsMediaClipFilesResponse>;
    /**
     * getItvPage - Returns a page with the specified id.
     *
     * This is a cut down version for low memory devices.123
     *
     * If targeting the search page you must url encode the search term as a parameter
     * using the `q` key. For example if your browser path looks like `/search?q=the`
     * then what you pass to this endpoint would look like `/itv/page?path=/search%3Fq%3Dthe`.
     *
    **/
    getItvPage(req: operations.GetItvPageRequest, config?: AxiosRequestConfig): Promise<operations.GetItvPageResponse>;
    /**
     * getItvProfileToken - Returns the ITV profile token.
    **/
    getItvProfileToken(req: operations.GetItvProfileTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetItvProfileTokenResponse>;
    /**
     * getList - Returns a list of items under the specified item list
    **/
    getList(req: operations.GetListRequest, config?: AxiosRequestConfig): Promise<operations.GetListResponse>;
    /**
     * getLists - Returns an array of item lists with their first page of content resolved.
    **/
    getLists(req: operations.GetListsRequest, config?: AxiosRequestConfig): Promise<operations.GetListsResponse>;
    /**
     * getNextPlaybackItem - Returns the next item to play given a source item id.
     *
     * For an unwatched show it returns the first episode available to the account.
     *
     * For a watched show it returns the last incompletely watched episode by the profile,
     * or the episode that immediately follows the last completely watched episode
     * or nothing.
     *
     * For an episode it always returns the immediately following episode, if available to
     * the account, or nothing.
     *
     * If the response does not contain a `next` property then no item was found.
     *
    **/
    getNextPlaybackItem(req: operations.GetNextPlaybackItemRequest, config?: AxiosRequestConfig): Promise<operations.GetNextPlaybackItemResponse>;
    /**
     * getPage - Returns a page with the specified id.
     *
     * If targeting the search page you must url encode the search term as a parameter
     * using the `q` key. For example if your browser path looks like `/search?q=the`
     * then what you pass to this endpoint would look like `/page?path=/search%3Fq%3Dthe`.
     *
    **/
    getPage(req: operations.GetPageRequest, config?: AxiosRequestConfig): Promise<operations.GetPageResponse>;
    /**
     * getPaymentMethod - Get a payment method under an account.
    **/
    getPaymentMethod(req: operations.GetPaymentMethodRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentMethodResponse>;
    /**
     * getPaymentMethods - Get the available payment methods under an account.
    **/
    getPaymentMethods(req: operations.GetPaymentMethodsRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentMethodsResponse>;
    /**
     * getPlan - Returns the plan description for EE flow including additional description data.
    **/
    getPlan(req: operations.GetPlanRequest, config?: AxiosRequestConfig): Promise<operations.GetPlanResponse>;
    /**
     * getPlanByToken - Returns all the plans available for BT flow including additional description data.
    **/
    getPlanByToken(req: operations.GetPlanByTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetPlanByTokenResponse>;
    /**
     * getPlans - Returns all the plans available for BT flow including additional description data.
    **/
    getPlans(req: operations.GetPlansRequest, config?: AxiosRequestConfig): Promise<operations.GetPlansResponse>;
    /**
     * getProfile - Get the details of the active profile, including watched, bookmarked and rated items.
    **/
    getProfile(req: operations.GetProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetProfileResponse>;
    /**
     * getProfileToken - Request one or more `Profile` level authorization tokens each with a chosen scope.
     *
     * Tokens are used to access restricted service endpoints. These restriced endpoints
     * will require a specific token type (e.g Profile) with a specific scope (e.g. Catalog)
     * before access is granted.
     *
    **/
    getProfileToken(req: operations.GetProfileTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetProfileTokenResponse>;
    /**
     * getProfileWithId - Get the summary of a profile with a specific id under the active account.
    **/
    getProfileWithId(req: operations.GetProfileWithIdRequest, config?: AxiosRequestConfig): Promise<operations.GetProfileWithIdResponse>;
    /**
     * getPublicItemMediaFiles - Get the free / public video files associated with an item given maximum resolution,
     * device type and one or more delivery types.
     *
     * Returns an array of video file objects which each include a url to a video.
     *
     * The first entry in the array contains what is predicted to be the best match.
     * The remainder of the entries, if any, may contain resolutions below what was
     * requests. For example if you request HD-720 the response may also contain
     * SD entries.
     *
     * If you specify multiple delivery types, then the response array will insert
     * types in the order you specify them in the query. For example `stream,progressive`
     * would return an array with 0 or more stream files followed by 0 or more progressive files.
     *
     * If no files are found a 404 is returned.
     *
    **/
    getPublicItemMediaFiles(req: operations.GetPublicItemMediaFilesRequest, config?: AxiosRequestConfig): Promise<operations.GetPublicItemMediaFilesResponse>;
    /**
     * getPublicPreview - Returns public preview for Samsung based on the page '/samsung-preview' configured in PresentationManager.
     * There is a hard limit of max 40 items to be returned. It splits evenly items count into the page rows, remaining items are added into the first row.
     *
    **/
    getPublicPreview(config?: AxiosRequestConfig): Promise<operations.GetPublicPreviewResponse>;
    /**
     * getPurchases - Get a list of all purchases made under an account.
    **/
    getPurchases(req: operations.GetPurchasesRequest, config?: AxiosRequestConfig): Promise<operations.GetPurchasesResponse>;
    /**
     * getRatings - Get the map of rated item ids (itemId => rating out of 10) under the active profile.
    **/
    getRatings(req: operations.GetRatingsRequest, config?: AxiosRequestConfig): Promise<operations.GetRatingsResponse>;
    /**
     * getRatingsList - Returns the list of rated items under the active profile.
    **/
    getRatingsList(req: operations.GetRatingsListRequest, config?: AxiosRequestConfig): Promise<operations.GetRatingsListResponse>;
    /**
     * getRecommendedList - Get the list of recommended items under the active profile.
    **/
    getRecommendedList(req: operations.GetRecommendedListRequest, config?: AxiosRequestConfig): Promise<operations.GetRecommendedListResponse>;
    /**
     * getSaveOffer - Checks the provided coupon id for a user. Only Stripe platform is currently supported.
    **/
    getSaveOffer(req: operations.GetSaveOfferRequest, config?: AxiosRequestConfig): Promise<operations.GetSaveOfferResponse>;
    /**
     * getSchedules - Returns schedules for a defined set of channels over a requested period.
     *
     * Schedules are requested in hour blocks and returned grouped by the channel
     * they belong to.
     *
     * For example, to load 12 hours of schedules for channels `4343` and `5234`,
     * on 21/2/2017 starting from 08:00.
     *
     * ```
     * channels=4343,5234
     * date=2017-02-21
     * hour=8
     * duration=12
     * ```
     *
     * Please remember that `date` and `hour` combined represent a normal datetime,
     * so they should be converted to UTC on the client - this will help to avoid
     * issues with EPG schedules near midnight.
     *
     * If a channel id is passed which doesn't exist then this endpoint will
     * return an empty schedule list for it. If instead we returned 404,
     * this would invalidate all other channel schedules in the same request
     * which would be unfriendly for clients presenting these channel schedules.
     *
    **/
    getSchedules(req: operations.GetSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.GetSchedulesResponse>;
    /**
     * getSubscriptionData - Returns the details of subscription data for a user with specified id.
    **/
    getSubscriptionData(req: operations.GetSubscriptionDataRequest, config?: AxiosRequestConfig): Promise<operations.GetSubscriptionDataResponse>;
    /**
     * getSubscriptionState - Returns the state of subscription for any payment platform.
    **/
    getSubscriptionState(req: operations.GetSubscriptionStateRequest, config?: AxiosRequestConfig): Promise<operations.GetSubscriptionStateResponse>;
    /**
     * getSubscriptionStatus - Returns status of latest payment intent.
    **/
    getSubscriptionStatus(req: operations.GetSubscriptionStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetSubscriptionStatusResponse>;
    /**
     * getUpcomingInvoice - Returns an upcoming invoice
    **/
    getUpcomingInvoice(req: operations.GetUpcomingInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.GetUpcomingInvoiceResponse>;
    /**
     * getVoucherById - Checks the provided coupon id for a user. Only Stripe platform is currently supported.
    **/
    getVoucherById(req: operations.GetVoucherByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetVoucherByIdResponse>;
    /**
     * getWatched - Get the map of watched item ids (itemId => last playhead position) under the active profile.
    **/
    getWatched(req: operations.GetWatchedRequest, config?: AxiosRequestConfig): Promise<operations.GetWatchedResponse>;
    /**
     * getWatchedList - Returns the list of watched items under the active profile.
    **/
    getWatchedList(req: operations.GetWatchedListRequest, config?: AxiosRequestConfig): Promise<operations.GetWatchedListResponse>;
    /**
     * googlePaySubscription - Get the list of recommended items under the active profile.
    **/
    googlePaySubscription(req: operations.GooglePaySubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GooglePaySubscriptionResponse>;
    /**
     * makePurchase - Purchase a plan or item offer.
     * The result of a successful transaction is a new entitlement.
     *
    **/
    makePurchase(req: operations.MakePurchaseRequest, config?: AxiosRequestConfig): Promise<operations.MakePurchaseResponse>;
    /**
     * rateItem - Rate an item under the active profile.
     *
     * Creates one if it doesn't exist, overwrites one if it does.
     *
    **/
    rateItem(req: operations.RateItemRequest, config?: AxiosRequestConfig): Promise<operations.RateItemResponse>;
    /**
     * refreshToken - Refresh an account or profile level authorization token which is marked as refreshable.
    **/
    refreshToken(req: operations.RefreshTokenRequest, config?: AxiosRequestConfig): Promise<operations.RefreshTokenResponse>;
    /**
     * register - Register a new user, creating them an account.
     *
     * Registration, when successful, will return an array of access tokens so the user is
     * immediately signed in.
     *
     * It returns Catalog and Commerce scoped tokens for both Account and Profile.
     * The Commerce ones are intended to allow the purchase of a subscription plan
     * in the step after registration, without the user being prompted to enter
     * their username and password again.
     *
     * An email will also be sent with a link they need to click to confirm their
     * email address. This confirmation is done via the /verify-email endpoint.
     *
    **/
    register(req: operations.RegisterRequest, config?: AxiosRequestConfig): Promise<operations.RegisterResponse>;
    /**
     * registerDevice - Register a playback device under an account.
     *
     * If a device with the same id already exists a `409` conflict will be returned.
     *
    **/
    registerDevice(req: operations.RegisterDeviceRequest, config?: AxiosRequestConfig): Promise<operations.RegisterDeviceResponse>;
    /**
     * removePaymentMethod - Remove a payment method from an account.
    **/
    removePaymentMethod(req: operations.RemovePaymentMethodRequest, config?: AxiosRequestConfig): Promise<operations.RemovePaymentMethodResponse>;
    /**
     * renameDevice - Rename a device
    **/
    renameDevice(req: operations.RenameDeviceRequest, config?: AxiosRequestConfig): Promise<operations.RenameDeviceResponse>;
    /**
     * requestEmailVerification - Request that the email address tied to an account be verified.
     *
     * This will send a verification email to the email address of the primary profile containing
     * a link which, once clicked, completes the verification process via the /verify-email endpoint.
     *
     * Note that when an account is created this email is sent automatically so there's no need
     * to call this directly.
     *
     * If the user doesn't click the link before it expires then this endpoint can be called
     * to request a new verification email. In the future it may also be used if we add support
     * for changing an account email address.
     *
    **/
    requestEmailVerification(req: operations.RequestEmailVerificationRequest, config?: AxiosRequestConfig): Promise<operations.RequestEmailVerificationResponse>;
    /**
     * resetPassword - When a user requests to reset their password via the /request-password-reset endpoint, an
     * email is sent to the email address of the primary profile of the account. This email contains a link
     * with a reset token as query parameter. The link should take the user to the "reset-password"
     * page of the website.
     *
     * From the reset-password page a user should enter the new password they wish to use.
     * It should then be submitted to this endpoint,
     * along with the reset token from the email link.
     * The token should be provided in the body as resetToken property.
     *
    **/
    resetPassword(req: operations.ResetPasswordRequest, config?: AxiosRequestConfig): Promise<operations.ResetPasswordResponse>;
    /**
     * resubscribe - Resubscription for a user.
    **/
    resubscribe(req: operations.ResubscribeRequest, config?: AxiosRequestConfig): Promise<operations.ResubscribeResponse>;
    /**
     * search - Search the catalog of items and people.
    **/
    search(req: operations.SearchRequest, config?: AxiosRequestConfig): Promise<operations.SearchResponse>;
    /**
     * setItemWatchedStatus - Record the watched playhead position of a video under the active profile.
     *
     * Can be used later to resume a video from where it was last watched.
     *
     * Creates one if it doesn't exist, overwrites one if it does.
     *
    **/
    setItemWatchedStatus(req: operations.SetItemWatchedStatusRequest, config?: AxiosRequestConfig): Promise<operations.SetItemWatchedStatusResponse>;
    /**
     * signOut - When a user signs out of an application we need to clear some
     * basic cookies we assigned them during token authorization.
     *
    **/
    signOut(req: operations.SignOutRequest, config?: AxiosRequestConfig): Promise<operations.SignOutResponse>;
    /**
     * singleSignOn - Exchange a third party single-sign-on token for our own authorization tokens.
    **/
    singleSignOn(req: operations.SingleSignOnRequest, config?: AxiosRequestConfig): Promise<operations.SingleSignOnResponse>;
    /**
     * updateAccount - Update the details of an account.
     *
     * With the exception of the address, this supports partial updates, so you can send just the
     * properties you wish to update.
     *
     * When the address is provided any properties which are omitted from the address will be cleared.
     *
    **/
    updateAccount(req: operations.UpdateAccountRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAccountResponse>;
    /**
     * updatePaymentIntentStrong - Change payment method details.
    **/
    updatePaymentIntentStrong(req: operations.UpdatePaymentIntentStrongRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePaymentIntentStrongResponse>;
    /**
     * updatePaymentMethodStrong - Change payment method details.
    **/
    updatePaymentMethodStrong(req: operations.UpdatePaymentMethodStrongRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePaymentMethodStrongResponse>;
    /**
     * updateProfile - Update ITV profile.
     *
     * The expected token scope is Settings.
     *
    **/
    updateProfile(req: operations.UpdateProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProfileResponse>;
    /**
     * updateProfileWithId - Update the summary of a profile with a specific id under the active account.
     *
     * This supports partial updates so you can send just the properties you wish to update.
     *
    **/
    updateProfileWithId(req: operations.UpdateProfileWithIdRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProfileWithIdResponse>;
    /**
     * updateSubscription - Renew a cancelled subscription or switch subscription to a different plan.
     *
     * When renewing a cancelled subscription membership, hit this endpoint with
     * the id of subscription to renew.
     *
     * To switch plans provide the id of the current active subscription membership
     * of the account, and in the query specify the id of the plan to switch to.
     *
    **/
    updateSubscription(req: operations.UpdateSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSubscriptionResponse>;
    /**
     * upgradePlan - Upgrades the plan for the current user.
    **/
    upgradePlan(req: operations.UpgradePlanRequest, config?: AxiosRequestConfig): Promise<operations.UpgradePlanResponse>;
    /**
     * validatePinRequest - Validate PIN request created by calling POST /ee/pin This call is to validate MSISDN entered by a user not comming through EE network. This call should be called after PUT /ee/pin. This call should be followed by POST /ee/offers.
    **/
    validatePinRequest(req: operations.ValidatePinRequestRequest, config?: AxiosRequestConfig): Promise<operations.ValidatePinRequestResponse>;
    /**
     * verifyEmail - When an account is created an email is sent to the email address of the new account.
     * This contains a link, which once clicked, verifies the email address of the account is correct.
     *
     * The link contains a token as a query parameter which should be passed as the authorization
     * bearer token to this endpoint to complete email verification.
     *
     * The token has en expiry, so if the link is not clicked before it expires, the account holder
     * may need to request a new verification email be sent. This can be done via the endpoint
     * /account/request-email-verification.
     *
    **/
    verifyEmail(req: operations.VerifyEmailRequest, config?: AxiosRequestConfig): Promise<operations.VerifyEmailResponse>;
}
export {};
