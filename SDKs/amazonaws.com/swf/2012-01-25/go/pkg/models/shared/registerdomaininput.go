package shared

type RegisterDomainInput struct {
	Description                            *string       `json:"description"`
	Name                                   string        `json:"name"`
	Tags                                   []ResourceTag `json:"tags"`
	WorkflowExecutionRetentionPeriodInDays string        `json:"workflowExecutionRetentionPeriodInDays"`
}
