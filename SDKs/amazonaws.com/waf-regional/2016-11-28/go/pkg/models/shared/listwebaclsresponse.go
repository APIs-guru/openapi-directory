package shared



type ListWebAcLsResponse struct {
    NextMarker *string `json:"NextMarker,omitempty"`
    WebAcLs []WebACLSummary `json:"WebACLs,omitempty"`
    
}

