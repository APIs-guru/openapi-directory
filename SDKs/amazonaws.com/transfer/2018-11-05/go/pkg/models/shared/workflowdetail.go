package shared

// WorkflowDetail
// Specifies the workflow ID for the workflow to assign and the execution role used for executing the workflow.
type WorkflowDetail struct {
	ExecutionRole string `json:"ExecutionRole"`
	WorkflowID    string `json:"WorkflowId"`
}
