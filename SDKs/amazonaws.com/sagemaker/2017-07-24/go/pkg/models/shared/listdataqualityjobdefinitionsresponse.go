package shared

type ListDataQualityJobDefinitionsResponse struct {
	JobDefinitionSummaries []MonitoringJobDefinitionSummary `json:"JobDefinitionSummaries"`
	NextToken              *string                          `json:"NextToken,omitempty"`
}
