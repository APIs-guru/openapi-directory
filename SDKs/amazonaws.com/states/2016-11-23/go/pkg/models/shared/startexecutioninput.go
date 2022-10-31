package shared

type StartExecutionInput struct {
	Input           *string `json:"input,omitempty"`
	Name            *string `json:"name,omitempty"`
	StateMachineArn string  `json:"stateMachineArn"`
	TraceHeader     *string `json:"traceHeader,omitempty"`
}
