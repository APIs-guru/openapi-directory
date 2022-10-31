package shared



type RegisterDomainInput struct {
    Description *string `json:"description,omitempty"`
    Name string `json:"name"`
    Tags []ResourceTag `json:"tags,omitempty"`
    WorkflowExecutionRetentionPeriodInDays string `json:"workflowExecutionRetentionPeriodInDays"`
    
}

