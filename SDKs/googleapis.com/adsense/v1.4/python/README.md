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
    
req = operations.AdsenseAccountsAdclientsGetAdCodeRequest(
    security=operations.AdsenseAccountsAdclientsGetAdCodeSecurity(
        option1=operations.AdsenseAccountsAdclientsGetAdCodeSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    path_params=operations.AdsenseAccountsAdclientsGetAdCodePathParams(
        account_id="voluptatem",
        ad_client_id="odit",
    ),
    query_params=operations.AdsenseAccountsAdclientsGetAdCodeQueryParams(
        alt="json",
        fields="sit",
        key="doloremque",
        oauth_token="harum",
        pretty_print=False,
        quota_user="sed",
        tag_partner="voluptatem",
        user_ip="facilis",
    ),
)
    
res = s.accounts.adsense_accounts_adclients_get_ad_code(req)

if res.ad_code is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accounts

* `adsense_accounts_adclients_get_ad_code` - Get Auto ad code for a given ad client.
* `adsense_accounts_adclients_list` - List all ad clients in the specified account.
* `adsense_accounts_adunits_customchannels_list` - List all custom channels which the specified ad unit belongs to.
* `adsense_accounts_adunits_get` - Gets the specified ad unit in the specified ad client for the specified account.
* `adsense_accounts_adunits_get_ad_code` - Get ad code for the specified ad unit.
* `adsense_accounts_adunits_list` - List all ad units in the specified ad client for the specified account.
* `adsense_accounts_alerts_delete` - Dismiss (delete) the specified alert from the specified publisher AdSense account.
* `adsense_accounts_alerts_list` - List the alerts for the specified AdSense account.
* `adsense_accounts_customchannels_adunits_list` - List all ad units in the specified custom channel.
* `adsense_accounts_customchannels_get` - Get the specified custom channel from the specified ad client for the specified account.
* `adsense_accounts_customchannels_list` - List all custom channels in the specified ad client for the specified account.
* `adsense_accounts_get` - Get information about the selected AdSense account.
* `adsense_accounts_list` - List all accounts available to this AdSense account.
* `adsense_accounts_payments_list` - List the payments for the specified AdSense account.
* `adsense_accounts_reports_generate` - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
* `adsense_accounts_reports_saved_generate` - Generate an AdSense report based on the saved report ID sent in the query parameters.
* `adsense_accounts_reports_saved_list` - List all saved reports in the specified AdSense account.
* `adsense_accounts_savedadstyles_get` - List a specific saved ad style for the specified account.
* `adsense_accounts_savedadstyles_list` - List all saved ad styles in the specified account.
* `adsense_accounts_urlchannels_list` - List all URL channels in the specified ad client for the specified account.

### adclients

* `adsense_adclients_list` - List all ad clients in this AdSense account.

### adunits

* `adsense_adunits_customchannels_list` - List all custom channels which the specified ad unit belongs to.
* `adsense_adunits_get` - Gets the specified ad unit in the specified ad client.
* `adsense_adunits_get_ad_code` - Get ad code for the specified ad unit.
* `adsense_adunits_list` - List all ad units in the specified ad client for this AdSense account.

### alerts

* `adsense_alerts_delete` - Dismiss (delete) the specified alert from the publisher's AdSense account.
* `adsense_alerts_list` - List the alerts for this AdSense account.

### customchannels

* `adsense_customchannels_adunits_list` - List all ad units in the specified custom channel.
* `adsense_customchannels_get` - Get the specified custom channel from the specified ad client.
* `adsense_customchannels_list` - List all custom channels in the specified ad client for this AdSense account.

### metadata

* `adsense_metadata_dimensions_list` - List the metadata for the dimensions available to this AdSense account.
* `adsense_metadata_metrics_list` - List the metadata for the metrics available to this AdSense account.

### payments

* `adsense_payments_list` - List the payments for this AdSense account.

### reports

* `adsense_reports_generate` - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
* `adsense_reports_saved_generate` - Generate an AdSense report based on the saved report ID sent in the query parameters.
* `adsense_reports_saved_list` - List all saved reports in this AdSense account.

### savedadstyles

* `adsense_savedadstyles_get` - Get a specific saved ad style from the user's account.
* `adsense_savedadstyles_list` - List all saved ad styles in the user's account.

### urlchannels

* `adsense_urlchannels_list` - List all URL channels in the specified ad client for this AdSense account.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
