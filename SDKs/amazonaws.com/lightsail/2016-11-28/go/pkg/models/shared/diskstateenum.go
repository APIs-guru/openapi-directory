package shared

type DiskStateEnum string

const (
	DiskStateEnumPending   DiskStateEnum = "pending"
	DiskStateEnumError     DiskStateEnum = "error"
	DiskStateEnumAvailable DiskStateEnum = "available"
	DiskStateEnumInUse     DiskStateEnum = "in-use"
	DiskStateEnumUnknown   DiskStateEnum = "unknown"
)
