package shared

type StartSyncExecutionInput struct {
	Input           *string `json:"input,omitempty"`
	Name            *string `json:"name,omitempty"`
	StateMachineArn string  `json:"stateMachineArn"`
	TraceHeader     *string `json:"traceHeader,omitempty"`
}
