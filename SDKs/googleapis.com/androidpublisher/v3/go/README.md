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
    
    req := operations.AndroidpublisherApplicationsDeviceTierConfigsCreateRequest{
        Security: operations.AndroidpublisherApplicationsDeviceTierConfigsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AndroidpublisherApplicationsDeviceTierConfigsCreatePathParams{
            PackageName: "quo",
        },
        QueryParams: operations.AndroidpublisherApplicationsDeviceTierConfigsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "eos",
            AllowUnknownDevices: false,
            Alt: "proto",
            Callback: "consequatur",
            Fields: "aspernatur",
            Key: "dolores",
            OauthToken: "voluptatibus",
            PrettyPrint: true,
            QuotaUser: "omnis",
            UploadType: "et",
            UploadProtocol: "est",
        },
        Request: &shared.DeviceTierConfigInput{
            DeviceGroups: []shared.DeviceGroup{
                shared.DeviceGroup{
                    DeviceSelectors: []shared.DeviceSelector{
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "repudiandae",
                                MinBytes: "delectus",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "et",
                                    BuildDevice: "tenetur",
                                },
                                shared.DeviceID{
                                    BuildBrand: "labore",
                                    BuildDevice: "est",
                                },
                                shared.DeviceID{
                                    BuildBrand: "voluptatem",
                                    BuildDevice: "provident",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "mollitia",
                                },
                                shared.SystemFeature{
                                    Name: "vitae",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "magni",
                                    BuildDevice: "iusto",
                                },
                                shared.DeviceID{
                                    BuildBrand: "autem",
                                    BuildDevice: "et",
                                },
                                shared.DeviceID{
                                    BuildBrand: "aut",
                                    BuildDevice: "explicabo",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "quia",
                                },
                            },
                        },
                    },
                    Name: "veniam",
                },
                shared.DeviceGroup{
                    DeviceSelectors: []shared.DeviceSelector{
                        shared.DeviceSelector{
                            DeviceRAM: &shared.DeviceRAM{
                                MaxBytes: "ducimus",
                                MinBytes: "soluta",
                            },
                            ExcludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "cumque",
                                    BuildDevice: "aut",
                                },
                                shared.DeviceID{
                                    BuildBrand: "explicabo",
                                    BuildDevice: "maxime",
                                },
                            },
                            ForbiddenSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "ut",
                                },
                            },
                            IncludedDeviceIds: []shared.DeviceID{
                                shared.DeviceID{
                                    BuildBrand: "placeat",
                                    BuildDevice: "modi",
                                },
                                shared.DeviceID{
                                    BuildBrand: "et",
                                    BuildDevice: "qui",
                                },
                                shared.DeviceID{
                                    BuildBrand: "quo",
                                    BuildDevice: "rerum",
                                },
                            },
                            RequiredSystemFeatures: []shared.SystemFeature{
                                shared.SystemFeature{
                                    Name: "dolor",
                                },
                                shared.SystemFeature{
                                    Name: "exercitationem",
                                },
                            },
                        },
                    },
                    Name: "inventore",
                },
            },
            DeviceTierSet: &shared.DeviceTierSet{
                DeviceTiers: []shared.DeviceTier{
                    shared.DeviceTier{
                        DeviceGroupNames: []string{
                            "sunt",
                        },
                        Level: 8374802233122473252,
                    },
                },
            },
        },
    }
    
    res, err := s.Applications.AndroidpublisherApplicationsDeviceTierConfigsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceTierConfig != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### applications

* `AndroidpublisherApplicationsDeviceTierConfigsCreate` - Creates a new device tier config for an app.
* `AndroidpublisherApplicationsDeviceTierConfigsGet` - Returns a particular device tier config.
* `AndroidpublisherApplicationsDeviceTierConfigsList` - Returns created device tier configs, ordered by descending creation time.

### edits

* `AndroidpublisherEditsApksAddexternallyhosted` - Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.
* `AndroidpublisherEditsApksList` - Lists all current APKs of the app and edit.
* `AndroidpublisherEditsApksUpload` - Uploads an APK and adds to the current edit.
* `AndroidpublisherEditsBundlesList` - Lists all current Android App Bundles of the app and edit.
* `AndroidpublisherEditsBundlesUpload` - Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
* `AndroidpublisherEditsCommit` - Commits an app edit.
* `AndroidpublisherEditsCountryavailabilityGet` - Gets country availability.
* `AndroidpublisherEditsDelete` - Deletes an app edit.
* `AndroidpublisherEditsDeobfuscationfilesUpload` - Uploads a new deobfuscation file and attaches to the specified APK.
* `AndroidpublisherEditsDetailsGet` - Gets details of an app.
* `AndroidpublisherEditsDetailsPatch` - Patches details of an app.
* `AndroidpublisherEditsDetailsUpdate` - Updates details of an app.
* `AndroidpublisherEditsExpansionfilesGet` - Fetches the expansion file configuration for the specified APK.
* `AndroidpublisherEditsExpansionfilesPatch` - Patches the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
* `AndroidpublisherEditsExpansionfilesUpdate` - Updates the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
* `AndroidpublisherEditsExpansionfilesUpload` - Uploads a new expansion file and attaches to the specified APK.
* `AndroidpublisherEditsGet` - Gets an app edit.
* `AndroidpublisherEditsImagesDelete` - Deletes the image (specified by id) from the edit.
* `AndroidpublisherEditsImagesDeleteall` - Deletes all images for the specified language and image type. Returns an empty response if no images are found.
* `AndroidpublisherEditsImagesList` - Lists all images. The response may be empty.
* `AndroidpublisherEditsImagesUpload` - Uploads an image of the specified language and image type, and adds to the edit.
* `AndroidpublisherEditsInsert` - Creates a new edit for an app.
* `AndroidpublisherEditsListingsDelete` - Deletes a localized store listing.
* `AndroidpublisherEditsListingsDeleteall` - Deletes all store listings.
* `AndroidpublisherEditsListingsGet` - Gets a localized store listing.
* `AndroidpublisherEditsListingsList` - Lists all localized store listings.
* `AndroidpublisherEditsListingsPatch` - Patches a localized store listing.
* `AndroidpublisherEditsListingsUpdate` - Creates or updates a localized store listing.
* `AndroidpublisherEditsTestersGet` - Gets testers. Note: Testers resource does not support email lists.
* `AndroidpublisherEditsTestersPatch` - Patches testers. Note: Testers resource does not support email lists.
* `AndroidpublisherEditsTestersUpdate` - Updates testers. Note: Testers resource does not support email lists.
* `AndroidpublisherEditsTracksGet` - Gets a track.
* `AndroidpublisherEditsTracksList` - Lists all tracks.
* `AndroidpublisherEditsTracksPatch` - Patches a track.
* `AndroidpublisherEditsTracksUpdate` - Updates a track.
* `AndroidpublisherEditsValidate` - Validates an app edit.

### generatedapks

* `AndroidpublisherGeneratedapksDownload` - Downloads a single signed APK generated from an app bundle.
* `AndroidpublisherGeneratedapksList` - Returns download metadata for all APKs that were generated from a given app bundle.

### grants

* `AndroidpublisherGrantsCreate` - Grant access for a user to the given package.

### inappproducts

* `AndroidpublisherInappproductsDelete` - Deletes an in-app product (i.e. a managed product or a subscriptions).
* `AndroidpublisherInappproductsGet` - Gets an in-app product, which can be a managed product or a subscription.
* `AndroidpublisherInappproductsInsert` - Creates an in-app product (i.e. a managed product or a subscriptions).
* `AndroidpublisherInappproductsList` - Lists all in-app products - both managed products and subscriptions. If an app has a large number of in-app products, the response may be paginated. In this case the response field `tokenPagination.nextPageToken` will be set and the caller should provide its value as a `token` request parameter to retrieve the next page.
* `AndroidpublisherInappproductsPatch` - Patches an in-app product (i.e. a managed product or a subscriptions).
* `AndroidpublisherInappproductsUpdate` - Updates an in-app product (i.e. a managed product or a subscriptions).

### internalappsharingartifacts

* `AndroidpublisherInternalappsharingartifactsUploadapk` - Uploads an APK to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
* `AndroidpublisherInternalappsharingartifactsUploadbundle` - Uploads an app bundle to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.

### monetization

* `AndroidpublisherMonetizationConvertRegionPrices` - Calculates the region prices, using today's exchange rate and country-specific pricing patterns, based on the price in the request for a set of regions.
* `AndroidpublisherMonetizationSubscriptionsArchive` - Archives a subscription. Can only be done if at least one base plan was active in the past, and no base plan is available for new or existing subscribers currently. This action is irreversible, and the subscription ID will remain reserved.
* `AndroidpublisherMonetizationSubscriptionsBasePlansActivate` - Activates a base plan. Once activated, base plans will be available to new subscribers.
* `AndroidpublisherMonetizationSubscriptionsBasePlansDeactivate` - Deactivates a base plan. Once deactivated, the base plan will become unavailable to new subscribers, but existing subscribers will maintain their subscription
* `AndroidpublisherMonetizationSubscriptionsBasePlansDelete` - Deletes a base plan. Can only be done for draft base plans. This action is irreversible.
* `AndroidpublisherMonetizationSubscriptionsBasePlansMigratePrices` - Migrates subscribers who are receiving an historical subscription price to the currently-offered price for the specified region. Requests will cause price change notifications to be sent to users who are currently receiving an historical price older than the supplied timestamp. Subscribers who do not agree to the new price will have their subscription ended at the next renewal.
* `AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivate` - Activates a subscription offer. Once activated, subscription offers will be available to new subscribers.
* `AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreate` - Creates a new subscription offer. Only auto-renewing base plans can have subscription offers. The offer state will be DRAFT until it is activated.
* `AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivate` - Deactivates a subscription offer. Once deactivated, existing subscribers will maintain their subscription, but the offer will become unavailable to new subscribers.
* `AndroidpublisherMonetizationSubscriptionsBasePlansOffersDelete` - Deletes a subscription offer. Can only be done for draft offers. This action is irreversible.
* `AndroidpublisherMonetizationSubscriptionsBasePlansOffersGet` - Reads a single offer
* `AndroidpublisherMonetizationSubscriptionsBasePlansOffersList` - Lists all offers under a given subscription.
* `AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatch` - Updates an existing subscription offer.
* `AndroidpublisherMonetizationSubscriptionsCreate` - Creates a new subscription. Newly added base plans will remain in draft state until activated.
* `AndroidpublisherMonetizationSubscriptionsDelete` - Deletes a subscription. A subscription can only be deleted if it has never had a base plan published.
* `AndroidpublisherMonetizationSubscriptionsGet` - Reads a single subscription.
* `AndroidpublisherMonetizationSubscriptionsList` - Lists all subscriptions under a given app.
* `AndroidpublisherMonetizationSubscriptionsPatch` - Updates an existing subscription.

### orders

* `AndroidpublisherOrdersRefund` - Refunds a user's subscription or in-app purchase order. Orders older than 1 year cannot be refunded.

### purchases

* `AndroidpublisherPurchasesProductsAcknowledge` - Acknowledges a purchase of an inapp item.
* `AndroidpublisherPurchasesProductsGet` - Checks the purchase and consumption status of an inapp item.
* `AndroidpublisherPurchasesSubscriptionsAcknowledge` - Acknowledges a subscription purchase.
* `AndroidpublisherPurchasesSubscriptionsCancel` - Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
* `AndroidpublisherPurchasesSubscriptionsDefer` - Defers a user's subscription purchase until a specified future expiration time.
* `AndroidpublisherPurchasesSubscriptionsGet` - Checks whether a user's subscription purchase is valid and returns its expiry time.
* `AndroidpublisherPurchasesSubscriptionsRefund` - Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
* `AndroidpublisherPurchasesSubscriptionsRevoke` - Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
* `AndroidpublisherPurchasesSubscriptionsv2Get` - Get metadata about a subscription
* `AndroidpublisherPurchasesVoidedpurchasesList` - Lists the purchases that were canceled, refunded or charged-back.

### reviews

* `AndroidpublisherReviewsGet` - Gets a single review.
* `AndroidpublisherReviewsList` - Lists all reviews.
* `AndroidpublisherReviewsReply` - Replies to a single review, or updates an existing reply.

### systemapks

* `AndroidpublisherSystemapksVariantsCreate` - Creates an APK which is suitable for inclusion in a system image from an already uploaded Android App Bundle.
* `AndroidpublisherSystemapksVariantsDownload` - Downloads a previously created system APK which is suitable for inclusion in a system image.
* `AndroidpublisherSystemapksVariantsGet` - Returns a previously created system APK variant.
* `AndroidpublisherSystemapksVariantsList` - Returns the list of previously created system APK variants.

### users

* `AndroidpublisherUsersCreate` - Grant access for a user to the given developer account.
* `AndroidpublisherUsersDelete` - Removes all access for the user to the given developer account.
* `AndroidpublisherUsersList` - Lists all users with access to a developer account.
* `AndroidpublisherUsersPatch` - Updates access for the user to the developer account.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
