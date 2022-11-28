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
    
req = operations.AndroidpublisherApplicationsDeviceTierConfigsCreateRequest(
    security=operations.AndroidpublisherApplicationsDeviceTierConfigsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.AndroidpublisherApplicationsDeviceTierConfigsCreatePathParams(
        package_name="quo",
    ),
    query_params=operations.AndroidpublisherApplicationsDeviceTierConfigsCreateQueryParams(
        dollar_xgafv="2",
        access_token="eos",
        allow_unknown_devices=False,
        alt="proto",
        callback="consequatur",
        fields="aspernatur",
        key="dolores",
        oauth_token="voluptatibus",
        pretty_print=True,
        quota_user="omnis",
        upload_type="et",
        upload_protocol="est",
    ),
    request=shared.DeviceTierConfigInput(
        device_groups=[
            shared.DeviceGroup(
                device_selectors=[
                    shared.DeviceSelector(
                        device_ram=shared.DeviceRAM(
                            max_bytes="repudiandae",
                            min_bytes="delectus",
                        ),
                        excluded_device_ids=[
                            shared.DeviceID(
                                build_brand="et",
                                build_device="tenetur",
                            ),
                            shared.DeviceID(
                                build_brand="labore",
                                build_device="est",
                            ),
                            shared.DeviceID(
                                build_brand="voluptatem",
                                build_device="provident",
                            ),
                        ],
                        forbidden_system_features=[
                            shared.SystemFeature(
                                name="mollitia",
                            ),
                            shared.SystemFeature(
                                name="vitae",
                            ),
                        ],
                        included_device_ids=[
                            shared.DeviceID(
                                build_brand="magni",
                                build_device="iusto",
                            ),
                            shared.DeviceID(
                                build_brand="autem",
                                build_device="et",
                            ),
                            shared.DeviceID(
                                build_brand="aut",
                                build_device="explicabo",
                            ),
                        ],
                        required_system_features=[
                            shared.SystemFeature(
                                name="quia",
                            ),
                        ],
                    ),
                ],
                name="veniam",
            ),
            shared.DeviceGroup(
                device_selectors=[
                    shared.DeviceSelector(
                        device_ram=shared.DeviceRAM(
                            max_bytes="ducimus",
                            min_bytes="soluta",
                        ),
                        excluded_device_ids=[
                            shared.DeviceID(
                                build_brand="cumque",
                                build_device="aut",
                            ),
                            shared.DeviceID(
                                build_brand="explicabo",
                                build_device="maxime",
                            ),
                        ],
                        forbidden_system_features=[
                            shared.SystemFeature(
                                name="ut",
                            ),
                        ],
                        included_device_ids=[
                            shared.DeviceID(
                                build_brand="placeat",
                                build_device="modi",
                            ),
                            shared.DeviceID(
                                build_brand="et",
                                build_device="qui",
                            ),
                            shared.DeviceID(
                                build_brand="quo",
                                build_device="rerum",
                            ),
                        ],
                        required_system_features=[
                            shared.SystemFeature(
                                name="dolor",
                            ),
                            shared.SystemFeature(
                                name="exercitationem",
                            ),
                        ],
                    ),
                ],
                name="inventore",
            ),
        ],
        device_tier_set=shared.DeviceTierSet(
            device_tiers=[
                shared.DeviceTier(
                    device_group_names=[
                        "sunt",
                    ],
                    level=8374802233122473252,
                ),
            ],
        ),
    ),
)
    
res = s.applications.androidpublisher_applications_device_tier_configs_create(req)

if res.device_tier_config is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### applications

* `androidpublisher_applications_device_tier_configs_create` - Creates a new device tier config for an app.
* `androidpublisher_applications_device_tier_configs_get` - Returns a particular device tier config.
* `androidpublisher_applications_device_tier_configs_list` - Returns created device tier configs, ordered by descending creation time.

### edits

* `androidpublisher_edits_apks_addexternallyhosted` - Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.
* `androidpublisher_edits_apks_list` - Lists all current APKs of the app and edit.
* `androidpublisher_edits_apks_upload` - Uploads an APK and adds to the current edit.
* `androidpublisher_edits_bundles_list` - Lists all current Android App Bundles of the app and edit.
* `androidpublisher_edits_bundles_upload` - Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
* `androidpublisher_edits_commit` - Commits an app edit.
* `androidpublisher_edits_countryavailability_get` - Gets country availability.
* `androidpublisher_edits_delete` - Deletes an app edit.
* `androidpublisher_edits_deobfuscationfiles_upload` - Uploads a new deobfuscation file and attaches to the specified APK.
* `androidpublisher_edits_details_get` - Gets details of an app.
* `androidpublisher_edits_details_patch` - Patches details of an app.
* `androidpublisher_edits_details_update` - Updates details of an app.
* `androidpublisher_edits_expansionfiles_get` - Fetches the expansion file configuration for the specified APK.
* `androidpublisher_edits_expansionfiles_patch` - Patches the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
* `androidpublisher_edits_expansionfiles_update` - Updates the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
* `androidpublisher_edits_expansionfiles_upload` - Uploads a new expansion file and attaches to the specified APK.
* `androidpublisher_edits_get` - Gets an app edit.
* `androidpublisher_edits_images_delete` - Deletes the image (specified by id) from the edit.
* `androidpublisher_edits_images_deleteall` - Deletes all images for the specified language and image type. Returns an empty response if no images are found.
* `androidpublisher_edits_images_list` - Lists all images. The response may be empty.
* `androidpublisher_edits_images_upload` - Uploads an image of the specified language and image type, and adds to the edit.
* `androidpublisher_edits_insert` - Creates a new edit for an app.
* `androidpublisher_edits_listings_delete` - Deletes a localized store listing.
* `androidpublisher_edits_listings_deleteall` - Deletes all store listings.
* `androidpublisher_edits_listings_get` - Gets a localized store listing.
* `androidpublisher_edits_listings_list` - Lists all localized store listings.
* `androidpublisher_edits_listings_patch` - Patches a localized store listing.
* `androidpublisher_edits_listings_update` - Creates or updates a localized store listing.
* `androidpublisher_edits_testers_get` - Gets testers. Note: Testers resource does not support email lists.
* `androidpublisher_edits_testers_patch` - Patches testers. Note: Testers resource does not support email lists.
* `androidpublisher_edits_testers_update` - Updates testers. Note: Testers resource does not support email lists.
* `androidpublisher_edits_tracks_get` - Gets a track.
* `androidpublisher_edits_tracks_list` - Lists all tracks.
* `androidpublisher_edits_tracks_patch` - Patches a track.
* `androidpublisher_edits_tracks_update` - Updates a track.
* `androidpublisher_edits_validate` - Validates an app edit.

### generatedapks

* `androidpublisher_generatedapks_download` - Downloads a single signed APK generated from an app bundle.
* `androidpublisher_generatedapks_list` - Returns download metadata for all APKs that were generated from a given app bundle.

### grants

* `androidpublisher_grants_create` - Grant access for a user to the given package.

### inappproducts

* `androidpublisher_inappproducts_delete` - Deletes an in-app product (i.e. a managed product or a subscriptions).
* `androidpublisher_inappproducts_get` - Gets an in-app product, which can be a managed product or a subscription.
* `androidpublisher_inappproducts_insert` - Creates an in-app product (i.e. a managed product or a subscriptions).
* `androidpublisher_inappproducts_list` - Lists all in-app products - both managed products and subscriptions. If an app has a large number of in-app products, the response may be paginated. In this case the response field `tokenPagination.nextPageToken` will be set and the caller should provide its value as a `token` request parameter to retrieve the next page.
* `androidpublisher_inappproducts_patch` - Patches an in-app product (i.e. a managed product or a subscriptions).
* `androidpublisher_inappproducts_update` - Updates an in-app product (i.e. a managed product or a subscriptions).

### internalappsharingartifacts

* `androidpublisher_internalappsharingartifacts_uploadapk` - Uploads an APK to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
* `androidpublisher_internalappsharingartifacts_uploadbundle` - Uploads an app bundle to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.

### monetization

* `androidpublisher_monetization_convert_region_prices` - Calculates the region prices, using today's exchange rate and country-specific pricing patterns, based on the price in the request for a set of regions.
* `androidpublisher_monetization_subscriptions_archive` - Archives a subscription. Can only be done if at least one base plan was active in the past, and no base plan is available for new or existing subscribers currently. This action is irreversible, and the subscription ID will remain reserved.
* `androidpublisher_monetization_subscriptions_base_plans_activate` - Activates a base plan. Once activated, base plans will be available to new subscribers.
* `androidpublisher_monetization_subscriptions_base_plans_deactivate` - Deactivates a base plan. Once deactivated, the base plan will become unavailable to new subscribers, but existing subscribers will maintain their subscription
* `androidpublisher_monetization_subscriptions_base_plans_delete` - Deletes a base plan. Can only be done for draft base plans. This action is irreversible.
* `androidpublisher_monetization_subscriptions_base_plans_migrate_prices` - Migrates subscribers who are receiving an historical subscription price to the currently-offered price for the specified region. Requests will cause price change notifications to be sent to users who are currently receiving an historical price older than the supplied timestamp. Subscribers who do not agree to the new price will have their subscription ended at the next renewal.
* `androidpublisher_monetization_subscriptions_base_plans_offers_activate` - Activates a subscription offer. Once activated, subscription offers will be available to new subscribers.
* `androidpublisher_monetization_subscriptions_base_plans_offers_create` - Creates a new subscription offer. Only auto-renewing base plans can have subscription offers. The offer state will be DRAFT until it is activated.
* `androidpublisher_monetization_subscriptions_base_plans_offers_deactivate` - Deactivates a subscription offer. Once deactivated, existing subscribers will maintain their subscription, but the offer will become unavailable to new subscribers.
* `androidpublisher_monetization_subscriptions_base_plans_offers_delete` - Deletes a subscription offer. Can only be done for draft offers. This action is irreversible.
* `androidpublisher_monetization_subscriptions_base_plans_offers_get` - Reads a single offer
* `androidpublisher_monetization_subscriptions_base_plans_offers_list` - Lists all offers under a given subscription.
* `androidpublisher_monetization_subscriptions_base_plans_offers_patch` - Updates an existing subscription offer.
* `androidpublisher_monetization_subscriptions_create` - Creates a new subscription. Newly added base plans will remain in draft state until activated.
* `androidpublisher_monetization_subscriptions_delete` - Deletes a subscription. A subscription can only be deleted if it has never had a base plan published.
* `androidpublisher_monetization_subscriptions_get` - Reads a single subscription.
* `androidpublisher_monetization_subscriptions_list` - Lists all subscriptions under a given app.
* `androidpublisher_monetization_subscriptions_patch` - Updates an existing subscription.

### orders

* `androidpublisher_orders_refund` - Refunds a user's subscription or in-app purchase order. Orders older than 1 year cannot be refunded.

### purchases

* `androidpublisher_purchases_products_acknowledge` - Acknowledges a purchase of an inapp item.
* `androidpublisher_purchases_products_get` - Checks the purchase and consumption status of an inapp item.
* `androidpublisher_purchases_subscriptions_acknowledge` - Acknowledges a subscription purchase.
* `androidpublisher_purchases_subscriptions_cancel` - Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
* `androidpublisher_purchases_subscriptions_defer` - Defers a user's subscription purchase until a specified future expiration time.
* `androidpublisher_purchases_subscriptions_get` - Checks whether a user's subscription purchase is valid and returns its expiry time.
* `androidpublisher_purchases_subscriptions_refund` - Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
* `androidpublisher_purchases_subscriptions_revoke` - Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
* `androidpublisher_purchases_subscriptionsv2_get` - Get metadata about a subscription
* `androidpublisher_purchases_voidedpurchases_list` - Lists the purchases that were canceled, refunded or charged-back.

### reviews

* `androidpublisher_reviews_get` - Gets a single review.
* `androidpublisher_reviews_list` - Lists all reviews.
* `androidpublisher_reviews_reply` - Replies to a single review, or updates an existing reply.

### systemapks

* `androidpublisher_systemapks_variants_create` - Creates an APK which is suitable for inclusion in a system image from an already uploaded Android App Bundle.
* `androidpublisher_systemapks_variants_download` - Downloads a previously created system APK which is suitable for inclusion in a system image.
* `androidpublisher_systemapks_variants_get` - Returns a previously created system APK variant.
* `androidpublisher_systemapks_variants_list` - Returns the list of previously created system APK variants.

### users

* `androidpublisher_users_create` - Grant access for a user to the given developer account.
* `androidpublisher_users_delete` - Removes all access for the user to the given developer account.
* `androidpublisher_users_list` - Lists all users with access to a developer account.
* `androidpublisher_users_patch` - Updates access for the user to the developer account.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
