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
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AccountDeleteDomainWhitelistRequest{
        PathParams: operations.AccountDeleteDomainWhitelistPathParams{
            WhitelistID: "aut",
        },
    }
    
    res, err := s.Sdk.AccountDeleteDomainWhitelist(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAccountingDomainWhitelistEntry != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AccountDeleteDomainWhitelist` - Delete an domain entry
* `AccountDeleteGuest` - Delete a guest
* `AccountDeleteIPBlacklist` - Delete an ip blacklist entry
* `AccountGet` - Retrieve current account data
* `AccountGetDomainWhitelist` - Retrieve list of a domains allowed to redirect in DDU mode
* `AccountGetGuest` - Retrieve a guest
* `AccountGetGuests` - Retrieve list of a guest
* `AccountGetGuestsCount` - Retrieve count of guests
* `AccountGetIPBlacklist` - Retrieve list of a ip to exclude from event tracking
* `AccountGetPermissions` - Retrieve permissions for a guest
* `AccountGetPermissionsCount` - Retrieve count of the permissions for a guest
* `AccountGetPlan` - Retrieve current account plan
* `AccountPatchPermissions` - Change the permission on a shared object
* `AccountPost` - Update current account data
* `AccountPostGuest` - Update a guest
* `AccountPutDomainWhitelist` - Create an domain entry
* `AccountPutGuest` - Create a guest
* `AccountPutIPBlacklist` - Create an ip blacklist entry
* `AggregatedGetConversionsSummary` - Retrieve statistics about a subset of conversions for a timeframe with conversions data
* `AggregatedGetDatapointsSummary` - Retrieve statistics about a subset of datapoints for a timeframe with datapoints data
* `AggregatedGetGroupsSummary` - Retrieve statistics about a subset of groups for a timeframe with groups data
* `AggregatedGetStatisticsList` - Retrieve statistics about this customer for a timeframe grouped by some temporal entity (day/week/month)
* `AggregatedGetStatisticsSingle` - Retrieve statistics about this customer for a timeframe
* `ClickStreamGet` - Retrieve the latest list of events of this account. Limited to last 100.
* `ConversionsCount` - Retrieve a count of conversions
* `ConversionsDelete` - Delete conversion specified by id
* `ConversionsGet` - Retrieve a list of conversions
* `ConversionsGetDatapoints` - Retrieve a list of datapoints connected to this conversion
* `ConversionsGetDatapointsCount` - Retrieve a count of datapoints connected to this conversion
* `ConversionsGetHits` - Retrieve the list of events related to this conversion.
* `ConversionsGetStatisticsAllList` - Retrieve statistics about this customer for a timeframe related to a subset of conversions grouped by some temporal entity (day/week/month)
* `ConversionsGetStatisticsList` - Retrieve statistics about this conversion for a timeframe grouped by some temporal entity (day/week/month)
* `ConversionsGetStatisticsSingle` - Retrieve statistics about this conversion for a timeframe
* `ConversionsGetTops` - Retrieve a top report connected to this conversion
* `ConversionsPatch` - Modify the association between a conversion and a datapoint
* `ConversionsPatchNotes` - Fast patch the "notes" field of a conversion
* `ConversionsPost` - Update conversion specified by id
* `ConversionsPut` - Create a conversion
* `DataPointsCount` - Count the datapoints associated to the user
* `DataPointsDelete` - Delete a datapoint
* `DataPointsGet` - List of all the datapoints associated to the user
* `DataPointsGetHits` - Retrieve the list of events related to this datapoint.
* `DataPointsGetStatisticsAggregatedSingle` - Retrieve statistics about this customer for a timeframe by groups
* `DataPointsGetStatisticsAllList` - Retrieve statistics about all datapoints of this customer for a timeframe grouped by some temporal entity (day/week/month)
* `DataPointsGetStatisticsList` - Retrieve statistics about this datapoint for a timeframe grouped by some temporal entity (day/week/month)
* `DataPointsGetStatisticsSingle` - Retrieve statistics about this datapoint for a timeframe
* `DataPointsGetTops` - Retrieve a top report connected to this datapoint
* `DataPointsPatchFavourite` - Fast switch the "favourite" field of a datapoint
* `DataPointsPatchNotes` - Fast patch the "notes" field of a datapoint
* `DomainsCount` - Retrieve count of domains
* `DomainsDelete` - Delete a domain
* `DomainsGet` - Retrieve a list of domains
* `DomainsPut` - Create a domain
* `DomainsUpdate` - Update a domain
* `GetConversionsConversionID` - Retrieve conversion specified by id
* `GetDatapointsID` - Get a datapoint
* `GetDomainsID` - Get a domain
* `GetGroupsID` - Get a group
* `GetRetargetingID` - Get a retargeting script object
* `GetTagsTagID` - Retrieve a tag
* `GroupsCount` - Count the groups associated to the user.
* `GroupsDelete` - Delete group specified by id
* `GroupsGet` - List of all the groups associated to the user.
* `GroupsGetDatapoints` - List of all the datapoints associated to the user in this group.
* `GroupsGetDatapointsCount` - Count the datapoints associated to the user in this group.
* `GroupsGetDatapointsSummary` - Retrieve statistics about a subset of datapoints for a timeframe with datapoints data
* `GroupsGetHits` - Retrieve the list of events related to this group.
* `GroupsGetStatisticsAggregatedSingle` - Retrieve statistics about this customer for a timeframe by groups
* `GroupsGetStatisticsAllList` - Retrieve statistics about all groups of this customer for a timeframe grouped by some temporal entity (day/week/month)
* `GroupsGetStatisticsList` - Retrieve statistics about this group for a timeframe grouped by some temporal entity (day/week/month)
* `GroupsGetStatisticsSingle` - Retrieve statistics about this group for a timeframe
* `GroupsGetTops` - Retrieve a top report connected to this group
* `GroupsPatchFavourite` - Fast switch the "favourite" field of a group
* `GroupsPatchNotes` - Fast patch the "notes" field of a group
* `HitsGetHits` - Retrieve the list of events related to this account.
* `MeGetMe` - Retrieve current account data
* `MeGetMePlan` - Retrieve current account plan
* `PostAccountGuestsGuestIDTypePermissionsPatch` - Change the permission on a shared object
* `ReportsGet` - Retrieve a top report
* `RetargetingCount` - Retrieve count of retargeting scripts
* `RetargetingDelete` - Deletes a retargeting script (and remove associations)
* `RetargetingGet` - List of all the retargeting scripts associated to the user
* `RetargetingGetDatapoints` - List of all the datapoints associated to the retargeting script.
* `RetargetingGetDatapointsCount` - Count the datapoints associated to the retargeting script.
* `RetargetingPost` - Updates a retargeting script
* `RetargetingPut` - Creates a retargeting script
* `TagsCount` - List of all the groups associated to the user filtered by this tag.
* `TagsDelete` - Delete a tag
* `TagsDeleteRelatedDatapoints` - Delete the association of this tag with all datapoints
* `TagsDeleteRelatedGroups` - Delete the association of this tag with all groups
* `TagsGet` - List of all the groups associated to the user filtered by this tag.
* `TagsGetDatapoints` - List of all the datapoints associated to the user filtered by this tag
* `TagsGetDatapointsCount` - Count the datapoints associated to the user filtered by this tag
* `TagsGetGroups` - List of all the groups associated to the user filtered by this tag.
* `TagsGetGroupsCount` - Count the groups associated to the user filtered by this tag
* `TagsPatchDataPoint` - Associate/Deassociate a tag with a datapoint
* `TagsPatchGroup` - Associate/Deassociate a tag with a group
* `TagsPatchTagName` - Fast patch a tag name
* `TagsPut` - Create a tag

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
