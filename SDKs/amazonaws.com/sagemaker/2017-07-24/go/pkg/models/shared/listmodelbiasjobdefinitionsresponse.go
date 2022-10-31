package shared

type ListModelBiasJobDefinitionsResponse struct {
	JobDefinitionSummaries []MonitoringJobDefinitionSummary `json:"JobDefinitionSummaries"`
	NextToken              *string                          `json:"NextToken,omitempty"`
}
