package shared

// WorkflowExecutionOpenCounts
// Contains the counts of open tasks, child workflow executions and timers for a workflow execution.
type WorkflowExecutionOpenCounts struct {
	OpenActivityTasks           int64  `json:"openActivityTasks"`
	OpenChildWorkflowExecutions int64  `json:"openChildWorkflowExecutions"`
	OpenDecisionTasks           int64  `json:"openDecisionTasks"`
	OpenLambdaFunctions         *int64 `json:"openLambdaFunctions,omitempty"`
	OpenTimers                  int64  `json:"openTimers"`
}
