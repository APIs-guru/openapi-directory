package shared

import (
	"time"
)

type DescribeExecutionOutput struct {
	ExecutionArn    string                                `json:"executionArn"`
	Input           *string                               `json:"input"`
	InputDetails    *CloudWatchEventsExecutionDataDetails `json:"inputDetails"`
	Name            *string                               `json:"name"`
	Output          *string                               `json:"output"`
	OutputDetails   *CloudWatchEventsExecutionDataDetails `json:"outputDetails"`
	StartDate       time.Time                             `json:"startDate"`
	StateMachineArn string                                `json:"stateMachineArn"`
	Status          ExecutionStatusEnum                   `json:"status"`
	StopDate        *time.Time                            `json:"stopDate"`
	TraceHeader     *string                               `json:"traceHeader"`
}
