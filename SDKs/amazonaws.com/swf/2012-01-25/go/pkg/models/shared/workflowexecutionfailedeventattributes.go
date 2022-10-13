package shared

type WorkflowExecutionFailedEventAttributes struct {
	DecisionTaskCompletedEventID int64   `json:"decisionTaskCompletedEventId"`
	Details                      *string `json:"details"`
	Reason                       *string `json:"reason"`
}
