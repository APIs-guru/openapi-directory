package shared

type ListAnomalyGroupSummariesResponse struct {
	AnomalyGroupStatistics  *AnomalyGroupStatistics `json:"AnomalyGroupStatistics,omitempty"`
	AnomalyGroupSummaryList []AnomalyGroupSummary   `json:"AnomalyGroupSummaryList,omitempty"`
	NextToken               *string                 `json:"NextToken,omitempty"`
}
