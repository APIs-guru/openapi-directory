package shared

type DecisionTask struct {
	Events                 []HistoryEvent    `json:"events"`
	NextPageToken          *string           `json:"nextPageToken,omitempty"`
	PreviousStartedEventID *int64            `json:"previousStartedEventId,omitempty"`
	StartedEventID         int64             `json:"startedEventId"`
	TaskToken              string            `json:"taskToken"`
	WorkflowExecution      WorkflowExecution `json:"workflowExecution"`
	WorkflowType           WorkflowType      `json:"workflowType"`
}
