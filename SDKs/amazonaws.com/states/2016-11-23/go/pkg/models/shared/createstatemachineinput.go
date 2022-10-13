package shared

type CreateStateMachineInput struct {
	Definition           string                `json:"definition"`
	LoggingConfiguration *LoggingConfiguration `json:"loggingConfiguration"`
	Name                 string                `json:"name"`
	RoleArn              string                `json:"roleArn"`
	Tags                 []Tag                 `json:"tags"`
	TracingConfiguration *TracingConfiguration `json:"tracingConfiguration"`
	Type                 *StateMachineTypeEnum `json:"type"`
}
