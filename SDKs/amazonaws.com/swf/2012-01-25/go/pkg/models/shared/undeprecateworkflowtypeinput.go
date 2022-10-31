package shared



type UndeprecateWorkflowTypeInput struct {
    Domain string `json:"domain"`
    WorkflowType WorkflowType `json:"workflowType"`
    
}

