package shared

type ScheduleActivityTaskFailedCauseEnum string

const (
	ScheduleActivityTaskFailedCauseEnumActivityTypeDeprecated                 ScheduleActivityTaskFailedCauseEnum = "ACTIVITY_TYPE_DEPRECATED"
	ScheduleActivityTaskFailedCauseEnumActivityTypeDoesNotExist               ScheduleActivityTaskFailedCauseEnum = "ACTIVITY_TYPE_DOES_NOT_EXIST"
	ScheduleActivityTaskFailedCauseEnumActivityIDAlreadyInUse                 ScheduleActivityTaskFailedCauseEnum = "ACTIVITY_ID_ALREADY_IN_USE"
	ScheduleActivityTaskFailedCauseEnumOpenActivitiesLimitExceeded            ScheduleActivityTaskFailedCauseEnum = "OPEN_ACTIVITIES_LIMIT_EXCEEDED"
	ScheduleActivityTaskFailedCauseEnumActivityCreationRateExceeded           ScheduleActivityTaskFailedCauseEnum = "ACTIVITY_CREATION_RATE_EXCEEDED"
	ScheduleActivityTaskFailedCauseEnumDefaultScheduleToCloseTimeoutUndefined ScheduleActivityTaskFailedCauseEnum = "DEFAULT_SCHEDULE_TO_CLOSE_TIMEOUT_UNDEFINED"
	ScheduleActivityTaskFailedCauseEnumDefaultTaskListUndefined               ScheduleActivityTaskFailedCauseEnum = "DEFAULT_TASK_LIST_UNDEFINED"
	ScheduleActivityTaskFailedCauseEnumDefaultScheduleToStartTimeoutUndefined ScheduleActivityTaskFailedCauseEnum = "DEFAULT_SCHEDULE_TO_START_TIMEOUT_UNDEFINED"
	ScheduleActivityTaskFailedCauseEnumDefaultStartToCloseTimeoutUndefined    ScheduleActivityTaskFailedCauseEnum = "DEFAULT_START_TO_CLOSE_TIMEOUT_UNDEFINED"
	ScheduleActivityTaskFailedCauseEnumDefaultHeartbeatTimeoutUndefined       ScheduleActivityTaskFailedCauseEnum = "DEFAULT_HEARTBEAT_TIMEOUT_UNDEFINED"
	ScheduleActivityTaskFailedCauseEnumOperationNotPermitted                  ScheduleActivityTaskFailedCauseEnum = "OPERATION_NOT_PERMITTED"
)
