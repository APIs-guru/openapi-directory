package shared



type ListGrantsResponse struct {
    Grants []GrantListEntry `json:"Grants,omitempty"`
    NextMarker *string `json:"NextMarker,omitempty"`
    Truncated *bool `json:"Truncated,omitempty"`
    
}

