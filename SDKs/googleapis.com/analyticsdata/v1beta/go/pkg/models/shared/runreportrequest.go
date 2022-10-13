package shared

type RunReportRequestMetricAggregationsEnum string

const (
	RunReportRequestMetricAggregationsEnumMetricAggregationUnspecified RunReportRequestMetricAggregationsEnum = "METRIC_AGGREGATION_UNSPECIFIED"
	RunReportRequestMetricAggregationsEnumTotal                        RunReportRequestMetricAggregationsEnum = "TOTAL"
	RunReportRequestMetricAggregationsEnumMinimum                      RunReportRequestMetricAggregationsEnum = "MINIMUM"
	RunReportRequestMetricAggregationsEnumMaximum                      RunReportRequestMetricAggregationsEnum = "MAXIMUM"
	RunReportRequestMetricAggregationsEnumCount                        RunReportRequestMetricAggregationsEnum = "COUNT"
)

type RunReportRequest struct {
	CohortSpec          *CohortSpec                              `json:"cohortSpec"`
	CurrencyCode        *string                                  `json:"currencyCode"`
	DateRanges          []DateRange                              `json:"dateRanges"`
	DimensionFilter     *FilterExpression                        `json:"dimensionFilter"`
	Dimensions          []Dimension                              `json:"dimensions"`
	KeepEmptyRows       *bool                                    `json:"keepEmptyRows"`
	Limit               *string                                  `json:"limit"`
	MetricAggregations  []RunReportRequestMetricAggregationsEnum `json:"metricAggregations"`
	MetricFilter        *FilterExpression                        `json:"metricFilter"`
	Metrics             []Metric                                 `json:"metrics"`
	Offset              *string                                  `json:"offset"`
	OrderBys            []OrderBy                                `json:"orderBys"`
	Property            *string                                  `json:"property"`
	ReturnPropertyQuota *bool                                    `json:"returnPropertyQuota"`
}
