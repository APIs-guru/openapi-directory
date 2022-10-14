package shared

type WorkflowExecutionCount struct {
	Count     int64 `json:"count"`
	Truncated *bool `json:"truncated,omitempty"`
}
