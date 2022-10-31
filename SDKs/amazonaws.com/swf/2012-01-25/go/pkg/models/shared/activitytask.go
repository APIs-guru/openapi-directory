package shared

type ActivityTask struct {
	ActivityID        string            `json:"activityId"`
	ActivityType      ActivityType      `json:"activityType"`
	Input             *string           `json:"input,omitempty"`
	StartedEventID    int64             `json:"startedEventId"`
	TaskToken         string            `json:"taskToken"`
	WorkflowExecution WorkflowExecution `json:"workflowExecution"`
}
