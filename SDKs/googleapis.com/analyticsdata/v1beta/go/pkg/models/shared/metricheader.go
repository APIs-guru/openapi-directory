package shared

type MetricHeaderTypeEnum string

const (
	MetricHeaderTypeEnumMetricTypeUnspecified MetricHeaderTypeEnum = "METRIC_TYPE_UNSPECIFIED"
	MetricHeaderTypeEnumTypeInteger           MetricHeaderTypeEnum = "TYPE_INTEGER"
	MetricHeaderTypeEnumTypeFloat             MetricHeaderTypeEnum = "TYPE_FLOAT"
	MetricHeaderTypeEnumTypeSeconds           MetricHeaderTypeEnum = "TYPE_SECONDS"
	MetricHeaderTypeEnumTypeMilliseconds      MetricHeaderTypeEnum = "TYPE_MILLISECONDS"
	MetricHeaderTypeEnumTypeMinutes           MetricHeaderTypeEnum = "TYPE_MINUTES"
	MetricHeaderTypeEnumTypeHours             MetricHeaderTypeEnum = "TYPE_HOURS"
	MetricHeaderTypeEnumTypeStandard          MetricHeaderTypeEnum = "TYPE_STANDARD"
	MetricHeaderTypeEnumTypeCurrency          MetricHeaderTypeEnum = "TYPE_CURRENCY"
	MetricHeaderTypeEnumTypeFeet              MetricHeaderTypeEnum = "TYPE_FEET"
	MetricHeaderTypeEnumTypeMiles             MetricHeaderTypeEnum = "TYPE_MILES"
	MetricHeaderTypeEnumTypeMeters            MetricHeaderTypeEnum = "TYPE_METERS"
	MetricHeaderTypeEnumTypeKilometers        MetricHeaderTypeEnum = "TYPE_KILOMETERS"
)

type MetricHeader struct {
	Name *string               `json:"name,omitempty"`
	Type *MetricHeaderTypeEnum `json:"type,omitempty"`
}
