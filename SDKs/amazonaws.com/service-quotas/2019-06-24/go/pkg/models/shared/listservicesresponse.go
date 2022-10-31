package shared



type ListServicesResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    Services []ServiceInfo `json:"Services,omitempty"`
    
}

