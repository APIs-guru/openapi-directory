package shared

type GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum string

const (
	GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnumMeasurementUnitUnspecified GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum = "MEASUREMENT_UNIT_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnumStandard                   GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum = "STANDARD"
	GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnumCurrency                   GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum = "CURRENCY"
	GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnumFeet                       GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum = "FEET"
	GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnumMeters                     GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum = "METERS"
	GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnumKilometers                 GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum = "KILOMETERS"
	GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnumMiles                      GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum = "MILES"
	GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnumMilliseconds               GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum = "MILLISECONDS"
	GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnumSeconds                    GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum = "SECONDS"
	GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnumMinutes                    GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum = "MINUTES"
	GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnumHours                      GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum = "HOURS"
)

type GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum string

const (
	GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnumRestrictedMetricTypeUnspecified GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum = "RESTRICTED_METRIC_TYPE_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnumCostData                        GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum = "COST_DATA"
	GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnumRevenueData                     GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum = "REVENUE_DATA"
)

type GoogleAnalyticsAdminV1alphaCustomMetricScopeEnum string

const (
	GoogleAnalyticsAdminV1alphaCustomMetricScopeEnumMetricScopeUnspecified GoogleAnalyticsAdminV1alphaCustomMetricScopeEnum = "METRIC_SCOPE_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaCustomMetricScopeEnumEvent                  GoogleAnalyticsAdminV1alphaCustomMetricScopeEnum = "EVENT"
)

type GoogleAnalyticsAdminV1alphaCustomMetric struct {
	Description          *string                                                           `json:"description"`
	DisplayName          *string                                                           `json:"displayName"`
	MeasurementUnit      *GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum       `json:"measurementUnit"`
	Name                 *string                                                           `json:"name"`
	ParameterName        *string                                                           `json:"parameterName"`
	RestrictedMetricType []GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum `json:"restrictedMetricType"`
	Scope                *GoogleAnalyticsAdminV1alphaCustomMetricScopeEnum                 `json:"scope"`
}
