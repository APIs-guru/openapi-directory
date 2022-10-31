package shared

import (
"time")

type DescribeStateMachineOutput struct {
    CreationDate time.Time `json:"creationDate"`
    Definition string `json:"definition"`
    LoggingConfiguration *LoggingConfiguration `json:"loggingConfiguration,omitempty"`
    Name string `json:"name"`
    RoleArn string `json:"roleArn"`
    StateMachineArn string `json:"stateMachineArn"`
    Status *StateMachineStatusEnum `json:"status,omitempty"`
    TracingConfiguration *TracingConfiguration `json:"tracingConfiguration,omitempty"`
    Type StateMachineTypeEnum `json:"type"`
    
}

