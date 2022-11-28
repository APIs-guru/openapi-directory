package shared

// BackupInfo
// Information about a backup.
type BackupInfo struct {
	Backup      *string `json:"backup,omitempty"`
	EndTime     *string `json:"endTime,omitempty"`
	SourceTable *string `json:"sourceTable,omitempty"`
	StartTime   *string `json:"startTime,omitempty"`
}
