package shared

type StopExecutionInput struct {
	Cause        *string `json:"cause"`
	Error        *string `json:"error"`
	ExecutionArn string  `json:"executionArn"`
}
