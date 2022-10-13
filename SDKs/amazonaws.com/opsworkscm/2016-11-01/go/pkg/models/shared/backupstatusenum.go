package shared

type BackupStatusEnum string

const (
	BackupStatusEnumInProgress BackupStatusEnum = "IN_PROGRESS"
	BackupStatusEnumOk         BackupStatusEnum = "OK"
	BackupStatusEnumFailed     BackupStatusEnum = "FAILED"
	BackupStatusEnumDeleting   BackupStatusEnum = "DELETING"
)
