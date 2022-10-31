package shared



type ListRegexPatternSetsResponse struct {
    NextMarker *string `json:"NextMarker,omitempty"`
    RegexPatternSets []RegexPatternSetSummary `json:"RegexPatternSets,omitempty"`
    
}

