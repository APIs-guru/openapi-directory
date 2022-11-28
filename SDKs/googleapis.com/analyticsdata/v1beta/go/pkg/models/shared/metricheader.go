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

// MetricHeader
// Describes a metric column in the report. Visible metrics requested in a report produce column entries within rows and MetricHeaders. However, metrics used exclusively within filters or expressions do not produce columns in a report; correspondingly, those metrics do not produce headers.
type MetricHeader struct {
	Name *string               `json:"name,omitempty"`
	Type *MetricHeaderTypeEnum `json:"type,omitempty"`
}
