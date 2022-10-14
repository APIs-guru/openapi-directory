package shared

type ListAttacksResponse struct {
	AttackSummaries []AttackSummary `json:"AttackSummaries,omitempty"`
	NextToken       *string         `json:"NextToken,omitempty"`
}
