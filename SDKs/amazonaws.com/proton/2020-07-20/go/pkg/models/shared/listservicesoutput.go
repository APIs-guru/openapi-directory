package shared



type ListServicesOutput struct {
    NextToken *string `json:"nextToken,omitempty"`
    Services []ServiceSummary `json:"services"`
    
}

