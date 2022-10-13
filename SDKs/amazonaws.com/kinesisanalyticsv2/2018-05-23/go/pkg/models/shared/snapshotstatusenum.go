package shared

type SnapshotStatusEnum string

const (
	SnapshotStatusEnumCreating SnapshotStatusEnum = "CREATING"
	SnapshotStatusEnumReady    SnapshotStatusEnum = "READY"
	SnapshotStatusEnumDeleting SnapshotStatusEnum = "DELETING"
	SnapshotStatusEnumFailed   SnapshotStatusEnum = "FAILED"
)
