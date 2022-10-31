package shared



type ListServiceInstancesOutput struct {
    NextToken *string `json:"nextToken,omitempty"`
    ServiceInstances []ServiceInstanceSummary `json:"serviceInstances"`
    
}

