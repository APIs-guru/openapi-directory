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
s.config_security(
    security=shared.Security(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.AccountDeleteDomainWhitelistRequest(
    path_params=operations.AccountDeleteDomainWhitelistPathParams(
        whitelist_id="aut",
    ),
)
    
res = s.sdk.account_delete_domain_whitelist(req)

if res.api_core_dto_accounting_domain_whitelist_entry is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `account_delete_domain_whitelist` - Delete an domain entry
* `account_delete_guest` - Delete a guest
* `account_delete_ip_blacklist` - Delete an ip blacklist entry
* `account_get` - Retrieve current account data
* `account_get_domain_whitelist` - Retrieve list of a domains allowed to redirect in DDU mode
* `account_get_guest` - Retrieve a guest
* `account_get_guests` - Retrieve list of a guest
* `account_get_guests_count` - Retrieve count of guests
* `account_get_ip_blacklist` - Retrieve list of a ip to exclude from event tracking
* `account_get_permissions` - Retrieve permissions for a guest
* `account_get_permissions_count` - Retrieve count of the permissions for a guest
* `account_get_plan` - Retrieve current account plan
* `account_patch_permissions` - Change the permission on a shared object
* `account_post` - Update current account data
* `account_post_guest` - Update a guest
* `account_put_domain_whitelist` - Create an domain entry
* `account_put_guest` - Create a guest
* `account_put_ip_blacklist` - Create an ip blacklist entry
* `aggregated_get_conversions_summary` - Retrieve statistics about a subset of conversions for a timeframe with conversions data
* `aggregated_get_datapoints_summary` - Retrieve statistics about a subset of datapoints for a timeframe with datapoints data
* `aggregated_get_groups_summary` - Retrieve statistics about a subset of groups for a timeframe with groups data
* `aggregated_get_statistics_list` - Retrieve statistics about this customer for a timeframe grouped by some temporal entity (day/week/month)
* `aggregated_get_statistics_single` - Retrieve statistics about this customer for a timeframe
* `click_stream_get` - Retrieve the latest list of events of this account. Limited to last 100.
* `conversions_count` - Retrieve a count of conversions
* `conversions_delete` - Delete conversion specified by id
* `conversions_get` - Retrieve a list of conversions
* `conversions_get_datapoints` - Retrieve a list of datapoints connected to this conversion
* `conversions_get_datapoints_count` - Retrieve a count of datapoints connected to this conversion
* `conversions_get_hits` - Retrieve the list of events related to this conversion.
* `conversions_get_statistics_all_list` - Retrieve statistics about this customer for a timeframe related to a subset of conversions grouped by some temporal entity (day/week/month)
* `conversions_get_statistics_list` - Retrieve statistics about this conversion for a timeframe grouped by some temporal entity (day/week/month)
* `conversions_get_statistics_single` - Retrieve statistics about this conversion for a timeframe
* `conversions_get_tops` - Retrieve a top report connected to this conversion
* `conversions_patch` - Modify the association between a conversion and a datapoint
* `conversions_patch_notes` - Fast patch the "notes" field of a conversion
* `conversions_post` - Update conversion specified by id
* `conversions_put` - Create a conversion
* `data_points_count` - Count the datapoints associated to the user
* `data_points_delete` - Delete a datapoint
* `data_points_get` - List of all the datapoints associated to the user
* `data_points_get_hits` - Retrieve the list of events related to this datapoint.
* `data_points_get_statistics_aggregated_single` - Retrieve statistics about this customer for a timeframe by groups
* `data_points_get_statistics_all_list` - Retrieve statistics about all datapoints of this customer for a timeframe grouped by some temporal entity (day/week/month)
* `data_points_get_statistics_list` - Retrieve statistics about this datapoint for a timeframe grouped by some temporal entity (day/week/month)
* `data_points_get_statistics_single` - Retrieve statistics about this datapoint for a timeframe
* `data_points_get_tops` - Retrieve a top report connected to this datapoint
* `data_points_patch_favourite` - Fast switch the "favourite" field of a datapoint
* `data_points_patch_notes` - Fast patch the "notes" field of a datapoint
* `domains_count` - Retrieve count of domains
* `domains_delete` - Delete a domain
* `domains_get` - Retrieve a list of domains
* `domains_put` - Create a domain
* `domains_update` - Update a domain
* `get_conversions_conversion_id_` - Retrieve conversion specified by id
* `get_datapoints_id_` - Get a datapoint
* `get_domains_id_` - Get a domain
* `get_groups_id_` - Get a group
* `get_retargeting_id_` - Get a retargeting script object
* `get_tags_tag_id_` - Retrieve a tag
* `groups_count` - Count the groups associated to the user.
* `groups_delete` - Delete group specified by id
* `groups_get` - List of all the groups associated to the user.
* `groups_get_datapoints` - List of all the datapoints associated to the user in this group.
* `groups_get_datapoints_count` - Count the datapoints associated to the user in this group.
* `groups_get_datapoints_summary` - Retrieve statistics about a subset of datapoints for a timeframe with datapoints data
* `groups_get_hits` - Retrieve the list of events related to this group.
* `groups_get_statistics_aggregated_single` - Retrieve statistics about this customer for a timeframe by groups
* `groups_get_statistics_all_list` - Retrieve statistics about all groups of this customer for a timeframe grouped by some temporal entity (day/week/month)
* `groups_get_statistics_list` - Retrieve statistics about this group for a timeframe grouped by some temporal entity (day/week/month)
* `groups_get_statistics_single` - Retrieve statistics about this group for a timeframe
* `groups_get_tops` - Retrieve a top report connected to this group
* `groups_patch_favourite` - Fast switch the "favourite" field of a group
* `groups_patch_notes` - Fast patch the "notes" field of a group
* `hits_get_hits` - Retrieve the list of events related to this account.
* `me_get_me` - Retrieve current account data
* `me_get_me_plan` - Retrieve current account plan
* `post_account_guests_guest_id_type_permissions_patch` - Change the permission on a shared object
* `reports_get` - Retrieve a top report
* `retargeting_count` - Retrieve count of retargeting scripts
* `retargeting_delete` - Deletes a retargeting script (and remove associations)
* `retargeting_get` - List of all the retargeting scripts associated to the user
* `retargeting_get_datapoints` - List of all the datapoints associated to the retargeting script.
* `retargeting_get_datapoints_count` - Count the datapoints associated to the retargeting script.
* `retargeting_post` - Updates a retargeting script
* `retargeting_put` - Creates a retargeting script
* `tags_count` - List of all the groups associated to the user filtered by this tag.
* `tags_delete` - Delete a tag
* `tags_delete_related_datapoints` - Delete the association of this tag with all datapoints
* `tags_delete_related_groups` - Delete the association of this tag with all groups
* `tags_get` - List of all the groups associated to the user filtered by this tag.
* `tags_get_datapoints` - List of all the datapoints associated to the user filtered by this tag
* `tags_get_datapoints_count` - Count the datapoints associated to the user filtered by this tag
* `tags_get_groups` - List of all the groups associated to the user filtered by this tag.
* `tags_get_groups_count` - Count the groups associated to the user filtered by this tag
* `tags_patch_data_point` - Associate/Deassociate a tag with a datapoint
* `tags_patch_group` - Associate/Deassociate a tag with a group
* `tags_patch_tag_name` - Fast patch a tag name
* `tags_put` - Create a tag

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
