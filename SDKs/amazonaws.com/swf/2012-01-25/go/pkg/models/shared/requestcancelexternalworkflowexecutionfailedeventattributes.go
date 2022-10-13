package shared

type RequestCancelExternalWorkflowExecutionFailedEventAttributes struct {
	Cause                        RequestCancelExternalWorkflowExecutionFailedCauseEnum `json:"cause"`
	Control                      *string                                               `json:"control"`
	DecisionTaskCompletedEventID int64                                                 `json:"decisionTaskCompletedEventId"`
	InitiatedEventID             int64                                                 `json:"initiatedEventId"`
	RunID                        *string                                               `json:"runId"`
	WorkflowID                   string                                                `json:"workflowId"`
}
