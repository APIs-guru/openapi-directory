package shared



type ListDelegatedServicesForAccountResponse struct {
    DelegatedServices []DelegatedService `json:"DelegatedServices,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

