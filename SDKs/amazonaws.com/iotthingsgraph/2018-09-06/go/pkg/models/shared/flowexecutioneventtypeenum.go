package shared

type FlowExecutionEventTypeEnum string

const (
	FlowExecutionEventTypeEnumExecutionStarted           FlowExecutionEventTypeEnum = "EXECUTION_STARTED"
	FlowExecutionEventTypeEnumExecutionFailed            FlowExecutionEventTypeEnum = "EXECUTION_FAILED"
	FlowExecutionEventTypeEnumExecutionAborted           FlowExecutionEventTypeEnum = "EXECUTION_ABORTED"
	FlowExecutionEventTypeEnumExecutionSucceeded         FlowExecutionEventTypeEnum = "EXECUTION_SUCCEEDED"
	FlowExecutionEventTypeEnumStepStarted                FlowExecutionEventTypeEnum = "STEP_STARTED"
	FlowExecutionEventTypeEnumStepFailed                 FlowExecutionEventTypeEnum = "STEP_FAILED"
	FlowExecutionEventTypeEnumStepSucceeded              FlowExecutionEventTypeEnum = "STEP_SUCCEEDED"
	FlowExecutionEventTypeEnumActivityScheduled          FlowExecutionEventTypeEnum = "ACTIVITY_SCHEDULED"
	FlowExecutionEventTypeEnumActivityStarted            FlowExecutionEventTypeEnum = "ACTIVITY_STARTED"
	FlowExecutionEventTypeEnumActivityFailed             FlowExecutionEventTypeEnum = "ACTIVITY_FAILED"
	FlowExecutionEventTypeEnumActivitySucceeded          FlowExecutionEventTypeEnum = "ACTIVITY_SUCCEEDED"
	FlowExecutionEventTypeEnumStartFlowExecutionTask     FlowExecutionEventTypeEnum = "START_FLOW_EXECUTION_TASK"
	FlowExecutionEventTypeEnumScheduleNextReadyStepsTask FlowExecutionEventTypeEnum = "SCHEDULE_NEXT_READY_STEPS_TASK"
	FlowExecutionEventTypeEnumThingActionTask            FlowExecutionEventTypeEnum = "THING_ACTION_TASK"
	FlowExecutionEventTypeEnumThingActionTaskFailed      FlowExecutionEventTypeEnum = "THING_ACTION_TASK_FAILED"
	FlowExecutionEventTypeEnumThingActionTaskSucceeded   FlowExecutionEventTypeEnum = "THING_ACTION_TASK_SUCCEEDED"
	FlowExecutionEventTypeEnumAcknowledgeTaskMessage     FlowExecutionEventTypeEnum = "ACKNOWLEDGE_TASK_MESSAGE"
)
