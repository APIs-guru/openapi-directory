package shared

type ListAttacksResponse struct {
	AttackSummaries []AttackSummary `json:"AttackSummaries"`
	NextToken       *string         `json:"NextToken"`
}
