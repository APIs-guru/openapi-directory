package shared




type StreamingImageStateEnum string

const (
    StreamingImageStateEnumCreateInProgress StreamingImageStateEnum = "CREATE_IN_PROGRESS"
StreamingImageStateEnumReady StreamingImageStateEnum = "READY"
StreamingImageStateEnumDeleteInProgress StreamingImageStateEnum = "DELETE_IN_PROGRESS"
StreamingImageStateEnumDeleted StreamingImageStateEnum = "DELETED"
StreamingImageStateEnumUpdateInProgress StreamingImageStateEnum = "UPDATE_IN_PROGRESS"
StreamingImageStateEnumUpdateFailed StreamingImageStateEnum = "UPDATE_FAILED"
StreamingImageStateEnumCreateFailed StreamingImageStateEnum = "CREATE_FAILED"
StreamingImageStateEnumDeleteFailed StreamingImageStateEnum = "DELETE_FAILED"
)


