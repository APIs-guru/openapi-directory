package shared

import (
"time")

type StartSyncExecutionOutput struct {
    BillingDetails *BillingDetails `json:"billingDetails,omitempty"`
    Cause *string `json:"cause,omitempty"`
    Error *string `json:"error,omitempty"`
    ExecutionArn string `json:"executionArn"`
    Input *string `json:"input,omitempty"`
    InputDetails *CloudWatchEventsExecutionDataDetails `json:"inputDetails,omitempty"`
    Name *string `json:"name,omitempty"`
    Output *string `json:"output,omitempty"`
    OutputDetails *CloudWatchEventsExecutionDataDetails `json:"outputDetails,omitempty"`
    StartDate time.Time `json:"startDate"`
    StateMachineArn *string `json:"stateMachineArn,omitempty"`
    Status SyncExecutionStatusEnum `json:"status"`
    StopDate time.Time `json:"stopDate"`
    TraceHeader *string `json:"traceHeader,omitempty"`
    
}

