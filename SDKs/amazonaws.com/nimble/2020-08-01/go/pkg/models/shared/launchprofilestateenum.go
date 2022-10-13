package shared

type LaunchProfileStateEnum string

const (
	LaunchProfileStateEnumCreateInProgress LaunchProfileStateEnum = "CREATE_IN_PROGRESS"
	LaunchProfileStateEnumReady            LaunchProfileStateEnum = "READY"
	LaunchProfileStateEnumUpdateInProgress LaunchProfileStateEnum = "UPDATE_IN_PROGRESS"
	LaunchProfileStateEnumDeleteInProgress LaunchProfileStateEnum = "DELETE_IN_PROGRESS"
	LaunchProfileStateEnumDeleted          LaunchProfileStateEnum = "DELETED"
	LaunchProfileStateEnumDeleteFailed     LaunchProfileStateEnum = "DELETE_FAILED"
	LaunchProfileStateEnumCreateFailed     LaunchProfileStateEnum = "CREATE_FAILED"
	LaunchProfileStateEnumUpdateFailed     LaunchProfileStateEnum = "UPDATE_FAILED"
)
