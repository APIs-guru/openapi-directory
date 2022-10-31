package shared

type CanaryStateEnum string

const (
	CanaryStateEnumCreating CanaryStateEnum = "CREATING"
	CanaryStateEnumReady    CanaryStateEnum = "READY"
	CanaryStateEnumStarting CanaryStateEnum = "STARTING"
	CanaryStateEnumRunning  CanaryStateEnum = "RUNNING"
	CanaryStateEnumUpdating CanaryStateEnum = "UPDATING"
	CanaryStateEnumStopping CanaryStateEnum = "STOPPING"
	CanaryStateEnumStopped  CanaryStateEnum = "STOPPED"
	CanaryStateEnumError    CanaryStateEnum = "ERROR"
	CanaryStateEnumDeleting CanaryStateEnum = "DELETING"
)
