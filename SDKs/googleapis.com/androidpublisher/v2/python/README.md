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
    
req = operations.AndroidpublisherEditsApklistingsDeleteRequest(
    security=operations.AndroidpublisherEditsApklistingsDeleteSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.AndroidpublisherEditsApklistingsDeletePathParams(
        apk_version_code=3004786443331028729,
        edit_id="consequuntur",
        language="tenetur",
        package_name="eos",
    ),
    query_params=operations.AndroidpublisherEditsApklistingsDeleteQueryParams(
        alt="json",
        fields="et",
        key="cumque",
        oauth_token="reprehenderit",
        pretty_print=False,
        quota_user="ut",
        user_ip="dicta",
    ),
)
    
res = s.edits.androidpublisher_edits_apklistings_delete(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### edits

* `androidpublisher_edits_apklistings_delete` - Deletes the APK-specific localized listing for a specified APK and language code.
* `androidpublisher_edits_apklistings_deleteall` - Deletes all the APK-specific localized listings for a specified APK.
* `androidpublisher_edits_apklistings_get` - Fetches the APK-specific localized listing for a specified APK and language code.
* `androidpublisher_edits_apklistings_list` - Lists all the APK-specific localized listings for a specified APK.
* `androidpublisher_edits_apklistings_patch` - Updates or creates the APK-specific localized listing for a specified APK and language code. This method supports patch semantics.
* `androidpublisher_edits_apklistings_update` - Updates or creates the APK-specific localized listing for a specified APK and language code.
* `androidpublisher_edits_apks_addexternallyhosted` - Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to enterprises using Google Play for Work whose application is configured to restrict distribution to the enterprise domain.
* `androidpublisher_edits_apks_list`
* `androidpublisher_edits_apks_upload`
* `androidpublisher_edits_bundles_list`
* `androidpublisher_edits_bundles_upload` - Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See: https://developers.google.com/api-client-library/java/google-api-java-client/errors for an example in java.
* `androidpublisher_edits_commit` - Commits/applies the changes made in this edit back to the app.
* `androidpublisher_edits_delete` - Deletes an edit for an app. Creating a new edit will automatically delete any of your previous edits so this method need only be called if you want to preemptively abandon an edit.
* `androidpublisher_edits_deobfuscationfiles_upload` - Uploads the deobfuscation file of the specified APK. If a deobfuscation or symbolication file already exists, it will be replaced. See https://developer.android.com/studio/build/shrink-code to learn more about deobfuscation files.
* `androidpublisher_edits_details_get` - Fetches app details for this edit. This includes the default language and developer support contact information.
* `androidpublisher_edits_details_patch` - Updates app details for this edit. This method supports patch semantics.
* `androidpublisher_edits_details_update` - Updates app details for this edit.
* `androidpublisher_edits_expansionfiles_get` - Fetches the Expansion File configuration for the APK specified.
* `androidpublisher_edits_expansionfiles_patch` - Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method. This method supports patch semantics.
* `androidpublisher_edits_expansionfiles_update` - Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method.
* `androidpublisher_edits_expansionfiles_upload` - Uploads and attaches a new Expansion File to the APK specified.
* `androidpublisher_edits_get` - Returns information about the edit specified. Calls will fail if the edit is no long active (e.g. has been deleted, superseded or expired).
* `androidpublisher_edits_images_delete` - Deletes the image (specified by id) from the edit.
* `androidpublisher_edits_images_deleteall` - Deletes all images for the specified language and image type.
* `androidpublisher_edits_images_list` - Lists all images for the specified language and image type.
* `androidpublisher_edits_images_upload` - Uploads a new image and adds it to the list of images for the specified language and image type.
* `androidpublisher_edits_insert` - Creates a new edit for an app, populated with the app's current state.
* `androidpublisher_edits_listings_delete` - Deletes the specified localized store listing from an edit.
* `androidpublisher_edits_listings_deleteall` - Deletes all localized listings from an edit.
* `androidpublisher_edits_listings_get` - Fetches information about a localized store listing.
* `androidpublisher_edits_listings_list` - Returns all of the localized store listings attached to this edit.
* `androidpublisher_edits_listings_patch` - Creates or updates a localized store listing. This method supports patch semantics.
* `androidpublisher_edits_listings_update` - Creates or updates a localized store listing.
* `androidpublisher_edits_testers_get`
* `androidpublisher_edits_testers_patch`
* `androidpublisher_edits_testers_update`
* `androidpublisher_edits_tracks_get` - Fetches the track configuration for the specified track type. Includes the APK version codes that are in this track.
* `androidpublisher_edits_tracks_list` - Lists all the track configurations for this edit.
* `androidpublisher_edits_tracks_patch` - Updates the track configuration for the specified track type. This method supports patch semantics.
* `androidpublisher_edits_tracks_update` - Updates the track configuration for the specified track type.
* `androidpublisher_edits_validate` - Checks that the edit can be successfully committed. The edit's changes are not applied to the live app.

### inappproducts

* `androidpublisher_inappproducts_delete` - Delete an in-app product for an app.
* `androidpublisher_inappproducts_get` - Returns information about the in-app product specified.
* `androidpublisher_inappproducts_insert` - Creates a new in-app product for an app.
* `androidpublisher_inappproducts_list` - List all the in-app products for an Android app, both subscriptions and managed in-app products..
* `androidpublisher_inappproducts_patch` - Updates the details of an in-app product. This method supports patch semantics.
* `androidpublisher_inappproducts_update` - Updates the details of an in-app product.

### orders

* `androidpublisher_orders_refund` - Refund a user's subscription or in-app purchase order.

### purchases

* `androidpublisher_purchases_products_get` - Checks the purchase and consumption status of an inapp item.
* `androidpublisher_purchases_subscriptions_cancel` - Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
* `androidpublisher_purchases_subscriptions_defer` - Defers a user's subscription purchase until a specified future expiration time.
* `androidpublisher_purchases_subscriptions_get` - Checks whether a user's subscription purchase is valid and returns its expiry time.
* `androidpublisher_purchases_subscriptions_refund` - Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
* `androidpublisher_purchases_subscriptions_revoke` - Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
* `androidpublisher_purchases_voidedpurchases_list` - Lists the purchases that were canceled, refunded or charged-back.

### reviews

* `androidpublisher_reviews_get` - Returns a single review.
* `androidpublisher_reviews_list` - Returns a list of reviews. Only reviews from last week will be returned.
* `androidpublisher_reviews_reply` - Reply to a single review, or update an existing reply.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
