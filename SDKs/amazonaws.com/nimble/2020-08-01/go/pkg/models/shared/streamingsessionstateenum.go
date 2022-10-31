package shared

type StreamingSessionStateEnum string

const (
	StreamingSessionStateEnumCreateInProgress StreamingSessionStateEnum = "CREATE_IN_PROGRESS"
	StreamingSessionStateEnumDeleteInProgress StreamingSessionStateEnum = "DELETE_IN_PROGRESS"
	StreamingSessionStateEnumReady            StreamingSessionStateEnum = "READY"
	StreamingSessionStateEnumDeleted          StreamingSessionStateEnum = "DELETED"
	StreamingSessionStateEnumCreateFailed     StreamingSessionStateEnum = "CREATE_FAILED"
	StreamingSessionStateEnumDeleteFailed     StreamingSessionStateEnum = "DELETE_FAILED"
)
