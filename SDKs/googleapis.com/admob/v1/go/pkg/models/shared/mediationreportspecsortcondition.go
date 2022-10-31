package shared

type MediationReportSpecSortConditionDimensionEnum string

const (
	MediationReportSpecSortConditionDimensionEnumDimensionUnspecified MediationReportSpecSortConditionDimensionEnum = "DIMENSION_UNSPECIFIED"
	MediationReportSpecSortConditionDimensionEnumDate                 MediationReportSpecSortConditionDimensionEnum = "DATE"
	MediationReportSpecSortConditionDimensionEnumMonth                MediationReportSpecSortConditionDimensionEnum = "MONTH"
	MediationReportSpecSortConditionDimensionEnumWeek                 MediationReportSpecSortConditionDimensionEnum = "WEEK"
	MediationReportSpecSortConditionDimensionEnumAdSource             MediationReportSpecSortConditionDimensionEnum = "AD_SOURCE"
	MediationReportSpecSortConditionDimensionEnumAdSourceInstance     MediationReportSpecSortConditionDimensionEnum = "AD_SOURCE_INSTANCE"
	MediationReportSpecSortConditionDimensionEnumAdUnit               MediationReportSpecSortConditionDimensionEnum = "AD_UNIT"
	MediationReportSpecSortConditionDimensionEnumApp                  MediationReportSpecSortConditionDimensionEnum = "APP"
	MediationReportSpecSortConditionDimensionEnumMediationGroup       MediationReportSpecSortConditionDimensionEnum = "MEDIATION_GROUP"
	MediationReportSpecSortConditionDimensionEnumCountry              MediationReportSpecSortConditionDimensionEnum = "COUNTRY"
	MediationReportSpecSortConditionDimensionEnumFormat               MediationReportSpecSortConditionDimensionEnum = "FORMAT"
	MediationReportSpecSortConditionDimensionEnumPlatform             MediationReportSpecSortConditionDimensionEnum = "PLATFORM"
	MediationReportSpecSortConditionDimensionEnumMobileOsVersion      MediationReportSpecSortConditionDimensionEnum = "MOBILE_OS_VERSION"
	MediationReportSpecSortConditionDimensionEnumGmaSdkVersion        MediationReportSpecSortConditionDimensionEnum = "GMA_SDK_VERSION"
	MediationReportSpecSortConditionDimensionEnumAppVersionName       MediationReportSpecSortConditionDimensionEnum = "APP_VERSION_NAME"
	MediationReportSpecSortConditionDimensionEnumServingRestriction   MediationReportSpecSortConditionDimensionEnum = "SERVING_RESTRICTION"
)

type MediationReportSpecSortConditionMetricEnum string

const (
	MediationReportSpecSortConditionMetricEnumMetricUnspecified MediationReportSpecSortConditionMetricEnum = "METRIC_UNSPECIFIED"
	MediationReportSpecSortConditionMetricEnumAdRequests        MediationReportSpecSortConditionMetricEnum = "AD_REQUESTS"
	MediationReportSpecSortConditionMetricEnumClicks            MediationReportSpecSortConditionMetricEnum = "CLICKS"
	MediationReportSpecSortConditionMetricEnumEstimatedEarnings MediationReportSpecSortConditionMetricEnum = "ESTIMATED_EARNINGS"
	MediationReportSpecSortConditionMetricEnumImpressions       MediationReportSpecSortConditionMetricEnum = "IMPRESSIONS"
	MediationReportSpecSortConditionMetricEnumImpressionCtr     MediationReportSpecSortConditionMetricEnum = "IMPRESSION_CTR"
	MediationReportSpecSortConditionMetricEnumMatchedRequests   MediationReportSpecSortConditionMetricEnum = "MATCHED_REQUESTS"
	MediationReportSpecSortConditionMetricEnumMatchRate         MediationReportSpecSortConditionMetricEnum = "MATCH_RATE"
	MediationReportSpecSortConditionMetricEnumObservedEcpm      MediationReportSpecSortConditionMetricEnum = "OBSERVED_ECPM"
)

type MediationReportSpecSortConditionOrderEnum string

const (
	MediationReportSpecSortConditionOrderEnumSortOrderUnspecified MediationReportSpecSortConditionOrderEnum = "SORT_ORDER_UNSPECIFIED"
	MediationReportSpecSortConditionOrderEnumAscending            MediationReportSpecSortConditionOrderEnum = "ASCENDING"
	MediationReportSpecSortConditionOrderEnumDescending           MediationReportSpecSortConditionOrderEnum = "DESCENDING"
)

type MediationReportSpecSortCondition struct {
	Dimension *MediationReportSpecSortConditionDimensionEnum `json:"dimension,omitempty"`
	Metric    *MediationReportSpecSortConditionMetricEnum    `json:"metric,omitempty"`
	Order     *MediationReportSpecSortConditionOrderEnum     `json:"order,omitempty"`
}
