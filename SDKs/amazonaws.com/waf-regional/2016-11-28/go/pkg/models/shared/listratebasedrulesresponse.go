package shared

type ListRateBasedRulesResponse struct {
	NextMarker *string       `json:"NextMarker,omitempty"`
	Rules      []RuleSummary `json:"Rules,omitempty"`
}
