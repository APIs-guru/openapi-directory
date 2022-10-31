package shared



type ListIPSetsResponse struct {
    IPSets []IPSetSummary `json:"IPSets,omitempty"`
    NextMarker *string `json:"NextMarker,omitempty"`
    
}

