package shared



type UpdateStateMachineInput struct {
    Definition *string `json:"definition,omitempty"`
    LoggingConfiguration *LoggingConfiguration `json:"loggingConfiguration,omitempty"`
    RoleArn *string `json:"roleArn,omitempty"`
    StateMachineArn string `json:"stateMachineArn"`
    TracingConfiguration *TracingConfiguration `json:"tracingConfiguration,omitempty"`
    
}

