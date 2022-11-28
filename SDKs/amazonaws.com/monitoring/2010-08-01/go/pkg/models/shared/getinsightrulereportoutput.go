package shared

type GetInsightRuleReportOutput struct {
	AggregateValue         *float64
	AggregationStatistic   *string
	ApproximateUniqueCount *int64
	Contributors           []InsightRuleContributor
	KeyLabels              []string
	MetricDatapoints       []InsightRuleMetricDatapoint
}
