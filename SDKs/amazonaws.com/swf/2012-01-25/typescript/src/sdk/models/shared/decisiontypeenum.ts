

export enum DecisionTypeEnum {
    ScheduleActivityTask = "ScheduleActivityTask"
,    RequestCancelActivityTask = "RequestCancelActivityTask"
,    CompleteWorkflowExecution = "CompleteWorkflowExecution"
,    FailWorkflowExecution = "FailWorkflowExecution"
,    CancelWorkflowExecution = "CancelWorkflowExecution"
,    ContinueAsNewWorkflowExecution = "ContinueAsNewWorkflowExecution"
,    RecordMarker = "RecordMarker"
,    StartTimer = "StartTimer"
,    CancelTimer = "CancelTimer"
,    SignalExternalWorkflowExecution = "SignalExternalWorkflowExecution"
,    RequestCancelExternalWorkflowExecution = "RequestCancelExternalWorkflowExecution"
,    StartChildWorkflowExecution = "StartChildWorkflowExecution"
,    ScheduleLambdaFunction = "ScheduleLambdaFunction"
}
