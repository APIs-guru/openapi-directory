package shared

type ExecutionList struct {
	Executions []Execution `json:"executions"`
	Sum        int32       `json:"sum"`
}
