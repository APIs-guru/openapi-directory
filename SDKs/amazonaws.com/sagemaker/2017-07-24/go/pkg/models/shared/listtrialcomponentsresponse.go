package shared

type ListTrialComponentsResponse struct {
	NextToken               *string                 `json:"NextToken,omitempty"`
	TrialComponentSummaries []TrialComponentSummary `json:"TrialComponentSummaries,omitempty"`
}
