package shared

import (
	"time"
)

type DescribeStateMachineForExecutionOutput struct {
	Definition           string                `json:"definition"`
	LoggingConfiguration *LoggingConfiguration `json:"loggingConfiguration"`
	Name                 string                `json:"name"`
	RoleArn              string                `json:"roleArn"`
	StateMachineArn      string                `json:"stateMachineArn"`
	TracingConfiguration *TracingConfiguration `json:"tracingConfiguration"`
	UpdateDate           time.Time             `json:"updateDate"`
}
