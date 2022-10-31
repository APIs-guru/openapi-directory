package shared



type ListXSSMatchSetsResponse struct {
    NextMarker *string `json:"NextMarker,omitempty"`
    XSSMatchSets []XSSMatchSetSummary `json:"XssMatchSets,omitempty"`
    
}

