package shared



type ListRulesResponse struct {
    NextMarker *string `json:"NextMarker,omitempty"`
    Rules []RuleSummary `json:"Rules,omitempty"`
    
}

