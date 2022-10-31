package shared



type ListSizeConstraintSetsResponse struct {
    NextMarker *string `json:"NextMarker,omitempty"`
    SizeConstraintSets []SizeConstraintSetSummary `json:"SizeConstraintSets,omitempty"`
    
}

