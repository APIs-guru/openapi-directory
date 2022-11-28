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
    
    req := operations.AnalyticsDataGaGetRequest{
        Security: operations.AnalyticsDataGaGetSecurity{
            Option1: &operations.AnalyticsDataGaGetSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        QueryParams: operations.AnalyticsDataGaGetQueryParams{
            Alt: "json",
            Dimensions: "molestiae",
            EndDate: "mollitia",
            Fields: "non",
            Filters: "similique",
            Ids: "id",
            IncludeEmptyRows: true,
            Key: "quia",
            MaxResults: 8874339057685439512,
            Metrics: "tenetur",
            OauthToken: "non",
            Output: "json",
            PrettyPrint: true,
            QuotaUser: "perspiciatis",
            SamplingLevel: "HIGHER_PRECISION",
            Segment: "aut",
            Sort: "ut",
            StartDate: "voluptas",
            StartIndex: 2569169535412766127,
            UserIP: "molestias",
        },
    }
    
    res, err := s.Data.AnalyticsDataGaGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GaData != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### data

* `AnalyticsDataGaGet` - Returns Analytics data for a view (profile).
* `AnalyticsDataMcfGet` - Returns Analytics Multi-Channel Funnels data for a view (profile).
* `AnalyticsDataRealtimeGet` - Returns real time data for a view (profile).

### management

* `AnalyticsManagementAccountSummariesList` - Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.
* `AnalyticsManagementAccountUserLinksDelete` - Removes a user from the given account.
* `AnalyticsManagementAccountUserLinksInsert` - Adds a new user to the given account.
* `AnalyticsManagementAccountUserLinksList` - Lists account-user links for a given account.
* `AnalyticsManagementAccountUserLinksUpdate` - Updates permissions for an existing user on the given account.
* `AnalyticsManagementAccountsList` - Lists all accounts to which the user has access.
* `AnalyticsManagementClientIDHashClientID` - Hashes the given Client ID.
* `AnalyticsManagementCustomDataSourcesList` - List custom data sources to which the user has access.
* `AnalyticsManagementCustomDimensionsGet` - Get a custom dimension to which the user has access.
* `AnalyticsManagementCustomDimensionsInsert` - Create a new custom dimension.
* `AnalyticsManagementCustomDimensionsList` - Lists custom dimensions to which the user has access.
* `AnalyticsManagementCustomDimensionsPatch` - Updates an existing custom dimension. This method supports patch semantics.
* `AnalyticsManagementCustomDimensionsUpdate` - Updates an existing custom dimension.
* `AnalyticsManagementCustomMetricsGet` - Get a custom metric to which the user has access.
* `AnalyticsManagementCustomMetricsInsert` - Create a new custom metric.
* `AnalyticsManagementCustomMetricsList` - Lists custom metrics to which the user has access.
* `AnalyticsManagementCustomMetricsPatch` - Updates an existing custom metric. This method supports patch semantics.
* `AnalyticsManagementCustomMetricsUpdate` - Updates an existing custom metric.
* `AnalyticsManagementExperimentsDelete` - Delete an experiment.
* `AnalyticsManagementExperimentsGet` - Returns an experiment to which the user has access.
* `AnalyticsManagementExperimentsInsert` - Create a new experiment.
* `AnalyticsManagementExperimentsList` - Lists experiments to which the user has access.
* `AnalyticsManagementExperimentsPatch` - Update an existing experiment. This method supports patch semantics.
* `AnalyticsManagementExperimentsUpdate` - Update an existing experiment.
* `AnalyticsManagementFiltersDelete` - Delete a filter.
* `AnalyticsManagementFiltersGet` - Returns filters to which the user has access.
* `AnalyticsManagementFiltersInsert` - Create a new filter.
* `AnalyticsManagementFiltersList` - Lists all filters for an account
* `AnalyticsManagementFiltersPatch` - Updates an existing filter. This method supports patch semantics.
* `AnalyticsManagementFiltersUpdate` - Updates an existing filter.
* `AnalyticsManagementGoalsGet` - Gets a goal to which the user has access.
* `AnalyticsManagementGoalsInsert` - Create a new goal.
* `AnalyticsManagementGoalsList` - Lists goals to which the user has access.
* `AnalyticsManagementGoalsPatch` - Updates an existing goal. This method supports patch semantics.
* `AnalyticsManagementGoalsUpdate` - Updates an existing goal.
* `AnalyticsManagementProfileFilterLinksDelete` - Delete a profile filter link.
* `AnalyticsManagementProfileFilterLinksGet` - Returns a single profile filter link.
* `AnalyticsManagementProfileFilterLinksInsert` - Create a new profile filter link.
* `AnalyticsManagementProfileFilterLinksList` - Lists all profile filter links for a profile.
* `AnalyticsManagementProfileFilterLinksPatch` - Update an existing profile filter link. This method supports patch semantics.
* `AnalyticsManagementProfileFilterLinksUpdate` - Update an existing profile filter link.
* `AnalyticsManagementProfileUserLinksDelete` - Removes a user from the given view (profile).
* `AnalyticsManagementProfileUserLinksInsert` - Adds a new user to the given view (profile).
* `AnalyticsManagementProfileUserLinksList` - Lists profile-user links for a given view (profile).
* `AnalyticsManagementProfileUserLinksUpdate` - Updates permissions for an existing user on the given view (profile).
* `AnalyticsManagementProfilesDelete` - Deletes a view (profile).
* `AnalyticsManagementProfilesGet` - Gets a view (profile) to which the user has access.
* `AnalyticsManagementProfilesInsert` - Create a new view (profile).
* `AnalyticsManagementProfilesList` - Lists views (profiles) to which the user has access.
* `AnalyticsManagementProfilesPatch` - Updates an existing view (profile). This method supports patch semantics.
* `AnalyticsManagementProfilesUpdate` - Updates an existing view (profile).
* `AnalyticsManagementRemarketingAudienceDelete` - Delete a remarketing audience.
* `AnalyticsManagementRemarketingAudienceGet` - Gets a remarketing audience to which the user has access.
* `AnalyticsManagementRemarketingAudienceInsert` - Creates a new remarketing audience.
* `AnalyticsManagementRemarketingAudienceList` - Lists remarketing audiences to which the user has access.
* `AnalyticsManagementRemarketingAudiencePatch` - Updates an existing remarketing audience. This method supports patch semantics.
* `AnalyticsManagementRemarketingAudienceUpdate` - Updates an existing remarketing audience.
* `AnalyticsManagementSegmentsList` - Lists segments to which the user has access.
* `AnalyticsManagementUnsampledReportsDelete` - Deletes an unsampled report.
* `AnalyticsManagementUnsampledReportsGet` - Returns a single unsampled report.
* `AnalyticsManagementUnsampledReportsInsert` - Create a new unsampled report.
* `AnalyticsManagementUnsampledReportsList` - Lists unsampled reports to which the user has access.
* `AnalyticsManagementUploadsDeleteUploadData` - Delete data associated with a previous upload.
* `AnalyticsManagementUploadsGet` - List uploads to which the user has access.
* `AnalyticsManagementUploadsList` - List uploads to which the user has access.
* `AnalyticsManagementUploadsUploadData` - Upload data for a custom data source.
* `AnalyticsManagementWebPropertyAdWordsLinksDelete` - Deletes a web property-Google Ads link.
* `AnalyticsManagementWebPropertyAdWordsLinksGet` - Returns a web property-Google Ads link to which the user has access.
* `AnalyticsManagementWebPropertyAdWordsLinksInsert` - Creates a webProperty-Google Ads link.
* `AnalyticsManagementWebPropertyAdWordsLinksList` - Lists webProperty-Google Ads links for a given web property.
* `AnalyticsManagementWebPropertyAdWordsLinksPatch` - Updates an existing webProperty-Google Ads link. This method supports patch semantics.
* `AnalyticsManagementWebPropertyAdWordsLinksUpdate` - Updates an existing webProperty-Google Ads link.
* `AnalyticsManagementWebpropertiesGet` - Gets a web property to which the user has access.
* `AnalyticsManagementWebpropertiesInsert` - Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile.
* `AnalyticsManagementWebpropertiesList` - Lists web properties to which the user has access.
* `AnalyticsManagementWebpropertiesPatch` - Updates an existing web property. This method supports patch semantics.
* `AnalyticsManagementWebpropertiesUpdate` - Updates an existing web property.
* `AnalyticsManagementWebpropertyUserLinksDelete` - Removes a user from the given web property.
* `AnalyticsManagementWebpropertyUserLinksInsert` - Adds a new user to the given web property.
* `AnalyticsManagementWebpropertyUserLinksList` - Lists webProperty-user links for a given web property.
* `AnalyticsManagementWebpropertyUserLinksUpdate` - Updates permissions for an existing user on the given web property.

### metadata

* `AnalyticsMetadataColumnsList` - Lists all columns for a report type

### provisioning

* `AnalyticsProvisioningCreateAccountTicket` - Creates an account ticket.
* `AnalyticsProvisioningCreateAccountTree` - Provision account.

### userDeletion

* `AnalyticsUserDeletionUserDeletionRequestUpsert` - Insert or update a user deletion requests.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
