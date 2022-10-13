package shared

type ListTrialsResponse struct {
	NextToken      *string        `json:"NextToken"`
	TrialSummaries []TrialSummary `json:"TrialSummaries"`
}
