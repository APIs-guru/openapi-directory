package shared




type StudioComponentStateEnum string

const (
    StudioComponentStateEnumCreateInProgress StudioComponentStateEnum = "CREATE_IN_PROGRESS"
StudioComponentStateEnumReady StudioComponentStateEnum = "READY"
StudioComponentStateEnumUpdateInProgress StudioComponentStateEnum = "UPDATE_IN_PROGRESS"
StudioComponentStateEnumDeleteInProgress StudioComponentStateEnum = "DELETE_IN_PROGRESS"
StudioComponentStateEnumDeleted StudioComponentStateEnum = "DELETED"
StudioComponentStateEnumDeleteFailed StudioComponentStateEnum = "DELETE_FAILED"
StudioComponentStateEnumCreateFailed StudioComponentStateEnum = "CREATE_FAILED"
StudioComponentStateEnumUpdateFailed StudioComponentStateEnum = "UPDATE_FAILED"
)


