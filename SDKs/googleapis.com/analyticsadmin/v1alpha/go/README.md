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
    
    req := operations.AnalyticsadminAccountSummariesListRequest{
        Security: operations.AnalyticsadminAccountSummariesListSecurity{
            Option1: &operations.AnalyticsadminAccountSummariesListSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        QueryParams: operations.AnalyticsadminAccountSummariesListQueryParams{
            DollarXgafv: "1",
            AccessToken: "quo",
            Alt: "json",
            Callback: "consequatur",
            Fields: "autem",
            Key: "vitae",
            OauthToken: "soluta",
            PageSize: 3262293110058638405,
            PageToken: "ut",
            PrettyPrint: false,
            QuotaUser: "voluptatibus",
            UploadType: "adipisci",
            UploadProtocol: "maiores",
        },
    }
    
    res, err := s.AccountSummaries.AnalyticsadminAccountSummariesList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaListAccountSummariesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accountSummaries

* `AnalyticsadminAccountSummariesList` - Returns summaries of all accounts accessible by the caller.

### accounts

* `AnalyticsadminAccountsList` - Returns all accounts accessible by the caller. Note that these accounts might not currently have GA4 properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.
* `AnalyticsadminAccountsProvisionAccountTicket` - Requests a ticket for creating an account.
* `AnalyticsadminAccountsSearchChangeHistoryEvents` - Searches through all changes to an account or its children given the specified set of filters.

### properties

* `AnalyticsadminPropertiesAcknowledgeUserDataCollection` - Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or via this API) before MeasurementProtocolSecret resources may be created.
* `AnalyticsadminPropertiesAudiencesCreate` - Creates an Audience.
* `AnalyticsadminPropertiesAudiencesList` - Lists Audiences on a property. Audiences created before 2020 may not be supported. Default audiences will not show filter definitions.
* `AnalyticsadminPropertiesConversionEventsCreate` - Creates a conversion event with the specified attributes.
* `AnalyticsadminPropertiesConversionEventsList` - Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
* `AnalyticsadminPropertiesCreate` - Creates an "GA4" property with the specified location and attributes.
* `AnalyticsadminPropertiesCustomDimensionsCreate` - Creates a CustomDimension.
* `AnalyticsadminPropertiesCustomDimensionsList` - Lists CustomDimensions on a property.
* `AnalyticsadminPropertiesCustomMetricsArchive` - Archives a CustomMetric on a property.
* `AnalyticsadminPropertiesCustomMetricsCreate` - Creates a CustomMetric.
* `AnalyticsadminPropertiesCustomMetricsList` - Lists CustomMetrics on a property.
* `AnalyticsadminPropertiesDataStreamsCreate` - Creates a DataStream.
* `AnalyticsadminPropertiesDataStreamsList` - Lists DataStreams on a property.
* `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate` - Creates a measurement protocol secret.
* `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList` - Returns child MeasurementProtocolSecrets under the specified parent Property.
* `AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApprove` - Approves a DisplayVideo360AdvertiserLinkProposal. The DisplayVideo360AdvertiserLinkProposal will be deleted and a new DisplayVideo360AdvertiserLink will be created.
* `AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancel` - Cancels a DisplayVideo360AdvertiserLinkProposal. Cancelling can mean either: - Declining a proposal initiated from Display & Video 360 - Withdrawing a proposal initiated from Google Analytics After being cancelled, a proposal will eventually be deleted automatically.
* `AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreate` - Creates a DisplayVideo360AdvertiserLinkProposal.
* `AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsList` - Lists DisplayVideo360AdvertiserLinkProposals on a property.
* `AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreate` - Creates a DisplayVideo360AdvertiserLink. This can only be utilized by users who have proper authorization both on the Google Analytics property and on the Display & Video 360 advertiser. Users who do not have access to the Display & Video 360 advertiser should instead seek to create a DisplayVideo360LinkProposal.
* `AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksList` - Lists all DisplayVideo360AdvertiserLinks on a property.
* `AnalyticsadminPropertiesFirebaseLinksCreate` - Creates a FirebaseLink. Properties can have at most one FirebaseLink.
* `AnalyticsadminPropertiesFirebaseLinksList` - Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
* `AnalyticsadminPropertiesGoogleAdsLinksCreate` - Creates a GoogleAdsLink.
* `AnalyticsadminPropertiesGoogleAdsLinksList` - Lists GoogleAdsLinks on a property.
* `AnalyticsadminPropertiesList` - Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
* `AnalyticsadminPropertiesRunAccessReport` - Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).
* `AnalyticsadminPropertiesSearchAds360LinksCreate` - Creates a SearchAds360Link.
* `AnalyticsadminPropertiesSearchAds360LinksList` - Lists all SearchAds360Links on a property.
* `AnalyticsadminPropertiesUserLinksAudit` - Lists all user links on an account or property, including implicit ones that come from effective permissions granted by groups or organization admin roles. If a returned user link does not have direct permissions, they cannot be removed from the account or property directly with the DeleteUserLink command. They have to be removed from the group/etc that gives them permissions, which is currently only usable/discoverable in the GA or GMP UIs.
* `AnalyticsadminPropertiesUserLinksBatchCreate` - Creates information about multiple users' links to an account or property. This method is transactional. If any UserLink cannot be created, none of the UserLinks will be created.
* `AnalyticsadminPropertiesUserLinksBatchDelete` - Deletes information about multiple users' links to an account or property.
* `AnalyticsadminPropertiesUserLinksBatchGet` - Gets information about multiple users' links to an account or property.
* `AnalyticsadminPropertiesUserLinksBatchUpdate` - Updates information about multiple users' links to an account or property.
* `AnalyticsadminPropertiesUserLinksCreate` - Creates a user link on an account or property. If the user with the specified email already has permissions on the account or property, then the user's existing permissions will be unioned with the permissions specified in the new UserLink.
* `AnalyticsadminPropertiesUserLinksDelete` - Deletes a user link on an account or property.
* `AnalyticsadminPropertiesUserLinksGet` - Gets information about a user's link to an account or property.
* `AnalyticsadminPropertiesUserLinksList` - Lists all user links on an account or property.
* `AnalyticsadminPropertiesUserLinksPatch` - Updates a user link on an account or property.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
