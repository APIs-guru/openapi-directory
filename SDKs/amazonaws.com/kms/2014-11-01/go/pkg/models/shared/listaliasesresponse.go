package shared



type ListAliasesResponse struct {
    Aliases []AliasListEntry `json:"Aliases,omitempty"`
    NextMarker *string `json:"NextMarker,omitempty"`
    Truncated *bool `json:"Truncated,omitempty"`
    
}

