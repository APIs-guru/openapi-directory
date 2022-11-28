package shared

type ScheduleStateEnum string

const (
	ScheduleStateEnumModifying ScheduleStateEnum = "MODIFYING"
	ScheduleStateEnumActive    ScheduleStateEnum = "ACTIVE"
	ScheduleStateEnumFailed    ScheduleStateEnum = "FAILED"
)
