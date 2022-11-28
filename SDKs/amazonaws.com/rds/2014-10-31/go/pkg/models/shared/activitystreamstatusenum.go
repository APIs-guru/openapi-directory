package shared

type ActivityStreamStatusEnum string

const (
	ActivityStreamStatusEnumStopped  ActivityStreamStatusEnum = "stopped"
	ActivityStreamStatusEnumStarting ActivityStreamStatusEnum = "starting"
	ActivityStreamStatusEnumStarted  ActivityStreamStatusEnum = "started"
	ActivityStreamStatusEnumStopping ActivityStreamStatusEnum = "stopping"
)
