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

type Metric struct {
	Alias          *string                   `json:"alias,omitempty"`
	Expression     *string                   `json:"expression,omitempty"`
	FormattingType *MetricFormattingTypeEnum `json:"formattingType,omitempty"`
}
