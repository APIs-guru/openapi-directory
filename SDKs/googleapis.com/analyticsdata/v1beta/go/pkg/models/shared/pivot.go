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
	FieldNames         []string                      `json:"fieldNames"`
	Limit              *string                       `json:"limit"`
	MetricAggregations []PivotMetricAggregationsEnum `json:"metricAggregations"`
	Offset             *string                       `json:"offset"`
	OrderBys           []OrderBy                     `json:"orderBys"`
}
