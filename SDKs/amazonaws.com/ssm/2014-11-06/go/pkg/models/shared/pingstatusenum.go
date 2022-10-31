package shared

type PingStatusEnum string

const (
	PingStatusEnumOnline         PingStatusEnum = "Online"
	PingStatusEnumConnectionLost PingStatusEnum = "ConnectionLost"
	PingStatusEnumInactive       PingStatusEnum = "Inactive"
)
