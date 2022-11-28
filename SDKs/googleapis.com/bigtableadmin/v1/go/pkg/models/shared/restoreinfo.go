package shared

type RestoreInfoSourceTypeEnum string

const (
	RestoreInfoSourceTypeEnumRestoreSourceTypeUnspecified RestoreInfoSourceTypeEnum = "RESTORE_SOURCE_TYPE_UNSPECIFIED"
	RestoreInfoSourceTypeEnumBackup                       RestoreInfoSourceTypeEnum = "BACKUP"
)

// RestoreInfo
// Information about a table restore.
type RestoreInfo struct {
	BackupInfo *BackupInfo                `json:"backupInfo,omitempty"`
	SourceType *RestoreInfoSourceTypeEnum `json:"sourceType,omitempty"`
}
