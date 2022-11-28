import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Management {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * analyticsManagementAccountSummariesList - Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.
    **/
    analyticsManagementAccountSummariesList(req: operations.AnalyticsManagementAccountSummariesListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementAccountSummariesListResponse>;
    /**
     * analyticsManagementAccountUserLinksDelete - Removes a user from the given account.
    **/
    analyticsManagementAccountUserLinksDelete(req: operations.AnalyticsManagementAccountUserLinksDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementAccountUserLinksDeleteResponse>;
    /**
     * analyticsManagementAccountUserLinksInsert - Adds a new user to the given account.
    **/
    analyticsManagementAccountUserLinksInsert(req: operations.AnalyticsManagementAccountUserLinksInsertRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementAccountUserLinksInsertResponse>;
    /**
     * analyticsManagementAccountUserLinksList - Lists account-user links for a given account.
    **/
    analyticsManagementAccountUserLinksList(req: operations.AnalyticsManagementAccountUserLinksListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementAccountUserLinksListResponse>;
    /**
     * analyticsManagementAccountUserLinksUpdate - Updates permissions for an existing user on the given account.
    **/
    analyticsManagementAccountUserLinksUpdate(req: operations.AnalyticsManagementAccountUserLinksUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementAccountUserLinksUpdateResponse>;
    /**
     * analyticsManagementAccountsList - Lists all accounts to which the user has access.
    **/
    analyticsManagementAccountsList(req: operations.AnalyticsManagementAccountsListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementAccountsListResponse>;
    /**
     * analyticsManagementClientIdHashClientId - Hashes the given Client ID.
    **/
    analyticsManagementClientIdHashClientId(req: operations.AnalyticsManagementClientIdHashClientIdRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementClientIdHashClientIdResponse>;
    /**
     * analyticsManagementCustomDataSourcesList - List custom data sources to which the user has access.
    **/
    analyticsManagementCustomDataSourcesList(req: operations.AnalyticsManagementCustomDataSourcesListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementCustomDataSourcesListResponse>;
    /**
     * analyticsManagementCustomDimensionsGet - Get a custom dimension to which the user has access.
    **/
    analyticsManagementCustomDimensionsGet(req: operations.AnalyticsManagementCustomDimensionsGetRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementCustomDimensionsGetResponse>;
    /**
     * analyticsManagementCustomDimensionsInsert - Create a new custom dimension.
    **/
    analyticsManagementCustomDimensionsInsert(req: operations.AnalyticsManagementCustomDimensionsInsertRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementCustomDimensionsInsertResponse>;
    /**
     * analyticsManagementCustomDimensionsList - Lists custom dimensions to which the user has access.
    **/
    analyticsManagementCustomDimensionsList(req: operations.AnalyticsManagementCustomDimensionsListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementCustomDimensionsListResponse>;
    /**
     * analyticsManagementCustomDimensionsPatch - Updates an existing custom dimension. This method supports patch semantics.
    **/
    analyticsManagementCustomDimensionsPatch(req: operations.AnalyticsManagementCustomDimensionsPatchRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementCustomDimensionsPatchResponse>;
    /**
     * analyticsManagementCustomDimensionsUpdate - Updates an existing custom dimension.
    **/
    analyticsManagementCustomDimensionsUpdate(req: operations.AnalyticsManagementCustomDimensionsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementCustomDimensionsUpdateResponse>;
    /**
     * analyticsManagementCustomMetricsGet - Get a custom metric to which the user has access.
    **/
    analyticsManagementCustomMetricsGet(req: operations.AnalyticsManagementCustomMetricsGetRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementCustomMetricsGetResponse>;
    /**
     * analyticsManagementCustomMetricsInsert - Create a new custom metric.
    **/
    analyticsManagementCustomMetricsInsert(req: operations.AnalyticsManagementCustomMetricsInsertRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementCustomMetricsInsertResponse>;
    /**
     * analyticsManagementCustomMetricsList - Lists custom metrics to which the user has access.
    **/
    analyticsManagementCustomMetricsList(req: operations.AnalyticsManagementCustomMetricsListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementCustomMetricsListResponse>;
    /**
     * analyticsManagementCustomMetricsPatch - Updates an existing custom metric. This method supports patch semantics.
    **/
    analyticsManagementCustomMetricsPatch(req: operations.AnalyticsManagementCustomMetricsPatchRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementCustomMetricsPatchResponse>;
    /**
     * analyticsManagementCustomMetricsUpdate - Updates an existing custom metric.
    **/
    analyticsManagementCustomMetricsUpdate(req: operations.AnalyticsManagementCustomMetricsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementCustomMetricsUpdateResponse>;
    /**
     * analyticsManagementExperimentsDelete - Delete an experiment.
    **/
    analyticsManagementExperimentsDelete(req: operations.AnalyticsManagementExperimentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementExperimentsDeleteResponse>;
    /**
     * analyticsManagementExperimentsGet - Returns an experiment to which the user has access.
    **/
    analyticsManagementExperimentsGet(req: operations.AnalyticsManagementExperimentsGetRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementExperimentsGetResponse>;
    /**
     * analyticsManagementExperimentsInsert - Create a new experiment.
    **/
    analyticsManagementExperimentsInsert(req: operations.AnalyticsManagementExperimentsInsertRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementExperimentsInsertResponse>;
    /**
     * analyticsManagementExperimentsList - Lists experiments to which the user has access.
    **/
    analyticsManagementExperimentsList(req: operations.AnalyticsManagementExperimentsListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementExperimentsListResponse>;
    /**
     * analyticsManagementExperimentsPatch - Update an existing experiment. This method supports patch semantics.
    **/
    analyticsManagementExperimentsPatch(req: operations.AnalyticsManagementExperimentsPatchRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementExperimentsPatchResponse>;
    /**
     * analyticsManagementExperimentsUpdate - Update an existing experiment.
    **/
    analyticsManagementExperimentsUpdate(req: operations.AnalyticsManagementExperimentsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementExperimentsUpdateResponse>;
    /**
     * analyticsManagementFiltersDelete - Delete a filter.
    **/
    analyticsManagementFiltersDelete(req: operations.AnalyticsManagementFiltersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementFiltersDeleteResponse>;
    /**
     * analyticsManagementFiltersGet - Returns filters to which the user has access.
    **/
    analyticsManagementFiltersGet(req: operations.AnalyticsManagementFiltersGetRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementFiltersGetResponse>;
    /**
     * analyticsManagementFiltersInsert - Create a new filter.
    **/
    analyticsManagementFiltersInsert(req: operations.AnalyticsManagementFiltersInsertRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementFiltersInsertResponse>;
    /**
     * analyticsManagementFiltersList - Lists all filters for an account
    **/
    analyticsManagementFiltersList(req: operations.AnalyticsManagementFiltersListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementFiltersListResponse>;
    /**
     * analyticsManagementFiltersPatch - Updates an existing filter. This method supports patch semantics.
    **/
    analyticsManagementFiltersPatch(req: operations.AnalyticsManagementFiltersPatchRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementFiltersPatchResponse>;
    /**
     * analyticsManagementFiltersUpdate - Updates an existing filter.
    **/
    analyticsManagementFiltersUpdate(req: operations.AnalyticsManagementFiltersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementFiltersUpdateResponse>;
    /**
     * analyticsManagementGoalsGet - Gets a goal to which the user has access.
    **/
    analyticsManagementGoalsGet(req: operations.AnalyticsManagementGoalsGetRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementGoalsGetResponse>;
    /**
     * analyticsManagementGoalsInsert - Create a new goal.
    **/
    analyticsManagementGoalsInsert(req: operations.AnalyticsManagementGoalsInsertRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementGoalsInsertResponse>;
    /**
     * analyticsManagementGoalsList - Lists goals to which the user has access.
    **/
    analyticsManagementGoalsList(req: operations.AnalyticsManagementGoalsListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementGoalsListResponse>;
    /**
     * analyticsManagementGoalsPatch - Updates an existing goal. This method supports patch semantics.
    **/
    analyticsManagementGoalsPatch(req: operations.AnalyticsManagementGoalsPatchRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementGoalsPatchResponse>;
    /**
     * analyticsManagementGoalsUpdate - Updates an existing goal.
    **/
    analyticsManagementGoalsUpdate(req: operations.AnalyticsManagementGoalsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementGoalsUpdateResponse>;
    /**
     * analyticsManagementProfileFilterLinksDelete - Delete a profile filter link.
    **/
    analyticsManagementProfileFilterLinksDelete(req: operations.AnalyticsManagementProfileFilterLinksDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfileFilterLinksDeleteResponse>;
    /**
     * analyticsManagementProfileFilterLinksGet - Returns a single profile filter link.
    **/
    analyticsManagementProfileFilterLinksGet(req: operations.AnalyticsManagementProfileFilterLinksGetRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfileFilterLinksGetResponse>;
    /**
     * analyticsManagementProfileFilterLinksInsert - Create a new profile filter link.
    **/
    analyticsManagementProfileFilterLinksInsert(req: operations.AnalyticsManagementProfileFilterLinksInsertRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfileFilterLinksInsertResponse>;
    /**
     * analyticsManagementProfileFilterLinksList - Lists all profile filter links for a profile.
    **/
    analyticsManagementProfileFilterLinksList(req: operations.AnalyticsManagementProfileFilterLinksListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfileFilterLinksListResponse>;
    /**
     * analyticsManagementProfileFilterLinksPatch - Update an existing profile filter link. This method supports patch semantics.
    **/
    analyticsManagementProfileFilterLinksPatch(req: operations.AnalyticsManagementProfileFilterLinksPatchRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfileFilterLinksPatchResponse>;
    /**
     * analyticsManagementProfileFilterLinksUpdate - Update an existing profile filter link.
    **/
    analyticsManagementProfileFilterLinksUpdate(req: operations.AnalyticsManagementProfileFilterLinksUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfileFilterLinksUpdateResponse>;
    /**
     * analyticsManagementProfileUserLinksDelete - Removes a user from the given view (profile).
    **/
    analyticsManagementProfileUserLinksDelete(req: operations.AnalyticsManagementProfileUserLinksDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfileUserLinksDeleteResponse>;
    /**
     * analyticsManagementProfileUserLinksInsert - Adds a new user to the given view (profile).
    **/
    analyticsManagementProfileUserLinksInsert(req: operations.AnalyticsManagementProfileUserLinksInsertRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfileUserLinksInsertResponse>;
    /**
     * analyticsManagementProfileUserLinksList - Lists profile-user links for a given view (profile).
    **/
    analyticsManagementProfileUserLinksList(req: operations.AnalyticsManagementProfileUserLinksListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfileUserLinksListResponse>;
    /**
     * analyticsManagementProfileUserLinksUpdate - Updates permissions for an existing user on the given view (profile).
    **/
    analyticsManagementProfileUserLinksUpdate(req: operations.AnalyticsManagementProfileUserLinksUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfileUserLinksUpdateResponse>;
    /**
     * analyticsManagementProfilesDelete - Deletes a view (profile).
    **/
    analyticsManagementProfilesDelete(req: operations.AnalyticsManagementProfilesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfilesDeleteResponse>;
    /**
     * analyticsManagementProfilesGet - Gets a view (profile) to which the user has access.
    **/
    analyticsManagementProfilesGet(req: operations.AnalyticsManagementProfilesGetRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfilesGetResponse>;
    /**
     * analyticsManagementProfilesInsert - Create a new view (profile).
    **/
    analyticsManagementProfilesInsert(req: operations.AnalyticsManagementProfilesInsertRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfilesInsertResponse>;
    /**
     * analyticsManagementProfilesList - Lists views (profiles) to which the user has access.
    **/
    analyticsManagementProfilesList(req: operations.AnalyticsManagementProfilesListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfilesListResponse>;
    /**
     * analyticsManagementProfilesPatch - Updates an existing view (profile). This method supports patch semantics.
    **/
    analyticsManagementProfilesPatch(req: operations.AnalyticsManagementProfilesPatchRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfilesPatchResponse>;
    /**
     * analyticsManagementProfilesUpdate - Updates an existing view (profile).
    **/
    analyticsManagementProfilesUpdate(req: operations.AnalyticsManagementProfilesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementProfilesUpdateResponse>;
    /**
     * analyticsManagementRemarketingAudienceDelete - Delete a remarketing audience.
    **/
    analyticsManagementRemarketingAudienceDelete(req: operations.AnalyticsManagementRemarketingAudienceDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementRemarketingAudienceDeleteResponse>;
    /**
     * analyticsManagementRemarketingAudienceGet - Gets a remarketing audience to which the user has access.
    **/
    analyticsManagementRemarketingAudienceGet(req: operations.AnalyticsManagementRemarketingAudienceGetRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementRemarketingAudienceGetResponse>;
    /**
     * analyticsManagementRemarketingAudienceInsert - Creates a new remarketing audience.
    **/
    analyticsManagementRemarketingAudienceInsert(req: operations.AnalyticsManagementRemarketingAudienceInsertRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementRemarketingAudienceInsertResponse>;
    /**
     * analyticsManagementRemarketingAudienceList - Lists remarketing audiences to which the user has access.
    **/
    analyticsManagementRemarketingAudienceList(req: operations.AnalyticsManagementRemarketingAudienceListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementRemarketingAudienceListResponse>;
    /**
     * analyticsManagementRemarketingAudiencePatch - Updates an existing remarketing audience. This method supports patch semantics.
    **/
    analyticsManagementRemarketingAudiencePatch(req: operations.AnalyticsManagementRemarketingAudiencePatchRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementRemarketingAudiencePatchResponse>;
    /**
     * analyticsManagementRemarketingAudienceUpdate - Updates an existing remarketing audience.
    **/
    analyticsManagementRemarketingAudienceUpdate(req: operations.AnalyticsManagementRemarketingAudienceUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementRemarketingAudienceUpdateResponse>;
    /**
     * analyticsManagementSegmentsList - Lists segments to which the user has access.
    **/
    analyticsManagementSegmentsList(req: operations.AnalyticsManagementSegmentsListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementSegmentsListResponse>;
    /**
     * analyticsManagementUnsampledReportsDelete - Deletes an unsampled report.
    **/
    analyticsManagementUnsampledReportsDelete(req: operations.AnalyticsManagementUnsampledReportsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementUnsampledReportsDeleteResponse>;
    /**
     * analyticsManagementUnsampledReportsGet - Returns a single unsampled report.
    **/
    analyticsManagementUnsampledReportsGet(req: operations.AnalyticsManagementUnsampledReportsGetRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementUnsampledReportsGetResponse>;
    /**
     * analyticsManagementUnsampledReportsInsert - Create a new unsampled report.
    **/
    analyticsManagementUnsampledReportsInsert(req: operations.AnalyticsManagementUnsampledReportsInsertRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementUnsampledReportsInsertResponse>;
    /**
     * analyticsManagementUnsampledReportsList - Lists unsampled reports to which the user has access.
    **/
    analyticsManagementUnsampledReportsList(req: operations.AnalyticsManagementUnsampledReportsListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementUnsampledReportsListResponse>;
    /**
     * analyticsManagementUploadsDeleteUploadData - Delete data associated with a previous upload.
    **/
    analyticsManagementUploadsDeleteUploadData(req: operations.AnalyticsManagementUploadsDeleteUploadDataRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementUploadsDeleteUploadDataResponse>;
    /**
     * analyticsManagementUploadsGet - List uploads to which the user has access.
    **/
    analyticsManagementUploadsGet(req: operations.AnalyticsManagementUploadsGetRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementUploadsGetResponse>;
    /**
     * analyticsManagementUploadsList - List uploads to which the user has access.
    **/
    analyticsManagementUploadsList(req: operations.AnalyticsManagementUploadsListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementUploadsListResponse>;
    /**
     * analyticsManagementUploadsUploadData - Upload data for a custom data source.
    **/
    analyticsManagementUploadsUploadData(req: operations.AnalyticsManagementUploadsUploadDataRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementUploadsUploadDataResponse>;
    /**
     * analyticsManagementWebPropertyAdWordsLinksDelete - Deletes a web property-Google Ads link.
    **/
    analyticsManagementWebPropertyAdWordsLinksDelete(req: operations.AnalyticsManagementWebPropertyAdWordsLinksDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebPropertyAdWordsLinksDeleteResponse>;
    /**
     * analyticsManagementWebPropertyAdWordsLinksGet - Returns a web property-Google Ads link to which the user has access.
    **/
    analyticsManagementWebPropertyAdWordsLinksGet(req: operations.AnalyticsManagementWebPropertyAdWordsLinksGetRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebPropertyAdWordsLinksGetResponse>;
    /**
     * analyticsManagementWebPropertyAdWordsLinksInsert - Creates a webProperty-Google Ads link.
    **/
    analyticsManagementWebPropertyAdWordsLinksInsert(req: operations.AnalyticsManagementWebPropertyAdWordsLinksInsertRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebPropertyAdWordsLinksInsertResponse>;
    /**
     * analyticsManagementWebPropertyAdWordsLinksList - Lists webProperty-Google Ads links for a given web property.
    **/
    analyticsManagementWebPropertyAdWordsLinksList(req: operations.AnalyticsManagementWebPropertyAdWordsLinksListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebPropertyAdWordsLinksListResponse>;
    /**
     * analyticsManagementWebPropertyAdWordsLinksPatch - Updates an existing webProperty-Google Ads link. This method supports patch semantics.
    **/
    analyticsManagementWebPropertyAdWordsLinksPatch(req: operations.AnalyticsManagementWebPropertyAdWordsLinksPatchRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebPropertyAdWordsLinksPatchResponse>;
    /**
     * analyticsManagementWebPropertyAdWordsLinksUpdate - Updates an existing webProperty-Google Ads link.
    **/
    analyticsManagementWebPropertyAdWordsLinksUpdate(req: operations.AnalyticsManagementWebPropertyAdWordsLinksUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebPropertyAdWordsLinksUpdateResponse>;
    /**
     * analyticsManagementWebpropertiesGet - Gets a web property to which the user has access.
    **/
    analyticsManagementWebpropertiesGet(req: operations.AnalyticsManagementWebpropertiesGetRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebpropertiesGetResponse>;
    /**
     * analyticsManagementWebpropertiesInsert - Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile.
    **/
    analyticsManagementWebpropertiesInsert(req: operations.AnalyticsManagementWebpropertiesInsertRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebpropertiesInsertResponse>;
    /**
     * analyticsManagementWebpropertiesList - Lists web properties to which the user has access.
    **/
    analyticsManagementWebpropertiesList(req: operations.AnalyticsManagementWebpropertiesListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebpropertiesListResponse>;
    /**
     * analyticsManagementWebpropertiesPatch - Updates an existing web property. This method supports patch semantics.
    **/
    analyticsManagementWebpropertiesPatch(req: operations.AnalyticsManagementWebpropertiesPatchRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebpropertiesPatchResponse>;
    /**
     * analyticsManagementWebpropertiesUpdate - Updates an existing web property.
    **/
    analyticsManagementWebpropertiesUpdate(req: operations.AnalyticsManagementWebpropertiesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebpropertiesUpdateResponse>;
    /**
     * analyticsManagementWebpropertyUserLinksDelete - Removes a user from the given web property.
    **/
    analyticsManagementWebpropertyUserLinksDelete(req: operations.AnalyticsManagementWebpropertyUserLinksDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebpropertyUserLinksDeleteResponse>;
    /**
     * analyticsManagementWebpropertyUserLinksInsert - Adds a new user to the given web property.
    **/
    analyticsManagementWebpropertyUserLinksInsert(req: operations.AnalyticsManagementWebpropertyUserLinksInsertRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebpropertyUserLinksInsertResponse>;
    /**
     * analyticsManagementWebpropertyUserLinksList - Lists webProperty-user links for a given web property.
    **/
    analyticsManagementWebpropertyUserLinksList(req: operations.AnalyticsManagementWebpropertyUserLinksListRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebpropertyUserLinksListResponse>;
    /**
     * analyticsManagementWebpropertyUserLinksUpdate - Updates permissions for an existing user on the given web property.
    **/
    analyticsManagementWebpropertyUserLinksUpdate(req: operations.AnalyticsManagementWebpropertyUserLinksUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsManagementWebpropertyUserLinksUpdateResponse>;
}
