package shared

type ListRulesResponse struct {
	NextMarker *string       `json:"NextMarker"`
	Rules      []RuleSummary `json:"Rules"`
}
