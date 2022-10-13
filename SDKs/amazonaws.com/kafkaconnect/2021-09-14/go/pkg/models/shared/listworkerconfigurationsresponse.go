package shared

type ListWorkerConfigurationsResponse struct {
	NextToken            *string                      `json:"nextToken"`
	WorkerConfigurations []WorkerConfigurationSummary `json:"workerConfigurations"`
}
