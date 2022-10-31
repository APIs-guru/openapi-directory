package shared




type RunRealtimeReportRequestMetricAggregationsEnum string

const (
    RunRealtimeReportRequestMetricAggregationsEnumMetricAggregationUnspecified RunRealtimeReportRequestMetricAggregationsEnum = "METRIC_AGGREGATION_UNSPECIFIED"
RunRealtimeReportRequestMetricAggregationsEnumTotal RunRealtimeReportRequestMetricAggregationsEnum = "TOTAL"
RunRealtimeReportRequestMetricAggregationsEnumMinimum RunRealtimeReportRequestMetricAggregationsEnum = "MINIMUM"
RunRealtimeReportRequestMetricAggregationsEnumMaximum RunRealtimeReportRequestMetricAggregationsEnum = "MAXIMUM"
RunRealtimeReportRequestMetricAggregationsEnumCount RunRealtimeReportRequestMetricAggregationsEnum = "COUNT"
)


type RunRealtimeReportRequest struct {
    DimensionFilter *FilterExpression `json:"dimensionFilter,omitempty"`
    Dimensions []Dimension `json:"dimensions,omitempty"`
    Limit *string `json:"limit,omitempty"`
    MetricAggregations []RunRealtimeReportRequestMetricAggregationsEnum `json:"metricAggregations,omitempty"`
    MetricFilter *FilterExpression `json:"metricFilter,omitempty"`
    Metrics []Metric `json:"metrics,omitempty"`
    MinuteRanges []MinuteRange `json:"minuteRanges,omitempty"`
    OrderBys []OrderBy `json:"orderBys,omitempty"`
    ReturnPropertyQuota *bool `json:"returnPropertyQuota,omitempty"`
    
}

