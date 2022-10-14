package shared

type CreateStateMachineInput struct {
	Definition           string                `json:"definition"`
	LoggingConfiguration *LoggingConfiguration `json:"loggingConfiguration,omitempty"`
	Name                 string                `json:"name"`
	RoleArn              string                `json:"roleArn"`
	Tags                 []Tag                 `json:"tags,omitempty"`
	TracingConfiguration *TracingConfiguration `json:"tracingConfiguration,omitempty"`
	Type                 *StateMachineTypeEnum `json:"type,omitempty"`
}
