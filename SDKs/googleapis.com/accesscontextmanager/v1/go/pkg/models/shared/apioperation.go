package shared



type APIOperation struct {
    MethodSelectors []MethodSelector `json:"methodSelectors,omitempty"`
    ServiceName *string `json:"serviceName,omitempty"`
    
}

