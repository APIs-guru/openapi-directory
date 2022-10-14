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
