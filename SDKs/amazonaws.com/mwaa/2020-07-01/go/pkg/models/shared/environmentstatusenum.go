package shared

type EnvironmentStatusEnum string

const (
	EnvironmentStatusEnumCreating     EnvironmentStatusEnum = "CREATING"
	EnvironmentStatusEnumCreateFailed EnvironmentStatusEnum = "CREATE_FAILED"
	EnvironmentStatusEnumAvailable    EnvironmentStatusEnum = "AVAILABLE"
	EnvironmentStatusEnumUpdating     EnvironmentStatusEnum = "UPDATING"
	EnvironmentStatusEnumDeleting     EnvironmentStatusEnum = "DELETING"
	EnvironmentStatusEnumDeleted      EnvironmentStatusEnum = "DELETED"
	EnvironmentStatusEnumUnavailable  EnvironmentStatusEnum = "UNAVAILABLE"
	EnvironmentStatusEnumUpdateFailed EnvironmentStatusEnum = "UPDATE_FAILED"
)
