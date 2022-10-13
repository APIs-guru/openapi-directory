package shared

type ListMetricSetsResponse struct {
	MetricSetSummaryList []MetricSetSummary `json:"MetricSetSummaryList"`
	NextToken            *string            `json:"NextToken"`
}
