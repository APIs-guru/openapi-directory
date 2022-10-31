package shared



type ListDelegatedAdministratorsRequest struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ServicePrincipal *string `json:"ServicePrincipal,omitempty"`
    
}

