package shared



type ListModelQualityJobDefinitionsResponse struct {
    JobDefinitionSummaries []MonitoringJobDefinitionSummary `json:"JobDefinitionSummaries"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

