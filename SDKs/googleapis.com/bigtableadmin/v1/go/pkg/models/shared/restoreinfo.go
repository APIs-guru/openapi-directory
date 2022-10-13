package shared

type RestoreInfoSourceTypeEnum string

const (
	RestoreInfoSourceTypeEnumRestoreSourceTypeUnspecified RestoreInfoSourceTypeEnum = "RESTORE_SOURCE_TYPE_UNSPECIFIED"
	RestoreInfoSourceTypeEnumBackup                       RestoreInfoSourceTypeEnum = "BACKUP"
)

type RestoreInfo struct {
	BackupInfo *BackupInfo                `json:"backupInfo"`
	SourceType *RestoreInfoSourceTypeEnum `json:"sourceType"`
}
