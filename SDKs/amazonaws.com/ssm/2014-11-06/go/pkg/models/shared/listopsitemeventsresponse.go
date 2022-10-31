package shared

type ListOpsItemEventsResponse struct {
	NextToken *string               `json:"NextToken,omitempty"`
	Summaries []OpsItemEventSummary `json:"Summaries,omitempty"`
}
