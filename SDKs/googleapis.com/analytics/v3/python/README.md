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
    
req = operations.AnalyticsDataGaGetRequest(
    security=operations.AnalyticsDataGaGetSecurity(
        option1=operations.AnalyticsDataGaGetSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    query_params=operations.AnalyticsDataGaGetQueryParams(
        alt="json",
        dimensions="molestiae",
        end_date="mollitia",
        fields="non",
        filters="similique",
        ids="id",
        include_empty_rows=True,
        key="quia",
        max_results=8874339057685439512,
        metrics="tenetur",
        oauth_token="non",
        output="json",
        pretty_print=True,
        quota_user="perspiciatis",
        sampling_level="HIGHER_PRECISION",
        segment="aut",
        sort="ut",
        start_date="voluptas",
        start_index=2569169535412766127,
        user_ip="molestias",
    ),
)
    
res = s.data.analytics_data_ga_get(req)

if res.ga_data is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### data

* `analytics_data_ga_get` - Returns Analytics data for a view (profile).
* `analytics_data_mcf_get` - Returns Analytics Multi-Channel Funnels data for a view (profile).
* `analytics_data_realtime_get` - Returns real time data for a view (profile).

### management

* `analytics_management_account_summaries_list` - Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.
* `analytics_management_account_user_links_delete` - Removes a user from the given account.
* `analytics_management_account_user_links_insert` - Adds a new user to the given account.
* `analytics_management_account_user_links_list` - Lists account-user links for a given account.
* `analytics_management_account_user_links_update` - Updates permissions for an existing user on the given account.
* `analytics_management_accounts_list` - Lists all accounts to which the user has access.
* `analytics_management_client_id_hash_client_id` - Hashes the given Client ID.
* `analytics_management_custom_data_sources_list` - List custom data sources to which the user has access.
* `analytics_management_custom_dimensions_get` - Get a custom dimension to which the user has access.
* `analytics_management_custom_dimensions_insert` - Create a new custom dimension.
* `analytics_management_custom_dimensions_list` - Lists custom dimensions to which the user has access.
* `analytics_management_custom_dimensions_patch` - Updates an existing custom dimension. This method supports patch semantics.
* `analytics_management_custom_dimensions_update` - Updates an existing custom dimension.
* `analytics_management_custom_metrics_get` - Get a custom metric to which the user has access.
* `analytics_management_custom_metrics_insert` - Create a new custom metric.
* `analytics_management_custom_metrics_list` - Lists custom metrics to which the user has access.
* `analytics_management_custom_metrics_patch` - Updates an existing custom metric. This method supports patch semantics.
* `analytics_management_custom_metrics_update` - Updates an existing custom metric.
* `analytics_management_experiments_delete` - Delete an experiment.
* `analytics_management_experiments_get` - Returns an experiment to which the user has access.
* `analytics_management_experiments_insert` - Create a new experiment.
* `analytics_management_experiments_list` - Lists experiments to which the user has access.
* `analytics_management_experiments_patch` - Update an existing experiment. This method supports patch semantics.
* `analytics_management_experiments_update` - Update an existing experiment.
* `analytics_management_filters_delete` - Delete a filter.
* `analytics_management_filters_get` - Returns filters to which the user has access.
* `analytics_management_filters_insert` - Create a new filter.
* `analytics_management_filters_list` - Lists all filters for an account
* `analytics_management_filters_patch` - Updates an existing filter. This method supports patch semantics.
* `analytics_management_filters_update` - Updates an existing filter.
* `analytics_management_goals_get` - Gets a goal to which the user has access.
* `analytics_management_goals_insert` - Create a new goal.
* `analytics_management_goals_list` - Lists goals to which the user has access.
* `analytics_management_goals_patch` - Updates an existing goal. This method supports patch semantics.
* `analytics_management_goals_update` - Updates an existing goal.
* `analytics_management_profile_filter_links_delete` - Delete a profile filter link.
* `analytics_management_profile_filter_links_get` - Returns a single profile filter link.
* `analytics_management_profile_filter_links_insert` - Create a new profile filter link.
* `analytics_management_profile_filter_links_list` - Lists all profile filter links for a profile.
* `analytics_management_profile_filter_links_patch` - Update an existing profile filter link. This method supports patch semantics.
* `analytics_management_profile_filter_links_update` - Update an existing profile filter link.
* `analytics_management_profile_user_links_delete` - Removes a user from the given view (profile).
* `analytics_management_profile_user_links_insert` - Adds a new user to the given view (profile).
* `analytics_management_profile_user_links_list` - Lists profile-user links for a given view (profile).
* `analytics_management_profile_user_links_update` - Updates permissions for an existing user on the given view (profile).
* `analytics_management_profiles_delete` - Deletes a view (profile).
* `analytics_management_profiles_get` - Gets a view (profile) to which the user has access.
* `analytics_management_profiles_insert` - Create a new view (profile).
* `analytics_management_profiles_list` - Lists views (profiles) to which the user has access.
* `analytics_management_profiles_patch` - Updates an existing view (profile). This method supports patch semantics.
* `analytics_management_profiles_update` - Updates an existing view (profile).
* `analytics_management_remarketing_audience_delete` - Delete a remarketing audience.
* `analytics_management_remarketing_audience_get` - Gets a remarketing audience to which the user has access.
* `analytics_management_remarketing_audience_insert` - Creates a new remarketing audience.
* `analytics_management_remarketing_audience_list` - Lists remarketing audiences to which the user has access.
* `analytics_management_remarketing_audience_patch` - Updates an existing remarketing audience. This method supports patch semantics.
* `analytics_management_remarketing_audience_update` - Updates an existing remarketing audience.
* `analytics_management_segments_list` - Lists segments to which the user has access.
* `analytics_management_unsampled_reports_delete` - Deletes an unsampled report.
* `analytics_management_unsampled_reports_get` - Returns a single unsampled report.
* `analytics_management_unsampled_reports_insert` - Create a new unsampled report.
* `analytics_management_unsampled_reports_list` - Lists unsampled reports to which the user has access.
* `analytics_management_uploads_delete_upload_data` - Delete data associated with a previous upload.
* `analytics_management_uploads_get` - List uploads to which the user has access.
* `analytics_management_uploads_list` - List uploads to which the user has access.
* `analytics_management_uploads_upload_data` - Upload data for a custom data source.
* `analytics_management_web_property_ad_words_links_delete` - Deletes a web property-Google Ads link.
* `analytics_management_web_property_ad_words_links_get` - Returns a web property-Google Ads link to which the user has access.
* `analytics_management_web_property_ad_words_links_insert` - Creates a webProperty-Google Ads link.
* `analytics_management_web_property_ad_words_links_list` - Lists webProperty-Google Ads links for a given web property.
* `analytics_management_web_property_ad_words_links_patch` - Updates an existing webProperty-Google Ads link. This method supports patch semantics.
* `analytics_management_web_property_ad_words_links_update` - Updates an existing webProperty-Google Ads link.
* `analytics_management_webproperties_get` - Gets a web property to which the user has access.
* `analytics_management_webproperties_insert` - Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile.
* `analytics_management_webproperties_list` - Lists web properties to which the user has access.
* `analytics_management_webproperties_patch` - Updates an existing web property. This method supports patch semantics.
* `analytics_management_webproperties_update` - Updates an existing web property.
* `analytics_management_webproperty_user_links_delete` - Removes a user from the given web property.
* `analytics_management_webproperty_user_links_insert` - Adds a new user to the given web property.
* `analytics_management_webproperty_user_links_list` - Lists webProperty-user links for a given web property.
* `analytics_management_webproperty_user_links_update` - Updates permissions for an existing user on the given web property.

### metadata

* `analytics_metadata_columns_list` - Lists all columns for a report type

### provisioning

* `analytics_provisioning_create_account_ticket` - Creates an account ticket.
* `analytics_provisioning_create_account_tree` - Provision account.

### userDeletion

* `analytics_user_deletion_user_deletion_request_upsert` - Insert or update a user deletion requests.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
