package shared



type ListDomainsResponse struct {
    Domains []DomainSummary `json:"Domains,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

