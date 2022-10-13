package shared

import (
	"time"
)

type StartSyncExecutionOutput struct {
	BillingDetails  *BillingDetails                       `json:"billingDetails"`
	Cause           *string                               `json:"cause"`
	Error           *string                               `json:"error"`
	ExecutionArn    string                                `json:"executionArn"`
	Input           *string                               `json:"input"`
	InputDetails    *CloudWatchEventsExecutionDataDetails `json:"inputDetails"`
	Name            *string                               `json:"name"`
	Output          *string                               `json:"output"`
	OutputDetails   *CloudWatchEventsExecutionDataDetails `json:"outputDetails"`
	StartDate       time.Time                             `json:"startDate"`
	StateMachineArn *string                               `json:"stateMachineArn"`
	Status          SyncExecutionStatusEnum               `json:"status"`
	StopDate        time.Time                             `json:"stopDate"`
	TraceHeader     *string                               `json:"traceHeader"`
}
