export var DecisionTypeEnum;
(function (DecisionTypeEnum) {
    DecisionTypeEnum["ScheduleActivityTask"] = "ScheduleActivityTask";
    DecisionTypeEnum["RequestCancelActivityTask"] = "RequestCancelActivityTask";
    DecisionTypeEnum["CompleteWorkflowExecution"] = "CompleteWorkflowExecution";
    DecisionTypeEnum["FailWorkflowExecution"] = "FailWorkflowExecution";
    DecisionTypeEnum["CancelWorkflowExecution"] = "CancelWorkflowExecution";
    DecisionTypeEnum["ContinueAsNewWorkflowExecution"] = "ContinueAsNewWorkflowExecution";
    DecisionTypeEnum["RecordMarker"] = "RecordMarker";
    DecisionTypeEnum["StartTimer"] = "StartTimer";
    DecisionTypeEnum["CancelTimer"] = "CancelTimer";
    DecisionTypeEnum["SignalExternalWorkflowExecution"] = "SignalExternalWorkflowExecution";
    DecisionTypeEnum["RequestCancelExternalWorkflowExecution"] = "RequestCancelExternalWorkflowExecution";
    DecisionTypeEnum["StartChildWorkflowExecution"] = "StartChildWorkflowExecution";
    DecisionTypeEnum["ScheduleLambdaFunction"] = "ScheduleLambdaFunction";
})(DecisionTypeEnum || (DecisionTypeEnum = {}));
