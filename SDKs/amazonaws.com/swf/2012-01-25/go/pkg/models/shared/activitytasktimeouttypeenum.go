package shared

type ActivityTaskTimeoutTypeEnum string

const (
	ActivityTaskTimeoutTypeEnumStartToClose    ActivityTaskTimeoutTypeEnum = "START_TO_CLOSE"
	ActivityTaskTimeoutTypeEnumScheduleToStart ActivityTaskTimeoutTypeEnum = "SCHEDULE_TO_START"
	ActivityTaskTimeoutTypeEnumScheduleToClose ActivityTaskTimeoutTypeEnum = "SCHEDULE_TO_CLOSE"
	ActivityTaskTimeoutTypeEnumHeartbeat       ActivityTaskTimeoutTypeEnum = "HEARTBEAT"
)
