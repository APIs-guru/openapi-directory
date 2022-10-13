package shared

type ConnectionStateEnum string

const (
	ConnectionStateEnumConnected    ConnectionStateEnum = "CONNECTED"
	ConnectionStateEnumDisconnected ConnectionStateEnum = "DISCONNECTED"
	ConnectionStateEnumUnknown      ConnectionStateEnum = "UNKNOWN"
)
