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
import { AccountDeleteDomainWhitelistRequest, AccountDeleteDomainWhitelistResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AccountDeleteDomainWhitelistRequest = {
  pathParams: {
    whitelistId: "aut",
  },
};

sdk.sdk.accountDeleteDomainWhitelist(req).then((res: AccountDeleteDomainWhitelistResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `accountDeleteDomainWhitelist` - Delete an domain entry
* `accountDeleteGuest` - Delete a guest
* `accountDeleteIpBlacklist` - Delete an ip blacklist entry
* `accountGet` - Retrieve current account data
* `accountGetDomainWhitelist` - Retrieve list of a domains allowed to redirect in DDU mode
* `accountGetGuest` - Retrieve a guest
* `accountGetGuests` - Retrieve list of a guest
* `accountGetGuestsCount` - Retrieve count of guests
* `accountGetIpBlacklist` - Retrieve list of a ip to exclude from event tracking
* `accountGetPermissions` - Retrieve permissions for a guest
* `accountGetPermissionsCount` - Retrieve count of the permissions for a guest
* `accountGetPlan` - Retrieve current account plan
* `accountPatchPermissions` - Change the permission on a shared object
* `accountPost` - Update current account data
* `accountPostGuest` - Update a guest
* `accountPutDomainWhitelist` - Create an domain entry
* `accountPutGuest` - Create a guest
* `accountPutIpBlacklist` - Create an ip blacklist entry
* `aggregatedGetConversionsSummary` - Retrieve statistics about a subset of conversions for a timeframe with conversions data
* `aggregatedGetDatapointsSummary` - Retrieve statistics about a subset of datapoints for a timeframe with datapoints data
* `aggregatedGetGroupsSummary` - Retrieve statistics about a subset of groups for a timeframe with groups data
* `aggregatedGetStatisticsList` - Retrieve statistics about this customer for a timeframe grouped by some temporal entity (day/week/month)
* `aggregatedGetStatisticsSingle` - Retrieve statistics about this customer for a timeframe
* `clickStreamGet` - Retrieve the latest list of events of this account. Limited to last 100.
* `conversionsCount` - Retrieve a count of conversions
* `conversionsDelete` - Delete conversion specified by id
* `conversionsGet` - Retrieve a list of conversions
* `conversionsGetDatapoints` - Retrieve a list of datapoints connected to this conversion
* `conversionsGetDatapointsCount` - Retrieve a count of datapoints connected to this conversion
* `conversionsGetHits` - Retrieve the list of events related to this conversion.
* `conversionsGetStatisticsAllList` - Retrieve statistics about this customer for a timeframe related to a subset of conversions grouped by some temporal entity (day/week/month)
* `conversionsGetStatisticsList` - Retrieve statistics about this conversion for a timeframe grouped by some temporal entity (day/week/month)
* `conversionsGetStatisticsSingle` - Retrieve statistics about this conversion for a timeframe
* `conversionsGetTops` - Retrieve a top report connected to this conversion
* `conversionsPatch` - Modify the association between a conversion and a datapoint
* `conversionsPatchNotes` - Fast patch the "notes" field of a conversion
* `conversionsPost` - Update conversion specified by id
* `conversionsPut` - Create a conversion
* `dataPointsCount` - Count the datapoints associated to the user
* `dataPointsDelete` - Delete a datapoint
* `dataPointsGet` - List of all the datapoints associated to the user
* `dataPointsGetHits` - Retrieve the list of events related to this datapoint.
* `dataPointsGetStatisticsAggregatedSingle` - Retrieve statistics about this customer for a timeframe by groups
* `dataPointsGetStatisticsAllList` - Retrieve statistics about all datapoints of this customer for a timeframe grouped by some temporal entity (day/week/month)
* `dataPointsGetStatisticsList` - Retrieve statistics about this datapoint for a timeframe grouped by some temporal entity (day/week/month)
* `dataPointsGetStatisticsSingle` - Retrieve statistics about this datapoint for a timeframe
* `dataPointsGetTops` - Retrieve a top report connected to this datapoint
* `dataPointsPatchFavourite` - Fast switch the "favourite" field of a datapoint
* `dataPointsPatchNotes` - Fast patch the "notes" field of a datapoint
* `domainsCount` - Retrieve count of domains
* `domainsDelete` - Delete a domain
* `domainsGet` - Retrieve a list of domains
* `domainsPut` - Create a domain
* `domainsUpdate` - Update a domain
* `getConversionsConversionId` - Retrieve conversion specified by id
* `getDatapointsId` - Get a datapoint
* `getDomainsId` - Get a domain
* `getGroupsId` - Get a group
* `getRetargetingId` - Get a retargeting script object
* `getTagsTagId` - Retrieve a tag
* `groupsCount` - Count the groups associated to the user.
* `groupsDelete` - Delete group specified by id
* `groupsGet` - List of all the groups associated to the user.
* `groupsGetDatapoints` - List of all the datapoints associated to the user in this group.
* `groupsGetDatapointsCount` - Count the datapoints associated to the user in this group.
* `groupsGetDatapointsSummary` - Retrieve statistics about a subset of datapoints for a timeframe with datapoints data
* `groupsGetHits` - Retrieve the list of events related to this group.
* `groupsGetStatisticsAggregatedSingle` - Retrieve statistics about this customer for a timeframe by groups
* `groupsGetStatisticsAllList` - Retrieve statistics about all groups of this customer for a timeframe grouped by some temporal entity (day/week/month)
* `groupsGetStatisticsList` - Retrieve statistics about this group for a timeframe grouped by some temporal entity (day/week/month)
* `groupsGetStatisticsSingle` - Retrieve statistics about this group for a timeframe
* `groupsGetTops` - Retrieve a top report connected to this group
* `groupsPatchFavourite` - Fast switch the "favourite" field of a group
* `groupsPatchNotes` - Fast patch the "notes" field of a group
* `hitsGetHits` - Retrieve the list of events related to this account.
* `meGetMe` - Retrieve current account data
* `meGetMePlan` - Retrieve current account plan
* `postAccountGuestsGuestIdTypePermissionsPatch` - Change the permission on a shared object
* `reportsGet` - Retrieve a top report
* `retargetingCount` - Retrieve count of retargeting scripts
* `retargetingDelete` - Deletes a retargeting script (and remove associations)
* `retargetingGet` - List of all the retargeting scripts associated to the user
* `retargetingGetDatapoints` - List of all the datapoints associated to the retargeting script.
* `retargetingGetDatapointsCount` - Count the datapoints associated to the retargeting script.
* `retargetingPost` - Updates a retargeting script
* `retargetingPut` - Creates a retargeting script
* `tagsCount` - List of all the groups associated to the user filtered by this tag.
* `tagsDelete` - Delete a tag
* `tagsDeleteRelatedDatapoints` - Delete the association of this tag with all datapoints
* `tagsDeleteRelatedGroups` - Delete the association of this tag with all groups
* `tagsGet` - List of all the groups associated to the user filtered by this tag.
* `tagsGetDatapoints` - List of all the datapoints associated to the user filtered by this tag
* `tagsGetDatapointsCount` - Count the datapoints associated to the user filtered by this tag
* `tagsGetGroups` - List of all the groups associated to the user filtered by this tag.
* `tagsGetGroupsCount` - Count the groups associated to the user filtered by this tag
* `tagsPatchDataPoint` - Associate/Deassociate a tag with a datapoint
* `tagsPatchGroup` - Associate/Deassociate a tag with a group
* `tagsPatchTagName` - Fast patch a tag name
* `tagsPut` - Create a tag

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
