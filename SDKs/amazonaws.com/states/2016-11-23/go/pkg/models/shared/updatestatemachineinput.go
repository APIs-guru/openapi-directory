package shared

type UpdateStateMachineInput struct {
	Definition           *string               `json:"definition"`
	LoggingConfiguration *LoggingConfiguration `json:"loggingConfiguration"`
	RoleArn              *string               `json:"roleArn"`
	StateMachineArn      string                `json:"stateMachineArn"`
	TracingConfiguration *TracingConfiguration `json:"tracingConfiguration"`
}
