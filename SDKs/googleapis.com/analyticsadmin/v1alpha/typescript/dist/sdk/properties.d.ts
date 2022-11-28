import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Properties {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * analyticsadminPropertiesAcknowledgeUserDataCollection - Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or via this API) before MeasurementProtocolSecret resources may be created.
    **/
    analyticsadminPropertiesAcknowledgeUserDataCollection(req: operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionResponse>;
    /**
     * analyticsadminPropertiesAudiencesCreate - Creates an Audience.
    **/
    analyticsadminPropertiesAudiencesCreate(req: operations.AnalyticsadminPropertiesAudiencesCreateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesAudiencesCreateResponse>;
    /**
     * analyticsadminPropertiesAudiencesList - Lists Audiences on a property. Audiences created before 2020 may not be supported. Default audiences will not show filter definitions.
    **/
    analyticsadminPropertiesAudiencesList(req: operations.AnalyticsadminPropertiesAudiencesListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesAudiencesListResponse>;
    /**
     * analyticsadminPropertiesConversionEventsCreate - Creates a conversion event with the specified attributes.
    **/
    analyticsadminPropertiesConversionEventsCreate(req: operations.AnalyticsadminPropertiesConversionEventsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesConversionEventsCreateResponse>;
    /**
     * analyticsadminPropertiesConversionEventsList - Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
    **/
    analyticsadminPropertiesConversionEventsList(req: operations.AnalyticsadminPropertiesConversionEventsListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesConversionEventsListResponse>;
    /**
     * analyticsadminPropertiesCreate - Creates an "GA4" property with the specified location and attributes.
    **/
    analyticsadminPropertiesCreate(req: operations.AnalyticsadminPropertiesCreateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesCreateResponse>;
    /**
     * analyticsadminPropertiesCustomDimensionsCreate - Creates a CustomDimension.
    **/
    analyticsadminPropertiesCustomDimensionsCreate(req: operations.AnalyticsadminPropertiesCustomDimensionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesCustomDimensionsCreateResponse>;
    /**
     * analyticsadminPropertiesCustomDimensionsList - Lists CustomDimensions on a property.
    **/
    analyticsadminPropertiesCustomDimensionsList(req: operations.AnalyticsadminPropertiesCustomDimensionsListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesCustomDimensionsListResponse>;
    /**
     * analyticsadminPropertiesCustomMetricsArchive - Archives a CustomMetric on a property.
    **/
    analyticsadminPropertiesCustomMetricsArchive(req: operations.AnalyticsadminPropertiesCustomMetricsArchiveRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesCustomMetricsArchiveResponse>;
    /**
     * analyticsadminPropertiesCustomMetricsCreate - Creates a CustomMetric.
    **/
    analyticsadminPropertiesCustomMetricsCreate(req: operations.AnalyticsadminPropertiesCustomMetricsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesCustomMetricsCreateResponse>;
    /**
     * analyticsadminPropertiesCustomMetricsList - Lists CustomMetrics on a property.
    **/
    analyticsadminPropertiesCustomMetricsList(req: operations.AnalyticsadminPropertiesCustomMetricsListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesCustomMetricsListResponse>;
    /**
     * analyticsadminPropertiesDataStreamsCreate - Creates a DataStream.
    **/
    analyticsadminPropertiesDataStreamsCreate(req: operations.AnalyticsadminPropertiesDataStreamsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesDataStreamsCreateResponse>;
    /**
     * analyticsadminPropertiesDataStreamsList - Lists DataStreams on a property.
    **/
    analyticsadminPropertiesDataStreamsList(req: operations.AnalyticsadminPropertiesDataStreamsListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesDataStreamsListResponse>;
    /**
     * analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate - Creates a measurement protocol secret.
    **/
    analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate(req: operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse>;
    /**
     * analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList - Returns child MeasurementProtocolSecrets under the specified parent Property.
    **/
    analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList(req: operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse>;
    /**
     * analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApprove - Approves a DisplayVideo360AdvertiserLinkProposal. The DisplayVideo360AdvertiserLinkProposal will be deleted and a new DisplayVideo360AdvertiserLink will be created.
    **/
    analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApprove(req: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveResponse>;
    /**
     * analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancel - Cancels a DisplayVideo360AdvertiserLinkProposal. Cancelling can mean either: - Declining a proposal initiated from Display & Video 360 - Withdrawing a proposal initiated from Google Analytics After being cancelled, a proposal will eventually be deleted automatically.
    **/
    analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancel(req: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelResponse>;
    /**
     * analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreate - Creates a DisplayVideo360AdvertiserLinkProposal.
    **/
    analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreate(req: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateResponse>;
    /**
     * analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsList - Lists DisplayVideo360AdvertiserLinkProposals on a property.
    **/
    analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsList(req: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListResponse>;
    /**
     * analyticsadminPropertiesDisplayVideo360AdvertiserLinksCreate - Creates a DisplayVideo360AdvertiserLink. This can only be utilized by users who have proper authorization both on the Google Analytics property and on the Display & Video 360 advertiser. Users who do not have access to the Display & Video 360 advertiser should instead seek to create a DisplayVideo360LinkProposal.
    **/
    analyticsadminPropertiesDisplayVideo360AdvertiserLinksCreate(req: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateResponse>;
    /**
     * analyticsadminPropertiesDisplayVideo360AdvertiserLinksList - Lists all DisplayVideo360AdvertiserLinks on a property.
    **/
    analyticsadminPropertiesDisplayVideo360AdvertiserLinksList(req: operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListResponse>;
    /**
     * analyticsadminPropertiesFirebaseLinksCreate - Creates a FirebaseLink. Properties can have at most one FirebaseLink.
    **/
    analyticsadminPropertiesFirebaseLinksCreate(req: operations.AnalyticsadminPropertiesFirebaseLinksCreateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesFirebaseLinksCreateResponse>;
    /**
     * analyticsadminPropertiesFirebaseLinksList - Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
    **/
    analyticsadminPropertiesFirebaseLinksList(req: operations.AnalyticsadminPropertiesFirebaseLinksListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesFirebaseLinksListResponse>;
    /**
     * analyticsadminPropertiesGoogleAdsLinksCreate - Creates a GoogleAdsLink.
    **/
    analyticsadminPropertiesGoogleAdsLinksCreate(req: operations.AnalyticsadminPropertiesGoogleAdsLinksCreateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesGoogleAdsLinksCreateResponse>;
    /**
     * analyticsadminPropertiesGoogleAdsLinksList - Lists GoogleAdsLinks on a property.
    **/
    analyticsadminPropertiesGoogleAdsLinksList(req: operations.AnalyticsadminPropertiesGoogleAdsLinksListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesGoogleAdsLinksListResponse>;
    /**
     * analyticsadminPropertiesList - Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
    **/
    analyticsadminPropertiesList(req: operations.AnalyticsadminPropertiesListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesListResponse>;
    /**
     * analyticsadminPropertiesRunAccessReport - Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).
    **/
    analyticsadminPropertiesRunAccessReport(req: operations.AnalyticsadminPropertiesRunAccessReportRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesRunAccessReportResponse>;
    /**
     * analyticsadminPropertiesSearchAds360LinksCreate - Creates a SearchAds360Link.
    **/
    analyticsadminPropertiesSearchAds360LinksCreate(req: operations.AnalyticsadminPropertiesSearchAds360LinksCreateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesSearchAds360LinksCreateResponse>;
    /**
     * analyticsadminPropertiesSearchAds360LinksList - Lists all SearchAds360Links on a property.
    **/
    analyticsadminPropertiesSearchAds360LinksList(req: operations.AnalyticsadminPropertiesSearchAds360LinksListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesSearchAds360LinksListResponse>;
    /**
     * analyticsadminPropertiesUserLinksAudit - Lists all user links on an account or property, including implicit ones that come from effective permissions granted by groups or organization admin roles. If a returned user link does not have direct permissions, they cannot be removed from the account or property directly with the DeleteUserLink command. They have to be removed from the group/etc that gives them permissions, which is currently only usable/discoverable in the GA or GMP UIs.
    **/
    analyticsadminPropertiesUserLinksAudit(req: operations.AnalyticsadminPropertiesUserLinksAuditRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesUserLinksAuditResponse>;
    /**
     * analyticsadminPropertiesUserLinksBatchCreate - Creates information about multiple users' links to an account or property. This method is transactional. If any UserLink cannot be created, none of the UserLinks will be created.
    **/
    analyticsadminPropertiesUserLinksBatchCreate(req: operations.AnalyticsadminPropertiesUserLinksBatchCreateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesUserLinksBatchCreateResponse>;
    /**
     * analyticsadminPropertiesUserLinksBatchDelete - Deletes information about multiple users' links to an account or property.
    **/
    analyticsadminPropertiesUserLinksBatchDelete(req: operations.AnalyticsadminPropertiesUserLinksBatchDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesUserLinksBatchDeleteResponse>;
    /**
     * analyticsadminPropertiesUserLinksBatchGet - Gets information about multiple users' links to an account or property.
    **/
    analyticsadminPropertiesUserLinksBatchGet(req: operations.AnalyticsadminPropertiesUserLinksBatchGetRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesUserLinksBatchGetResponse>;
    /**
     * analyticsadminPropertiesUserLinksBatchUpdate - Updates information about multiple users' links to an account or property.
    **/
    analyticsadminPropertiesUserLinksBatchUpdate(req: operations.AnalyticsadminPropertiesUserLinksBatchUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesUserLinksBatchUpdateResponse>;
    /**
     * analyticsadminPropertiesUserLinksCreate - Creates a user link on an account or property. If the user with the specified email already has permissions on the account or property, then the user's existing permissions will be unioned with the permissions specified in the new UserLink.
    **/
    analyticsadminPropertiesUserLinksCreate(req: operations.AnalyticsadminPropertiesUserLinksCreateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesUserLinksCreateResponse>;
    /**
     * analyticsadminPropertiesUserLinksDelete - Deletes a user link on an account or property.
    **/
    analyticsadminPropertiesUserLinksDelete(req: operations.AnalyticsadminPropertiesUserLinksDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesUserLinksDeleteResponse>;
    /**
     * analyticsadminPropertiesUserLinksGet - Gets information about a user's link to an account or property.
    **/
    analyticsadminPropertiesUserLinksGet(req: operations.AnalyticsadminPropertiesUserLinksGetRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesUserLinksGetResponse>;
    /**
     * analyticsadminPropertiesUserLinksList - Lists all user links on an account or property.
    **/
    analyticsadminPropertiesUserLinksList(req: operations.AnalyticsadminPropertiesUserLinksListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesUserLinksListResponse>;
    /**
     * analyticsadminPropertiesUserLinksPatch - Updates a user link on an account or property.
    **/
    analyticsadminPropertiesUserLinksPatch(req: operations.AnalyticsadminPropertiesUserLinksPatchRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsadminPropertiesUserLinksPatchResponse>;
}
