package shared



type ListWorkerConfigurationsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    WorkerConfigurations []WorkerConfigurationSummary `json:"workerConfigurations,omitempty"`
    
}

