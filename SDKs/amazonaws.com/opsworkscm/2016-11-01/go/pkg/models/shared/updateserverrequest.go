package shared

type UpdateServerRequest struct {
	BackupRetentionCount       *int64  `json:"BackupRetentionCount,omitempty"`
	DisableAutomatedBackup     *bool   `json:"DisableAutomatedBackup,omitempty"`
	PreferredBackupWindow      *string `json:"PreferredBackupWindow,omitempty"`
	PreferredMaintenanceWindow *string `json:"PreferredMaintenanceWindow,omitempty"`
	ServerName                 string  `json:"ServerName"`
}
