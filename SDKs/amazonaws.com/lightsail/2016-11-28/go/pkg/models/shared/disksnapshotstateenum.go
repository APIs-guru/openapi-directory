package shared

type DiskSnapshotStateEnum string

const (
	DiskSnapshotStateEnumPending   DiskSnapshotStateEnum = "pending"
	DiskSnapshotStateEnumCompleted DiskSnapshotStateEnum = "completed"
	DiskSnapshotStateEnumError     DiskSnapshotStateEnum = "error"
	DiskSnapshotStateEnumUnknown   DiskSnapshotStateEnum = "unknown"
)
