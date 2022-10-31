package shared

type ApplicationStatusEnum string

const (
	ApplicationStatusEnumDeleting ApplicationStatusEnum = "DELETING"
	ApplicationStatusEnumStarting ApplicationStatusEnum = "STARTING"
	ApplicationStatusEnumStopping ApplicationStatusEnum = "STOPPING"
	ApplicationStatusEnumReady    ApplicationStatusEnum = "READY"
	ApplicationStatusEnumRunning  ApplicationStatusEnum = "RUNNING"
	ApplicationStatusEnumUpdating ApplicationStatusEnum = "UPDATING"
)
