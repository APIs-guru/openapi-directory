package shared

type SessionStatusEnum string

const (
	SessionStatusEnumConnected    SessionStatusEnum = "Connected"
	SessionStatusEnumConnecting   SessionStatusEnum = "Connecting"
	SessionStatusEnumDisconnected SessionStatusEnum = "Disconnected"
	SessionStatusEnumTerminated   SessionStatusEnum = "Terminated"
	SessionStatusEnumTerminating  SessionStatusEnum = "Terminating"
	SessionStatusEnumFailed       SessionStatusEnum = "Failed"
)
