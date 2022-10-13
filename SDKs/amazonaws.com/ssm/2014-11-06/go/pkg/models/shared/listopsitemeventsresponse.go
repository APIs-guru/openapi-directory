package shared

type ListOpsItemEventsResponse struct {
	NextToken *string               `json:"NextToken"`
	Summaries []OpsItemEventSummary `json:"Summaries"`
}
