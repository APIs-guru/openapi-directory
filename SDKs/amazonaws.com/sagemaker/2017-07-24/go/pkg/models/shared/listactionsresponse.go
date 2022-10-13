package shared

type ListActionsResponse struct {
	ActionSummaries []ActionSummary `json:"ActionSummaries"`
	NextToken       *string         `json:"NextToken"`
}
