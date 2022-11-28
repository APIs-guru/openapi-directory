package shared

// WorkflowExecutionInfos
// Contains a paginated list of information about workflow executions.
type WorkflowExecutionInfos struct {
	ExecutionInfos []WorkflowExecutionInfo `json:"executionInfos"`
	NextPageToken  *string                 `json:"nextPageToken,omitempty"`
}
