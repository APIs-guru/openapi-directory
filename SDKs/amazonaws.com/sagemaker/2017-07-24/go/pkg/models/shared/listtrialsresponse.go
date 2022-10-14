package shared

type ListTrialsResponse struct {
	NextToken      *string        `json:"NextToken,omitempty"`
	TrialSummaries []TrialSummary `json:"TrialSummaries,omitempty"`
}
