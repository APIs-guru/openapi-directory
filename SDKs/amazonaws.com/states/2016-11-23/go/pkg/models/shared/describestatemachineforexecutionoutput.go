package shared

import (
	"time"
)

type DescribeStateMachineForExecutionOutput struct {
	Definition           string                `json:"definition"`
	LoggingConfiguration *LoggingConfiguration `json:"loggingConfiguration,omitempty"`
	Name                 string                `json:"name"`
	RoleArn              string                `json:"roleArn"`
	StateMachineArn      string                `json:"stateMachineArn"`
	TracingConfiguration *TracingConfiguration `json:"tracingConfiguration,omitempty"`
	UpdateDate           time.Time             `json:"updateDate"`
}
