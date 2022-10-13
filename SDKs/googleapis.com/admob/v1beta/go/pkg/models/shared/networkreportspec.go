package shared

type NetworkReportSpecDimensionsEnum string

const (
	NetworkReportSpecDimensionsEnumDimensionUnspecified NetworkReportSpecDimensionsEnum = "DIMENSION_UNSPECIFIED"
	NetworkReportSpecDimensionsEnumDate                 NetworkReportSpecDimensionsEnum = "DATE"
	NetworkReportSpecDimensionsEnumMonth                NetworkReportSpecDimensionsEnum = "MONTH"
	NetworkReportSpecDimensionsEnumWeek                 NetworkReportSpecDimensionsEnum = "WEEK"
	NetworkReportSpecDimensionsEnumAdUnit               NetworkReportSpecDimensionsEnum = "AD_UNIT"
	NetworkReportSpecDimensionsEnumApp                  NetworkReportSpecDimensionsEnum = "APP"
	NetworkReportSpecDimensionsEnumAdType               NetworkReportSpecDimensionsEnum = "AD_TYPE"
	NetworkReportSpecDimensionsEnumCountry              NetworkReportSpecDimensionsEnum = "COUNTRY"
	NetworkReportSpecDimensionsEnumFormat               NetworkReportSpecDimensionsEnum = "FORMAT"
	NetworkReportSpecDimensionsEnumPlatform             NetworkReportSpecDimensionsEnum = "PLATFORM"
	NetworkReportSpecDimensionsEnumMobileOsVersion      NetworkReportSpecDimensionsEnum = "MOBILE_OS_VERSION"
	NetworkReportSpecDimensionsEnumGmaSdkVersion        NetworkReportSpecDimensionsEnum = "GMA_SDK_VERSION"
	NetworkReportSpecDimensionsEnumAppVersionName       NetworkReportSpecDimensionsEnum = "APP_VERSION_NAME"
	NetworkReportSpecDimensionsEnumServingRestriction   NetworkReportSpecDimensionsEnum = "SERVING_RESTRICTION"
)

type NetworkReportSpecMetricsEnum string

const (
	NetworkReportSpecMetricsEnumMetricUnspecified NetworkReportSpecMetricsEnum = "METRIC_UNSPECIFIED"
	NetworkReportSpecMetricsEnumAdRequests        NetworkReportSpecMetricsEnum = "AD_REQUESTS"
	NetworkReportSpecMetricsEnumClicks            NetworkReportSpecMetricsEnum = "CLICKS"
	NetworkReportSpecMetricsEnumEstimatedEarnings NetworkReportSpecMetricsEnum = "ESTIMATED_EARNINGS"
	NetworkReportSpecMetricsEnumImpressions       NetworkReportSpecMetricsEnum = "IMPRESSIONS"
	NetworkReportSpecMetricsEnumImpressionCtr     NetworkReportSpecMetricsEnum = "IMPRESSION_CTR"
	NetworkReportSpecMetricsEnumImpressionRpm     NetworkReportSpecMetricsEnum = "IMPRESSION_RPM"
	NetworkReportSpecMetricsEnumMatchedRequests   NetworkReportSpecMetricsEnum = "MATCHED_REQUESTS"
	NetworkReportSpecMetricsEnumMatchRate         NetworkReportSpecMetricsEnum = "MATCH_RATE"
	NetworkReportSpecMetricsEnumShowRate          NetworkReportSpecMetricsEnum = "SHOW_RATE"
)

type NetworkReportSpec struct {
	DateRange            *DateRange                         `json:"dateRange"`
	DimensionFilters     []NetworkReportSpecDimensionFilter `json:"dimensionFilters"`
	Dimensions           []NetworkReportSpecDimensionsEnum  `json:"dimensions"`
	LocalizationSettings *LocalizationSettings              `json:"localizationSettings"`
	MaxReportRows        *int32                             `json:"maxReportRows"`
	Metrics              []NetworkReportSpecMetricsEnum     `json:"metrics"`
	SortConditions       []NetworkReportSpecSortCondition   `json:"sortConditions"`
	TimeZone             *string                            `json:"timeZone"`
}
