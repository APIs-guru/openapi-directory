package shared

type DecisionTask struct {
	Events                 []HistoryEvent    `json:"events"`
	NextPageToken          *string           `json:"nextPageToken"`
	PreviousStartedEventID *int64            `json:"previousStartedEventId"`
	StartedEventID         int64             `json:"startedEventId"`
	TaskToken              string            `json:"taskToken"`
	WorkflowExecution      WorkflowExecution `json:"workflowExecution"`
	WorkflowType           WorkflowType      `json:"workflowType"`
}
