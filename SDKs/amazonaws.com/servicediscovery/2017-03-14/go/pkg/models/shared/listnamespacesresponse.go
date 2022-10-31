package shared



type ListNamespacesResponse struct {
    Namespaces []NamespaceSummary `json:"Namespaces,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

