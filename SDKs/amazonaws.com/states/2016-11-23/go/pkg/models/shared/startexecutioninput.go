package shared

type StartExecutionInput struct {
	Input           *string `json:"input"`
	Name            *string `json:"name"`
	StateMachineArn string  `json:"stateMachineArn"`
	TraceHeader     *string `json:"traceHeader"`
}
