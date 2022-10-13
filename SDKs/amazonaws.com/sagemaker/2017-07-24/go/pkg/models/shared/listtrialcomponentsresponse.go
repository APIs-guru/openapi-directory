package shared

type ListTrialComponentsResponse struct {
	NextToken               *string                 `json:"NextToken"`
	TrialComponentSummaries []TrialComponentSummary `json:"TrialComponentSummaries"`
}
