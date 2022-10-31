package shared



type ListFlowDefinitionsResponse struct {
    FlowDefinitionSummaries []FlowDefinitionSummary `json:"FlowDefinitionSummaries"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

