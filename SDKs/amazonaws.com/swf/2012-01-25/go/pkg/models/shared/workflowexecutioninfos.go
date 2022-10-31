package shared

type WorkflowExecutionInfos struct {
	ExecutionInfos []WorkflowExecutionInfo `json:"executionInfos"`
	NextPageToken  *string                 `json:"nextPageToken,omitempty"`
}
