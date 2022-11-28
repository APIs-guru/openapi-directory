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
import { AndroidpublisherEditsApklistingsDeleteRequest, AndroidpublisherEditsApklistingsDeleteResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AndroidpublisherEditsApklistingsDeleteRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    apkVersionCode: 3004786443331028729,
    editId: "consequuntur",
    language: "tenetur",
    packageName: "eos",
  },
  queryParams: {
    alt: "json",
    fields: "et",
    key: "cumque",
    oauthToken: "reprehenderit",
    prettyPrint: false,
    quotaUser: "ut",
    userIp: "dicta",
  },
};

sdk.edits.androidpublisherEditsApklistingsDelete(req).then((res: AndroidpublisherEditsApklistingsDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### edits

* `androidpublisherEditsApklistingsDelete` - Deletes the APK-specific localized listing for a specified APK and language code.
* `androidpublisherEditsApklistingsDeleteall` - Deletes all the APK-specific localized listings for a specified APK.
* `androidpublisherEditsApklistingsGet` - Fetches the APK-specific localized listing for a specified APK and language code.
* `androidpublisherEditsApklistingsList` - Lists all the APK-specific localized listings for a specified APK.
* `androidpublisherEditsApklistingsPatch` - Updates or creates the APK-specific localized listing for a specified APK and language code. This method supports patch semantics.
* `androidpublisherEditsApklistingsUpdate` - Updates or creates the APK-specific localized listing for a specified APK and language code.
* `androidpublisherEditsApksAddexternallyhosted` - Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to enterprises using Google Play for Work whose application is configured to restrict distribution to the enterprise domain.
* `androidpublisherEditsApksList`
* `androidpublisherEditsApksUpload`
* `androidpublisherEditsBundlesList`
* `androidpublisherEditsBundlesUpload` - Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See: https://developers.google.com/api-client-library/java/google-api-java-client/errors for an example in java.
* `androidpublisherEditsCommit` - Commits/applies the changes made in this edit back to the app.
* `androidpublisherEditsDelete` - Deletes an edit for an app. Creating a new edit will automatically delete any of your previous edits so this method need only be called if you want to preemptively abandon an edit.
* `androidpublisherEditsDeobfuscationfilesUpload` - Uploads the deobfuscation file of the specified APK. If a deobfuscation or symbolication file already exists, it will be replaced. See https://developer.android.com/studio/build/shrink-code to learn more about deobfuscation files.
* `androidpublisherEditsDetailsGet` - Fetches app details for this edit. This includes the default language and developer support contact information.
* `androidpublisherEditsDetailsPatch` - Updates app details for this edit. This method supports patch semantics.
* `androidpublisherEditsDetailsUpdate` - Updates app details for this edit.
* `androidpublisherEditsExpansionfilesGet` - Fetches the Expansion File configuration for the APK specified.
* `androidpublisherEditsExpansionfilesPatch` - Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method. This method supports patch semantics.
* `androidpublisherEditsExpansionfilesUpdate` - Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method.
* `androidpublisherEditsExpansionfilesUpload` - Uploads and attaches a new Expansion File to the APK specified.
* `androidpublisherEditsGet` - Returns information about the edit specified. Calls will fail if the edit is no long active (e.g. has been deleted, superseded or expired).
* `androidpublisherEditsImagesDelete` - Deletes the image (specified by id) from the edit.
* `androidpublisherEditsImagesDeleteall` - Deletes all images for the specified language and image type.
* `androidpublisherEditsImagesList` - Lists all images for the specified language and image type.
* `androidpublisherEditsImagesUpload` - Uploads a new image and adds it to the list of images for the specified language and image type.
* `androidpublisherEditsInsert` - Creates a new edit for an app, populated with the app's current state.
* `androidpublisherEditsListingsDelete` - Deletes the specified localized store listing from an edit.
* `androidpublisherEditsListingsDeleteall` - Deletes all localized listings from an edit.
* `androidpublisherEditsListingsGet` - Fetches information about a localized store listing.
* `androidpublisherEditsListingsList` - Returns all of the localized store listings attached to this edit.
* `androidpublisherEditsListingsPatch` - Creates or updates a localized store listing. This method supports patch semantics.
* `androidpublisherEditsListingsUpdate` - Creates or updates a localized store listing.
* `androidpublisherEditsTestersGet`
* `androidpublisherEditsTestersPatch`
* `androidpublisherEditsTestersUpdate`
* `androidpublisherEditsTracksGet` - Fetches the track configuration for the specified track type. Includes the APK version codes that are in this track.
* `androidpublisherEditsTracksList` - Lists all the track configurations for this edit.
* `androidpublisherEditsTracksPatch` - Updates the track configuration for the specified track type. This method supports patch semantics.
* `androidpublisherEditsTracksUpdate` - Updates the track configuration for the specified track type.
* `androidpublisherEditsValidate` - Checks that the edit can be successfully committed. The edit's changes are not applied to the live app.

### inappproducts

* `androidpublisherInappproductsDelete` - Delete an in-app product for an app.
* `androidpublisherInappproductsGet` - Returns information about the in-app product specified.
* `androidpublisherInappproductsInsert` - Creates a new in-app product for an app.
* `androidpublisherInappproductsList` - List all the in-app products for an Android app, both subscriptions and managed in-app products..
* `androidpublisherInappproductsPatch` - Updates the details of an in-app product. This method supports patch semantics.
* `androidpublisherInappproductsUpdate` - Updates the details of an in-app product.

### orders

* `androidpublisherOrdersRefund` - Refund a user's subscription or in-app purchase order.

### purchases

* `androidpublisherPurchasesProductsGet` - Checks the purchase and consumption status of an inapp item.
* `androidpublisherPurchasesSubscriptionsCancel` - Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
* `androidpublisherPurchasesSubscriptionsDefer` - Defers a user's subscription purchase until a specified future expiration time.
* `androidpublisherPurchasesSubscriptionsGet` - Checks whether a user's subscription purchase is valid and returns its expiry time.
* `androidpublisherPurchasesSubscriptionsRefund` - Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
* `androidpublisherPurchasesSubscriptionsRevoke` - Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
* `androidpublisherPurchasesVoidedpurchasesList` - Lists the purchases that were canceled, refunded or charged-back.

### reviews

* `androidpublisherReviewsGet` - Returns a single review.
* `androidpublisherReviewsList` - Returns a list of reviews. Only reviews from last week will be returned.
* `androidpublisherReviewsReply` - Reply to a single review, or update an existing reply.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
