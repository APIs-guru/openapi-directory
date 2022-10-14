package shared

type NetworkReportSpecDimensionFilterDimensionEnum string

const (
	NetworkReportSpecDimensionFilterDimensionEnumDimensionUnspecified NetworkReportSpecDimensionFilterDimensionEnum = "DIMENSION_UNSPECIFIED"
	NetworkReportSpecDimensionFilterDimensionEnumDate                 NetworkReportSpecDimensionFilterDimensionEnum = "DATE"
	NetworkReportSpecDimensionFilterDimensionEnumMonth                NetworkReportSpecDimensionFilterDimensionEnum = "MONTH"
	NetworkReportSpecDimensionFilterDimensionEnumWeek                 NetworkReportSpecDimensionFilterDimensionEnum = "WEEK"
	NetworkReportSpecDimensionFilterDimensionEnumAdUnit               NetworkReportSpecDimensionFilterDimensionEnum = "AD_UNIT"
	NetworkReportSpecDimensionFilterDimensionEnumApp                  NetworkReportSpecDimensionFilterDimensionEnum = "APP"
	NetworkReportSpecDimensionFilterDimensionEnumAdType               NetworkReportSpecDimensionFilterDimensionEnum = "AD_TYPE"
	NetworkReportSpecDimensionFilterDimensionEnumCountry              NetworkReportSpecDimensionFilterDimensionEnum = "COUNTRY"
	NetworkReportSpecDimensionFilterDimensionEnumFormat               NetworkReportSpecDimensionFilterDimensionEnum = "FORMAT"
	NetworkReportSpecDimensionFilterDimensionEnumPlatform             NetworkReportSpecDimensionFilterDimensionEnum = "PLATFORM"
	NetworkReportSpecDimensionFilterDimensionEnumMobileOsVersion      NetworkReportSpecDimensionFilterDimensionEnum = "MOBILE_OS_VERSION"
	NetworkReportSpecDimensionFilterDimensionEnumGmaSdkVersion        NetworkReportSpecDimensionFilterDimensionEnum = "GMA_SDK_VERSION"
	NetworkReportSpecDimensionFilterDimensionEnumAppVersionName       NetworkReportSpecDimensionFilterDimensionEnum = "APP_VERSION_NAME"
	NetworkReportSpecDimensionFilterDimensionEnumServingRestriction   NetworkReportSpecDimensionFilterDimensionEnum = "SERVING_RESTRICTION"
)

type NetworkReportSpecDimensionFilter struct {
	Dimension  *NetworkReportSpecDimensionFilterDimensionEnum `json:"dimension,omitempty"`
	MatchesAny *StringList                                    `json:"matchesAny,omitempty"`
}
