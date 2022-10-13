package shared

type GetInsightEventsResult struct {
	InsightEvents []InsightEvent `json:"InsightEvents"`
	NextToken     *string        `json:"NextToken"`
}
