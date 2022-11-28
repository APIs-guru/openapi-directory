package shared

type GoogleAnalyticsAdminV1alphaAttributionSettingsAcquisitionConversionEventLookbackWindowEnum string

const (
	GoogleAnalyticsAdminV1alphaAttributionSettingsAcquisitionConversionEventLookbackWindowEnumAcquisitionConversionEventLookbackWindowUnspecified GoogleAnalyticsAdminV1alphaAttributionSettingsAcquisitionConversionEventLookbackWindowEnum = "ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaAttributionSettingsAcquisitionConversionEventLookbackWindowEnumAcquisitionConversionEventLookbackWindow7Days       GoogleAnalyticsAdminV1alphaAttributionSettingsAcquisitionConversionEventLookbackWindowEnum = "ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_7_DAYS"
	GoogleAnalyticsAdminV1alphaAttributionSettingsAcquisitionConversionEventLookbackWindowEnumAcquisitionConversionEventLookbackWindow30Days      GoogleAnalyticsAdminV1alphaAttributionSettingsAcquisitionConversionEventLookbackWindowEnum = "ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_30_DAYS"
)

type GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindowEnum string

const (
	GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindowEnumOtherConversionEventLookbackWindowUnspecified GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindowEnum = "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindowEnumOtherConversionEventLookbackWindow30Days      GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindowEnum = "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_30_DAYS"
	GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindowEnumOtherConversionEventLookbackWindow60Days      GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindowEnum = "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_60_DAYS"
	GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindowEnumOtherConversionEventLookbackWindow90Days      GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindowEnum = "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_90_DAYS"
)

type GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum string

const (
	GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnumReportingAttributionModelUnspecified GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum = "REPORTING_ATTRIBUTION_MODEL_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnumCrossChannelDataDriven               GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum = "CROSS_CHANNEL_DATA_DRIVEN"
	GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnumCrossChannelLastClick                GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum = "CROSS_CHANNEL_LAST_CLICK"
	GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnumCrossChannelFirstClick               GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum = "CROSS_CHANNEL_FIRST_CLICK"
	GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnumCrossChannelLinear                   GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum = "CROSS_CHANNEL_LINEAR"
	GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnumCrossChannelPositionBased            GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum = "CROSS_CHANNEL_POSITION_BASED"
	GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnumCrossChannelTimeDecay                GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum = "CROSS_CHANNEL_TIME_DECAY"
	GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnumAdsPreferredLastClick                GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum = "ADS_PREFERRED_LAST_CLICK"
)

// GoogleAnalyticsAdminV1alphaAttributionSettings
// The attribution settings used for a given property. This is a singleton resource.
type GoogleAnalyticsAdminV1alphaAttributionSettings struct {
	AcquisitionConversionEventLookbackWindow *GoogleAnalyticsAdminV1alphaAttributionSettingsAcquisitionConversionEventLookbackWindowEnum `json:"acquisitionConversionEventLookbackWindow,omitempty"`
	Name                                     *string                                                                                     `json:"name,omitempty"`
	OtherConversionEventLookbackWindow       *GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindowEnum       `json:"otherConversionEventLookbackWindow,omitempty"`
	ReportingAttributionModel                *GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum                `json:"reportingAttributionModel,omitempty"`
}
