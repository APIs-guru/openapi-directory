package shared

type RunRealtimeReportRequestMetricAggregationsEnum string

const (
	RunRealtimeReportRequestMetricAggregationsEnumMetricAggregationUnspecified RunRealtimeReportRequestMetricAggregationsEnum = "METRIC_AGGREGATION_UNSPECIFIED"
	RunRealtimeReportRequestMetricAggregationsEnumTotal                        RunRealtimeReportRequestMetricAggregationsEnum = "TOTAL"
	RunRealtimeReportRequestMetricAggregationsEnumMinimum                      RunRealtimeReportRequestMetricAggregationsEnum = "MINIMUM"
	RunRealtimeReportRequestMetricAggregationsEnumMaximum                      RunRealtimeReportRequestMetricAggregationsEnum = "MAXIMUM"
	RunRealtimeReportRequestMetricAggregationsEnumCount                        RunRealtimeReportRequestMetricAggregationsEnum = "COUNT"
)

type RunRealtimeReportRequest struct {
	DimensionFilter     *FilterExpression                                `json:"dimensionFilter"`
	Dimensions          []Dimension                                      `json:"dimensions"`
	Limit               *string                                          `json:"limit"`
	MetricAggregations  []RunRealtimeReportRequestMetricAggregationsEnum `json:"metricAggregations"`
	MetricFilter        *FilterExpression                                `json:"metricFilter"`
	Metrics             []Metric                                         `json:"metrics"`
	MinuteRanges        []MinuteRange                                    `json:"minuteRanges"`
	OrderBys            []OrderBy                                        `json:"orderBys"`
	ReturnPropertyQuota *bool                                            `json:"returnPropertyQuota"`
}
