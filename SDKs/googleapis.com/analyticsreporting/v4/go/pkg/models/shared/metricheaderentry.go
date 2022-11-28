package shared

type MetricHeaderEntryTypeEnum string

const (
	MetricHeaderEntryTypeEnumMetricTypeUnspecified MetricHeaderEntryTypeEnum = "METRIC_TYPE_UNSPECIFIED"
	MetricHeaderEntryTypeEnumInteger               MetricHeaderEntryTypeEnum = "INTEGER"
	MetricHeaderEntryTypeEnumFloat                 MetricHeaderEntryTypeEnum = "FLOAT"
	MetricHeaderEntryTypeEnumCurrency              MetricHeaderEntryTypeEnum = "CURRENCY"
	MetricHeaderEntryTypeEnumPercent               MetricHeaderEntryTypeEnum = "PERCENT"
	MetricHeaderEntryTypeEnumTime                  MetricHeaderEntryTypeEnum = "TIME"
)

// MetricHeaderEntry
// Header for the metrics.
type MetricHeaderEntry struct {
	Name *string                    `json:"name,omitempty"`
	Type *MetricHeaderEntryTypeEnum `json:"type,omitempty"`
}
