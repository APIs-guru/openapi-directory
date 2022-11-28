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
import { AnalyticsadminAccountSummariesListRequest, AnalyticsadminAccountSummariesListResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AnalyticsadminAccountSummariesListRequest = {
  security: {
    option1: {
      oauth2: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
      oauth2c: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
    },
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "quo",
    alt: "json",
    callback: "consequatur",
    fields: "autem",
    key: "vitae",
    oauthToken: "soluta",
    pageSize: 3262293110058638405,
    pageToken: "ut",
    prettyPrint: false,
    quotaUser: "voluptatibus",
    uploadType: "adipisci",
    uploadProtocol: "maiores",
  },
};

sdk.accountSummaries.analyticsadminAccountSummariesList(req).then((res: AnalyticsadminAccountSummariesListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accountSummaries

* `analyticsadminAccountSummariesList` - Returns summaries of all accounts accessible by the caller.

### accounts

* `analyticsadminAccountsList` - Returns all accounts accessible by the caller. Note that these accounts might not currently have GA4 properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.
* `analyticsadminAccountsProvisionAccountTicket` - Requests a ticket for creating an account.
* `analyticsadminAccountsSearchChangeHistoryEvents` - Searches through all changes to an account or its children given the specified set of filters.

### properties

* `analyticsadminPropertiesAcknowledgeUserDataCollection` - Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or via this API) before MeasurementProtocolSecret resources may be created.
* `analyticsadminPropertiesAudiencesCreate` - Creates an Audience.
* `analyticsadminPropertiesAudiencesList` - Lists Audiences on a property. Audiences created before 2020 may not be supported. Default audiences will not show filter definitions.
* `analyticsadminPropertiesConversionEventsCreate` - Creates a conversion event with the specified attributes.
* `analyticsadminPropertiesConversionEventsList` - Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
* `analyticsadminPropertiesCreate` - Creates an "GA4" property with the specified location and attributes.
* `analyticsadminPropertiesCustomDimensionsCreate` - Creates a CustomDimension.
* `analyticsadminPropertiesCustomDimensionsList` - Lists CustomDimensions on a property.
* `analyticsadminPropertiesCustomMetricsArchive` - Archives a CustomMetric on a property.
* `analyticsadminPropertiesCustomMetricsCreate` - Creates a CustomMetric.
* `analyticsadminPropertiesCustomMetricsList` - Lists CustomMetrics on a property.
* `analyticsadminPropertiesDataStreamsCreate` - Creates a DataStream.
* `analyticsadminPropertiesDataStreamsList` - Lists DataStreams on a property.
* `analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate` - Creates a measurement protocol secret.
* `analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList` - Returns child MeasurementProtocolSecrets under the specified parent Property.
* `analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApprove` - Approves a DisplayVideo360AdvertiserLinkProposal. The DisplayVideo360AdvertiserLinkProposal will be deleted and a new DisplayVideo360AdvertiserLink will be created.
* `analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancel` - Cancels a DisplayVideo360AdvertiserLinkProposal. Cancelling can mean either: - Declining a proposal initiated from Display & Video 360 - Withdrawing a proposal initiated from Google Analytics After being cancelled, a proposal will eventually be deleted automatically.
* `analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreate` - Creates a DisplayVideo360AdvertiserLinkProposal.
* `analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsList` - Lists DisplayVideo360AdvertiserLinkProposals on a property.
* `analyticsadminPropertiesDisplayVideo360AdvertiserLinksCreate` - Creates a DisplayVideo360AdvertiserLink. This can only be utilized by users who have proper authorization both on the Google Analytics property and on the Display & Video 360 advertiser. Users who do not have access to the Display & Video 360 advertiser should instead seek to create a DisplayVideo360LinkProposal.
* `analyticsadminPropertiesDisplayVideo360AdvertiserLinksList` - Lists all DisplayVideo360AdvertiserLinks on a property.
* `analyticsadminPropertiesFirebaseLinksCreate` - Creates a FirebaseLink. Properties can have at most one FirebaseLink.
* `analyticsadminPropertiesFirebaseLinksList` - Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
* `analyticsadminPropertiesGoogleAdsLinksCreate` - Creates a GoogleAdsLink.
* `analyticsadminPropertiesGoogleAdsLinksList` - Lists GoogleAdsLinks on a property.
* `analyticsadminPropertiesList` - Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
* `analyticsadminPropertiesRunAccessReport` - Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).
* `analyticsadminPropertiesSearchAds360LinksCreate` - Creates a SearchAds360Link.
* `analyticsadminPropertiesSearchAds360LinksList` - Lists all SearchAds360Links on a property.
* `analyticsadminPropertiesUserLinksAudit` - Lists all user links on an account or property, including implicit ones that come from effective permissions granted by groups or organization admin roles. If a returned user link does not have direct permissions, they cannot be removed from the account or property directly with the DeleteUserLink command. They have to be removed from the group/etc that gives them permissions, which is currently only usable/discoverable in the GA or GMP UIs.
* `analyticsadminPropertiesUserLinksBatchCreate` - Creates information about multiple users' links to an account or property. This method is transactional. If any UserLink cannot be created, none of the UserLinks will be created.
* `analyticsadminPropertiesUserLinksBatchDelete` - Deletes information about multiple users' links to an account or property.
* `analyticsadminPropertiesUserLinksBatchGet` - Gets information about multiple users' links to an account or property.
* `analyticsadminPropertiesUserLinksBatchUpdate` - Updates information about multiple users' links to an account or property.
* `analyticsadminPropertiesUserLinksCreate` - Creates a user link on an account or property. If the user with the specified email already has permissions on the account or property, then the user's existing permissions will be unioned with the permissions specified in the new UserLink.
* `analyticsadminPropertiesUserLinksDelete` - Deletes a user link on an account or property.
* `analyticsadminPropertiesUserLinksGet` - Gets information about a user's link to an account or property.
* `analyticsadminPropertiesUserLinksList` - Lists all user links on an account or property.
* `analyticsadminPropertiesUserLinksPatch` - Updates a user link on an account or property.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
