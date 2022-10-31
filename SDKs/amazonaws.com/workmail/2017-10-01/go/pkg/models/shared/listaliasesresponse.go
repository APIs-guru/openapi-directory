package shared



type ListAliasesResponse struct {
    Aliases []string `json:"Aliases,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

