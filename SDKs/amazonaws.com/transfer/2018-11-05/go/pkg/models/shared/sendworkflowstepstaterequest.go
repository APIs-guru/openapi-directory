package shared

type SendWorkflowStepStateRequest struct {
	ExecutionID string               `json:"ExecutionId"`
	Status      CustomStepStatusEnum `json:"Status"`
	Token       string               `json:"Token"`
	WorkflowID  string               `json:"WorkflowId"`
}
