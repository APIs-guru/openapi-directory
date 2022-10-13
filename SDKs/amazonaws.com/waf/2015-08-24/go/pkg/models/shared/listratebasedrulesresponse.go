package shared

type ListRateBasedRulesResponse struct {
	NextMarker *string       `json:"NextMarker"`
	Rules      []RuleSummary `json:"Rules"`
}
