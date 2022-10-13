package shared

type FailWorkflowExecutionFailedEventAttributes struct {
	Cause                        FailWorkflowExecutionFailedCauseEnum `json:"cause"`
	DecisionTaskCompletedEventID int64                                `json:"decisionTaskCompletedEventId"`
}
