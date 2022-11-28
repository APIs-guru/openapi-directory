package shared

type RunReportRequestMetricAggregationsEnum string

const (
	RunReportRequestMetricAggregationsEnumMetricAggregationUnspecified RunReportRequestMetricAggregationsEnum = "METRIC_AGGREGATION_UNSPECIFIED"
	RunReportRequestMetricAggregationsEnumTotal                        RunReportRequestMetricAggregationsEnum = "TOTAL"
	RunReportRequestMetricAggregationsEnumMinimum                      RunReportRequestMetricAggregationsEnum = "MINIMUM"
	RunReportRequestMetricAggregationsEnumMaximum                      RunReportRequestMetricAggregationsEnum = "MAXIMUM"
	RunReportRequestMetricAggregationsEnumCount                        RunReportRequestMetricAggregationsEnum = "COUNT"
)

// RunReportRequest
// The request to generate a report.
type RunReportRequest struct {
	CohortSpec          *CohortSpec                              `json:"cohortSpec,omitempty"`
	CurrencyCode        *string                                  `json:"currencyCode,omitempty"`
	DateRanges          []DateRange                              `json:"dateRanges,omitempty"`
	DimensionFilter     *FilterExpression                        `json:"dimensionFilter,omitempty"`
	Dimensions          []Dimension                              `json:"dimensions,omitempty"`
	KeepEmptyRows       *bool                                    `json:"keepEmptyRows,omitempty"`
	Limit               *string                                  `json:"limit,omitempty"`
	MetricAggregations  []RunReportRequestMetricAggregationsEnum `json:"metricAggregations,omitempty"`
	MetricFilter        *FilterExpression                        `json:"metricFilter,omitempty"`
	Metrics             []Metric                                 `json:"metrics,omitempty"`
	Offset              *string                                  `json:"offset,omitempty"`
	OrderBys            []OrderBy                                `json:"orderBys,omitempty"`
	Property            *string                                  `json:"property,omitempty"`
	ReturnPropertyQuota *bool                                    `json:"returnPropertyQuota,omitempty"`
}
