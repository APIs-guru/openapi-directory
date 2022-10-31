package shared




type ScheduleStatusEnum string

const (
    ScheduleStatusEnumPending ScheduleStatusEnum = "Pending"
ScheduleStatusEnumFailed ScheduleStatusEnum = "Failed"
ScheduleStatusEnumScheduled ScheduleStatusEnum = "Scheduled"
ScheduleStatusEnumStopped ScheduleStatusEnum = "Stopped"
)


