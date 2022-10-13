package shared

type ListAnomalyGroupSummariesResponse struct {
	AnomalyGroupStatistics  *AnomalyGroupStatistics `json:"AnomalyGroupStatistics"`
	AnomalyGroupSummaryList []AnomalyGroupSummary   `json:"AnomalyGroupSummaryList"`
	NextToken               *string                 `json:"NextToken"`
}
