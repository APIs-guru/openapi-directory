package shared



type ListAliasesResponse struct {
    Aliases []AliasConfiguration `json:"Aliases,omitempty"`
    NextMarker *string `json:"NextMarker,omitempty"`
    
}

