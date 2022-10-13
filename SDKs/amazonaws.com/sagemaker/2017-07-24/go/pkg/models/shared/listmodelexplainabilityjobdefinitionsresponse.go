package shared

type ListModelExplainabilityJobDefinitionsResponse struct {
	JobDefinitionSummaries []MonitoringJobDefinitionSummary `json:"JobDefinitionSummaries"`
	NextToken              *string                          `json:"NextToken"`
}
