package shared

type MetricFormattingTypeEnum string

const (
	MetricFormattingTypeEnumMetricTypeUnspecified MetricFormattingTypeEnum = "METRIC_TYPE_UNSPECIFIED"
	MetricFormattingTypeEnumInteger               MetricFormattingTypeEnum = "INTEGER"
	MetricFormattingTypeEnumFloat                 MetricFormattingTypeEnum = "FLOAT"
	MetricFormattingTypeEnumCurrency              MetricFormattingTypeEnum = "CURRENCY"
	MetricFormattingTypeEnumPercent               MetricFormattingTypeEnum = "PERCENT"
	MetricFormattingTypeEnumTime                  MetricFormattingTypeEnum = "TIME"
)

// Metric
// [Metrics](https://support.google.com/analytics/answer/1033861) are the quantitative measurements. For example, the metric `ga:users` indicates the total number of users for the requested time period.
type Metric struct {
	Alias          *string                   `json:"alias,omitempty"`
	Expression     *string                   `json:"expression,omitempty"`
	FormattingType *MetricFormattingTypeEnum `json:"formattingType,omitempty"`
}
