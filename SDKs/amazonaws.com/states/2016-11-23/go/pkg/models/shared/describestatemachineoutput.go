package shared

import (
	"time"
)

type DescribeStateMachineOutput struct {
	CreationDate         time.Time               `json:"creationDate"`
	Definition           string                  `json:"definition"`
	LoggingConfiguration *LoggingConfiguration   `json:"loggingConfiguration"`
	Name                 string                  `json:"name"`
	RoleArn              string                  `json:"roleArn"`
	StateMachineArn      string                  `json:"stateMachineArn"`
	Status               *StateMachineStatusEnum `json:"status"`
	TracingConfiguration *TracingConfiguration   `json:"tracingConfiguration"`
	Type                 StateMachineTypeEnum    `json:"type"`
}
