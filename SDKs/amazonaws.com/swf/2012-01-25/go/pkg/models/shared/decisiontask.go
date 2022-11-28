package shared

// DecisionTask
// A structure that represents a decision task. Decision tasks are sent to deciders in order for them to make decisions.
type DecisionTask struct {
	Events                 []HistoryEvent    `json:"events"`
	NextPageToken          *string           `json:"nextPageToken,omitempty"`
	PreviousStartedEventID *int64            `json:"previousStartedEventId,omitempty"`
	StartedEventID         int64             `json:"startedEventId"`
	TaskToken              string            `json:"taskToken"`
	WorkflowExecution      WorkflowExecution `json:"workflowExecution"`
	WorkflowType           WorkflowType      `json:"workflowType"`
}
