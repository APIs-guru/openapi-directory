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
    
    req := operations.AndroidpublisherEditsApklistingsDeleteRequest{
        Security: operations.AndroidpublisherEditsApklistingsDeleteSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AndroidpublisherEditsApklistingsDeletePathParams{
            ApkVersionCode: 3004786443331028729,
            EditID: "consequuntur",
            Language: "tenetur",
            PackageName: "eos",
        },
        QueryParams: operations.AndroidpublisherEditsApklistingsDeleteQueryParams{
            Alt: "json",
            Fields: "et",
            Key: "cumque",
            OauthToken: "reprehenderit",
            PrettyPrint: false,
            QuotaUser: "ut",
            UserIP: "dicta",
        },
    }
    
    res, err := s.Edits.AndroidpublisherEditsApklistingsDelete(ctx, req)
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

### edits

* `AndroidpublisherEditsApklistingsDelete` - Deletes the APK-specific localized listing for a specified APK and language code.
* `AndroidpublisherEditsApklistingsDeleteall` - Deletes all the APK-specific localized listings for a specified APK.
* `AndroidpublisherEditsApklistingsGet` - Fetches the APK-specific localized listing for a specified APK and language code.
* `AndroidpublisherEditsApklistingsList` - Lists all the APK-specific localized listings for a specified APK.
* `AndroidpublisherEditsApklistingsPatch` - Updates or creates the APK-specific localized listing for a specified APK and language code. This method supports patch semantics.
* `AndroidpublisherEditsApklistingsUpdate` - Updates or creates the APK-specific localized listing for a specified APK and language code.
* `AndroidpublisherEditsApksAddexternallyhosted` - Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to enterprises using Google Play for Work whose application is configured to restrict distribution to the enterprise domain.
* `AndroidpublisherEditsApksList`
* `AndroidpublisherEditsApksUpload`
* `AndroidpublisherEditsBundlesList`
* `AndroidpublisherEditsBundlesUpload` - Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See: https://developers.google.com/api-client-library/java/google-api-java-client/errors for an example in java.
* `AndroidpublisherEditsCommit` - Commits/applies the changes made in this edit back to the app.
* `AndroidpublisherEditsDelete` - Deletes an edit for an app. Creating a new edit will automatically delete any of your previous edits so this method need only be called if you want to preemptively abandon an edit.
* `AndroidpublisherEditsDeobfuscationfilesUpload` - Uploads the deobfuscation file of the specified APK. If a deobfuscation or symbolication file already exists, it will be replaced. See https://developer.android.com/studio/build/shrink-code to learn more about deobfuscation files.
* `AndroidpublisherEditsDetailsGet` - Fetches app details for this edit. This includes the default language and developer support contact information.
* `AndroidpublisherEditsDetailsPatch` - Updates app details for this edit. This method supports patch semantics.
* `AndroidpublisherEditsDetailsUpdate` - Updates app details for this edit.
* `AndroidpublisherEditsExpansionfilesGet` - Fetches the Expansion File configuration for the APK specified.
* `AndroidpublisherEditsExpansionfilesPatch` - Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method. This method supports patch semantics.
* `AndroidpublisherEditsExpansionfilesUpdate` - Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method.
* `AndroidpublisherEditsExpansionfilesUpload` - Uploads and attaches a new Expansion File to the APK specified.
* `AndroidpublisherEditsGet` - Returns information about the edit specified. Calls will fail if the edit is no long active (e.g. has been deleted, superseded or expired).
* `AndroidpublisherEditsImagesDelete` - Deletes the image (specified by id) from the edit.
* `AndroidpublisherEditsImagesDeleteall` - Deletes all images for the specified language and image type.
* `AndroidpublisherEditsImagesList` - Lists all images for the specified language and image type.
* `AndroidpublisherEditsImagesUpload` - Uploads a new image and adds it to the list of images for the specified language and image type.
* `AndroidpublisherEditsInsert` - Creates a new edit for an app, populated with the app's current state.
* `AndroidpublisherEditsListingsDelete` - Deletes the specified localized store listing from an edit.
* `AndroidpublisherEditsListingsDeleteall` - Deletes all localized listings from an edit.
* `AndroidpublisherEditsListingsGet` - Fetches information about a localized store listing.
* `AndroidpublisherEditsListingsList` - Returns all of the localized store listings attached to this edit.
* `AndroidpublisherEditsListingsPatch` - Creates or updates a localized store listing. This method supports patch semantics.
* `AndroidpublisherEditsListingsUpdate` - Creates or updates a localized store listing.
* `AndroidpublisherEditsTestersGet`
* `AndroidpublisherEditsTestersPatch`
* `AndroidpublisherEditsTestersUpdate`
* `AndroidpublisherEditsTracksGet` - Fetches the track configuration for the specified track type. Includes the APK version codes that are in this track.
* `AndroidpublisherEditsTracksList` - Lists all the track configurations for this edit.
* `AndroidpublisherEditsTracksPatch` - Updates the track configuration for the specified track type. This method supports patch semantics.
* `AndroidpublisherEditsTracksUpdate` - Updates the track configuration for the specified track type.
* `AndroidpublisherEditsValidate` - Checks that the edit can be successfully committed. The edit's changes are not applied to the live app.

### inappproducts

* `AndroidpublisherInappproductsDelete` - Delete an in-app product for an app.
* `AndroidpublisherInappproductsGet` - Returns information about the in-app product specified.
* `AndroidpublisherInappproductsInsert` - Creates a new in-app product for an app.
* `AndroidpublisherInappproductsList` - List all the in-app products for an Android app, both subscriptions and managed in-app products..
* `AndroidpublisherInappproductsPatch` - Updates the details of an in-app product. This method supports patch semantics.
* `AndroidpublisherInappproductsUpdate` - Updates the details of an in-app product.

### orders

* `AndroidpublisherOrdersRefund` - Refund a user's subscription or in-app purchase order.

### purchases

* `AndroidpublisherPurchasesProductsGet` - Checks the purchase and consumption status of an inapp item.
* `AndroidpublisherPurchasesSubscriptionsCancel` - Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
* `AndroidpublisherPurchasesSubscriptionsDefer` - Defers a user's subscription purchase until a specified future expiration time.
* `AndroidpublisherPurchasesSubscriptionsGet` - Checks whether a user's subscription purchase is valid and returns its expiry time.
* `AndroidpublisherPurchasesSubscriptionsRefund` - Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
* `AndroidpublisherPurchasesSubscriptionsRevoke` - Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
* `AndroidpublisherPurchasesVoidedpurchasesList` - Lists the purchases that were canceled, refunded or charged-back.

### reviews

* `AndroidpublisherReviewsGet` - Returns a single review.
* `AndroidpublisherReviewsList` - Returns a list of reviews. Only reviews from last week will be returned.
* `AndroidpublisherReviewsReply` - Reply to a single review, or update an existing reply.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
