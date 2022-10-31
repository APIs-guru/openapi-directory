package shared




type ServerStatusEnum string

const (
    ServerStatusEnumBackingUp ServerStatusEnum = "BACKING_UP"
ServerStatusEnumConnectionLost ServerStatusEnum = "CONNECTION_LOST"
ServerStatusEnumCreating ServerStatusEnum = "CREATING"
ServerStatusEnumDeleting ServerStatusEnum = "DELETING"
ServerStatusEnumModifying ServerStatusEnum = "MODIFYING"
ServerStatusEnumFailed ServerStatusEnum = "FAILED"
ServerStatusEnumHealthy ServerStatusEnum = "HEALTHY"
ServerStatusEnumRunning ServerStatusEnum = "RUNNING"
ServerStatusEnumRestoring ServerStatusEnum = "RESTORING"
ServerStatusEnumSetup ServerStatusEnum = "SETUP"
ServerStatusEnumUnderMaintenance ServerStatusEnum = "UNDER_MAINTENANCE"
ServerStatusEnumUnhealthy ServerStatusEnum = "UNHEALTHY"
ServerStatusEnumTerminated ServerStatusEnum = "TERMINATED"
)


