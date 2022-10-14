package shared

type ListTasksOutput struct {
	NextToken *string       `json:"nextToken,omitempty"`
	Tasks     []TaskSummary `json:"tasks,omitempty"`
}
