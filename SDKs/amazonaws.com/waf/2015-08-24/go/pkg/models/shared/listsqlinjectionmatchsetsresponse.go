package shared



type ListSQLInjectionMatchSetsResponse struct {
    NextMarker *string `json:"NextMarker,omitempty"`
    SQLInjectionMatchSets []SQLInjectionMatchSetSummary `json:"SqlInjectionMatchSets,omitempty"`
    
}

