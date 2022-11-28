package shared

type MediationReportSpecDimensionsEnum string

const (
	MediationReportSpecDimensionsEnumDimensionUnspecified MediationReportSpecDimensionsEnum = "DIMENSION_UNSPECIFIED"
	MediationReportSpecDimensionsEnumDate                 MediationReportSpecDimensionsEnum = "DATE"
	MediationReportSpecDimensionsEnumMonth                MediationReportSpecDimensionsEnum = "MONTH"
	MediationReportSpecDimensionsEnumWeek                 MediationReportSpecDimensionsEnum = "WEEK"
	MediationReportSpecDimensionsEnumAdSource             MediationReportSpecDimensionsEnum = "AD_SOURCE"
	MediationReportSpecDimensionsEnumAdSourceInstance     MediationReportSpecDimensionsEnum = "AD_SOURCE_INSTANCE"
	MediationReportSpecDimensionsEnumAdUnit               MediationReportSpecDimensionsEnum = "AD_UNIT"
	MediationReportSpecDimensionsEnumApp                  MediationReportSpecDimensionsEnum = "APP"
	MediationReportSpecDimensionsEnumMediationGroup       MediationReportSpecDimensionsEnum = "MEDIATION_GROUP"
	MediationReportSpecDimensionsEnumCountry              MediationReportSpecDimensionsEnum = "COUNTRY"
	MediationReportSpecDimensionsEnumFormat               MediationReportSpecDimensionsEnum = "FORMAT"
	MediationReportSpecDimensionsEnumPlatform             MediationReportSpecDimensionsEnum = "PLATFORM"
	MediationReportSpecDimensionsEnumMobileOsVersion      MediationReportSpecDimensionsEnum = "MOBILE_OS_VERSION"
	MediationReportSpecDimensionsEnumGmaSdkVersion        MediationReportSpecDimensionsEnum = "GMA_SDK_VERSION"
	MediationReportSpecDimensionsEnumAppVersionName       MediationReportSpecDimensionsEnum = "APP_VERSION_NAME"
	MediationReportSpecDimensionsEnumServingRestriction   MediationReportSpecDimensionsEnum = "SERVING_RESTRICTION"
)

type MediationReportSpecMetricsEnum string

const (
	MediationReportSpecMetricsEnumMetricUnspecified MediationReportSpecMetricsEnum = "METRIC_UNSPECIFIED"
	MediationReportSpecMetricsEnumAdRequests        MediationReportSpecMetricsEnum = "AD_REQUESTS"
	MediationReportSpecMetricsEnumClicks            MediationReportSpecMetricsEnum = "CLICKS"
	MediationReportSpecMetricsEnumEstimatedEarnings MediationReportSpecMetricsEnum = "ESTIMATED_EARNINGS"
	MediationReportSpecMetricsEnumImpressions       MediationReportSpecMetricsEnum = "IMPRESSIONS"
	MediationReportSpecMetricsEnumImpressionCtr     MediationReportSpecMetricsEnum = "IMPRESSION_CTR"
	MediationReportSpecMetricsEnumMatchedRequests   MediationReportSpecMetricsEnum = "MATCHED_REQUESTS"
	MediationReportSpecMetricsEnumMatchRate         MediationReportSpecMetricsEnum = "MATCH_RATE"
	MediationReportSpecMetricsEnumObservedEcpm      MediationReportSpecMetricsEnum = "OBSERVED_ECPM"
)

// MediationReportSpec
// The specification for generating an AdMob Mediation report. For example, the specification to get observed ECPM sliced by ad source and app for the 'US' and 'CN' countries can look like the following example: { "date_range": { "start_date": {"year": 2021, "month": 9, "day": 1}, "end_date": {"year": 2021, "month": 9, "day": 30} }, "dimensions": ["AD_SOURCE", "APP", "COUNTRY"], "metrics": ["OBSERVED_ECPM"], "dimension_filters": [ { "dimension": "COUNTRY", "matches_any": {"values": [{"value": "US", "value": "CN"}]} } ], "sort_conditions": [ {"dimension":"APP", order: "ASCENDING"} ], "localization_settings": { "currency_code": "USD", "language_code": "en-US" } } For a better understanding, you can treat the preceding specification like the following pseudo SQL: SELECT AD_SOURCE, APP, COUNTRY, OBSERVED_ECPM FROM MEDIATION_REPORT WHERE DATE >= '2021-09-01' AND DATE <= '2021-09-30' AND COUNTRY IN ('US', 'CN') GROUP BY AD_SOURCE, APP, COUNTRY ORDER BY APP ASC;
type MediationReportSpec struct {
	DateRange            *DateRange                           `json:"dateRange,omitempty"`
	DimensionFilters     []MediationReportSpecDimensionFilter `json:"dimensionFilters,omitempty"`
	Dimensions           []MediationReportSpecDimensionsEnum  `json:"dimensions,omitempty"`
	LocalizationSettings *LocalizationSettings                `json:"localizationSettings,omitempty"`
	MaxReportRows        *int32                               `json:"maxReportRows,omitempty"`
	Metrics              []MediationReportSpecMetricsEnum     `json:"metrics,omitempty"`
	SortConditions       []MediationReportSpecSortCondition   `json:"sortConditions,omitempty"`
	TimeZone             *string                              `json:"timeZone,omitempty"`
}
