package shared

type InstanceStateNameEnum string

const (
	InstanceStateNameEnumPending      InstanceStateNameEnum = "PENDING"
	InstanceStateNameEnumRunning      InstanceStateNameEnum = "RUNNING"
	InstanceStateNameEnumShuttingDown InstanceStateNameEnum = "SHUTTING_DOWN"
	InstanceStateNameEnumTerminated   InstanceStateNameEnum = "TERMINATED"
	InstanceStateNameEnumStopping     InstanceStateNameEnum = "STOPPING"
	InstanceStateNameEnumStopped      InstanceStateNameEnum = "STOPPED"
)
