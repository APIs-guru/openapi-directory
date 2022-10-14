package shared

type PivotMetricAggregationsEnum string

const (
	PivotMetricAggregationsEnumMetricAggregationUnspecified PivotMetricAggregationsEnum = "METRIC_AGGREGATION_UNSPECIFIED"
	PivotMetricAggregationsEnumTotal                        PivotMetricAggregationsEnum = "TOTAL"
	PivotMetricAggregationsEnumMinimum                      PivotMetricAggregationsEnum = "MINIMUM"
	PivotMetricAggregationsEnumMaximum                      PivotMetricAggregationsEnum = "MAXIMUM"
	PivotMetricAggregationsEnumCount                        PivotMetricAggregationsEnum = "COUNT"
)

type Pivot struct {
	FieldNames         []string                      `json:"fieldNames,omitempty"`
	Limit              *string                       `json:"limit,omitempty"`
	MetricAggregations []PivotMetricAggregationsEnum `json:"metricAggregations,omitempty"`
	Offset             *string                       `json:"offset,omitempty"`
	OrderBys           []OrderBy                     `json:"orderBys,omitempty"`
}
