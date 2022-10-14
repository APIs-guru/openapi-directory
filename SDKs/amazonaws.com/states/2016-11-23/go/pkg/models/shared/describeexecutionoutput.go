package shared

import (
	"time"
)

type DescribeExecutionOutput struct {
	ExecutionArn    string                                `json:"executionArn"`
	Input           *string                               `json:"input,omitempty"`
	InputDetails    *CloudWatchEventsExecutionDataDetails `json:"inputDetails,omitempty"`
	Name            *string                               `json:"name,omitempty"`
	Output          *string                               `json:"output,omitempty"`
	OutputDetails   *CloudWatchEventsExecutionDataDetails `json:"outputDetails,omitempty"`
	StartDate       time.Time                             `json:"startDate"`
	StateMachineArn string                                `json:"stateMachineArn"`
	Status          ExecutionStatusEnum                   `json:"status"`
	StopDate        *time.Time                            `json:"stopDate,omitempty"`
	TraceHeader     *string                               `json:"traceHeader,omitempty"`
}
