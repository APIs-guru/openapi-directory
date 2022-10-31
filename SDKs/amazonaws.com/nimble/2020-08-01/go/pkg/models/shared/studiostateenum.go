package shared




type StudioStateEnum string

const (
    StudioStateEnumCreateInProgress StudioStateEnum = "CREATE_IN_PROGRESS"
StudioStateEnumReady StudioStateEnum = "READY"
StudioStateEnumUpdateInProgress StudioStateEnum = "UPDATE_IN_PROGRESS"
StudioStateEnumDeleteInProgress StudioStateEnum = "DELETE_IN_PROGRESS"
StudioStateEnumDeleted StudioStateEnum = "DELETED"
StudioStateEnumDeleteFailed StudioStateEnum = "DELETE_FAILED"
StudioStateEnumCreateFailed StudioStateEnum = "CREATE_FAILED"
StudioStateEnumUpdateFailed StudioStateEnum = "UPDATE_FAILED"
)


