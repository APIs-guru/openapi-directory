package shared

type UpdateServerRequest struct {
	BackupRetentionCount       *int64  `json:"BackupRetentionCount"`
	DisableAutomatedBackup     *bool   `json:"DisableAutomatedBackup"`
	PreferredBackupWindow      *string `json:"PreferredBackupWindow"`
	PreferredMaintenanceWindow *string `json:"PreferredMaintenanceWindow"`
	ServerName                 string  `json:"ServerName"`
}
