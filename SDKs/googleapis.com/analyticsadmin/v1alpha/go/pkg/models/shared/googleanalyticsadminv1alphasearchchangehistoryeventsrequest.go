package shared

type GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnum string

const (
	GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnumActionTypeUnspecified GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnum = "ACTION_TYPE_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnumCreated               GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnum = "CREATED"
	GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnumUpdated               GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnum = "UPDATED"
	GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnumDeleted               GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnum = "DELETED"
)

type GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum string

const (
	GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnumChangeHistoryResourceTypeUnspecified  GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum = "CHANGE_HISTORY_RESOURCE_TYPE_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnumAccount                               GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum = "ACCOUNT"
	GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnumProperty                              GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum = "PROPERTY"
	GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnumFirebaseLink                          GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum = "FIREBASE_LINK"
	GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnumGoogleAdsLink                         GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum = "GOOGLE_ADS_LINK"
	GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnumGoogleSignalsSettings                 GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum = "GOOGLE_SIGNALS_SETTINGS"
	GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnumConversionEvent                       GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum = "CONVERSION_EVENT"
	GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnumMeasurementProtocolSecret             GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum = "MEASUREMENT_PROTOCOL_SECRET"
	GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnumCustomDimension                       GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum = "CUSTOM_DIMENSION"
	GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnumCustomMetric                          GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum = "CUSTOM_METRIC"
	GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnumDataRetentionSettings                 GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum = "DATA_RETENTION_SETTINGS"
	GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnumDisplayVideo360AdvertiserLink         GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum = "DISPLAY_VIDEO_360_ADVERTISER_LINK"
	GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnumDisplayVideo360AdvertiserLinkProposal GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum = "DISPLAY_VIDEO_360_ADVERTISER_LINK_PROPOSAL"
	GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnumSearchAds360Link                      GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum = "SEARCH_ADS_360_LINK"
	GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnumDataStream                            GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum = "DATA_STREAM"
	GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnumAttributionSettings                   GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum = "ATTRIBUTION_SETTINGS"
	GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnumExpandedDataSet                       GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum = "EXPANDED_DATA_SET"
)

type GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest struct {
	Action             []GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestActionEnum       `json:"action"`
	ActorEmail         []string                                                                      `json:"actorEmail"`
	EarliestChangeTime *string                                                                       `json:"earliestChangeTime"`
	LatestChangeTime   *string                                                                       `json:"latestChangeTime"`
	PageSize           *int32                                                                        `json:"pageSize"`
	PageToken          *string                                                                       `json:"pageToken"`
	Property           *string                                                                       `json:"property"`
	ResourceType       []GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequestResourceTypeEnum `json:"resourceType"`
}
