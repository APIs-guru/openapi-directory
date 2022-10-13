package shared

type ListTasksOutput struct {
	NextToken *string       `json:"nextToken"`
	Tasks     []TaskSummary `json:"tasks"`
}
