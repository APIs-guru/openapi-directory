package shared

type GetInsightSummariesResult struct {
	InsightSummaries []InsightSummary `json:"InsightSummaries"`
	NextToken        *string          `json:"NextToken"`
}
