package shared

type WorkflowExecutionOpenCounts struct {
	OpenActivityTasks           int64  `json:"openActivityTasks"`
	OpenChildWorkflowExecutions int64  `json:"openChildWorkflowExecutions"`
	OpenDecisionTasks           int64  `json:"openDecisionTasks"`
	OpenLambdaFunctions         *int64 `json:"openLambdaFunctions,omitempty"`
	OpenTimers                  int64  `json:"openTimers"`
}
