package shared

type WorkflowExecutionCompletedEventAttributes struct {
	DecisionTaskCompletedEventID int64   `json:"decisionTaskCompletedEventId"`
	Result                       *string `json:"result"`
}
