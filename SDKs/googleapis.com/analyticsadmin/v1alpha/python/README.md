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
    
req = operations.AnalyticsadminAccountSummariesListRequest(
    security=operations.AnalyticsadminAccountSummariesListSecurity(
        option1=operations.AnalyticsadminAccountSummariesListSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    query_params=operations.AnalyticsadminAccountSummariesListQueryParams(
        dollar_xgafv="1",
        access_token="quo",
        alt="json",
        callback="consequatur",
        fields="autem",
        key="vitae",
        oauth_token="soluta",
        page_size=3262293110058638405,
        page_token="ut",
        pretty_print=False,
        quota_user="voluptatibus",
        upload_type="adipisci",
        upload_protocol="maiores",
    ),
)
    
res = s.account_summaries.analyticsadmin_account_summaries_list(req)

if res.google_analytics_admin_v1alpha_list_account_summaries_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accountSummaries

* `analyticsadmin_account_summaries_list` - Returns summaries of all accounts accessible by the caller.

### accounts

* `analyticsadmin_accounts_list` - Returns all accounts accessible by the caller. Note that these accounts might not currently have GA4 properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.
* `analyticsadmin_accounts_provision_account_ticket` - Requests a ticket for creating an account.
* `analyticsadmin_accounts_search_change_history_events` - Searches through all changes to an account or its children given the specified set of filters.

### properties

* `analyticsadmin_properties_acknowledge_user_data_collection` - Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or via this API) before MeasurementProtocolSecret resources may be created.
* `analyticsadmin_properties_audiences_create` - Creates an Audience.
* `analyticsadmin_properties_audiences_list` - Lists Audiences on a property. Audiences created before 2020 may not be supported. Default audiences will not show filter definitions.
* `analyticsadmin_properties_conversion_events_create` - Creates a conversion event with the specified attributes.
* `analyticsadmin_properties_conversion_events_list` - Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
* `analyticsadmin_properties_create` - Creates an "GA4" property with the specified location and attributes.
* `analyticsadmin_properties_custom_dimensions_create` - Creates a CustomDimension.
* `analyticsadmin_properties_custom_dimensions_list` - Lists CustomDimensions on a property.
* `analyticsadmin_properties_custom_metrics_archive` - Archives a CustomMetric on a property.
* `analyticsadmin_properties_custom_metrics_create` - Creates a CustomMetric.
* `analyticsadmin_properties_custom_metrics_list` - Lists CustomMetrics on a property.
* `analyticsadmin_properties_data_streams_create` - Creates a DataStream.
* `analyticsadmin_properties_data_streams_list` - Lists DataStreams on a property.
* `analyticsadmin_properties_data_streams_measurement_protocol_secrets_create` - Creates a measurement protocol secret.
* `analyticsadmin_properties_data_streams_measurement_protocol_secrets_list` - Returns child MeasurementProtocolSecrets under the specified parent Property.
* `analyticsadmin_properties_display_video360_advertiser_link_proposals_approve` - Approves a DisplayVideo360AdvertiserLinkProposal. The DisplayVideo360AdvertiserLinkProposal will be deleted and a new DisplayVideo360AdvertiserLink will be created.
* `analyticsadmin_properties_display_video360_advertiser_link_proposals_cancel` - Cancels a DisplayVideo360AdvertiserLinkProposal. Cancelling can mean either: - Declining a proposal initiated from Display & Video 360 - Withdrawing a proposal initiated from Google Analytics After being cancelled, a proposal will eventually be deleted automatically.
* `analyticsadmin_properties_display_video360_advertiser_link_proposals_create` - Creates a DisplayVideo360AdvertiserLinkProposal.
* `analyticsadmin_properties_display_video360_advertiser_link_proposals_list` - Lists DisplayVideo360AdvertiserLinkProposals on a property.
* `analyticsadmin_properties_display_video360_advertiser_links_create` - Creates a DisplayVideo360AdvertiserLink. This can only be utilized by users who have proper authorization both on the Google Analytics property and on the Display & Video 360 advertiser. Users who do not have access to the Display & Video 360 advertiser should instead seek to create a DisplayVideo360LinkProposal.
* `analyticsadmin_properties_display_video360_advertiser_links_list` - Lists all DisplayVideo360AdvertiserLinks on a property.
* `analyticsadmin_properties_firebase_links_create` - Creates a FirebaseLink. Properties can have at most one FirebaseLink.
* `analyticsadmin_properties_firebase_links_list` - Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
* `analyticsadmin_properties_google_ads_links_create` - Creates a GoogleAdsLink.
* `analyticsadmin_properties_google_ads_links_list` - Lists GoogleAdsLinks on a property.
* `analyticsadmin_properties_list` - Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
* `analyticsadmin_properties_run_access_report` - Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).
* `analyticsadmin_properties_search_ads360_links_create` - Creates a SearchAds360Link.
* `analyticsadmin_properties_search_ads360_links_list` - Lists all SearchAds360Links on a property.
* `analyticsadmin_properties_user_links_audit` - Lists all user links on an account or property, including implicit ones that come from effective permissions granted by groups or organization admin roles. If a returned user link does not have direct permissions, they cannot be removed from the account or property directly with the DeleteUserLink command. They have to be removed from the group/etc that gives them permissions, which is currently only usable/discoverable in the GA or GMP UIs.
* `analyticsadmin_properties_user_links_batch_create` - Creates information about multiple users' links to an account or property. This method is transactional. If any UserLink cannot be created, none of the UserLinks will be created.
* `analyticsadmin_properties_user_links_batch_delete` - Deletes information about multiple users' links to an account or property.
* `analyticsadmin_properties_user_links_batch_get` - Gets information about multiple users' links to an account or property.
* `analyticsadmin_properties_user_links_batch_update` - Updates information about multiple users' links to an account or property.
* `analyticsadmin_properties_user_links_create` - Creates a user link on an account or property. If the user with the specified email already has permissions on the account or property, then the user's existing permissions will be unioned with the permissions specified in the new UserLink.
* `analyticsadmin_properties_user_links_delete` - Deletes a user link on an account or property.
* `analyticsadmin_properties_user_links_get` - Gets information about a user's link to an account or property.
* `analyticsadmin_properties_user_links_list` - Lists all user links on an account or property.
* `analyticsadmin_properties_user_links_patch` - Updates a user link on an account or property.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
