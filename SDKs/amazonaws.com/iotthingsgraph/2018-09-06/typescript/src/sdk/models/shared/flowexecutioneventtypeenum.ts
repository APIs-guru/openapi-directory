


export enum FlowExecutionEventTypeEnum {
    ExecutionStarted = "EXECUTION_STARTED",
    ExecutionFailed = "EXECUTION_FAILED",
    ExecutionAborted = "EXECUTION_ABORTED",
    ExecutionSucceeded = "EXECUTION_SUCCEEDED",
    StepStarted = "STEP_STARTED",
    StepFailed = "STEP_FAILED",
    StepSucceeded = "STEP_SUCCEEDED",
    ActivityScheduled = "ACTIVITY_SCHEDULED",
    ActivityStarted = "ACTIVITY_STARTED",
    ActivityFailed = "ACTIVITY_FAILED",
    ActivitySucceeded = "ACTIVITY_SUCCEEDED",
    StartFlowExecutionTask = "START_FLOW_EXECUTION_TASK",
    ScheduleNextReadyStepsTask = "SCHEDULE_NEXT_READY_STEPS_TASK",
    ThingActionTask = "THING_ACTION_TASK",
    ThingActionTaskFailed = "THING_ACTION_TASK_FAILED",
    ThingActionTaskSucceeded = "THING_ACTION_TASK_SUCCEEDED",
    AcknowledgeTaskMessage = "ACKNOWLEDGE_TASK_MESSAGE"
}
