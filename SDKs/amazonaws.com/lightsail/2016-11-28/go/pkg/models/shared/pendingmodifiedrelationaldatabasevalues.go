package shared

type PendingModifiedRelationalDatabaseValues struct {
	BackupRetentionEnabled *bool   `json:"backupRetentionEnabled"`
	EngineVersion          *string `json:"engineVersion"`
	MasterUserPassword     *string `json:"masterUserPassword"`
}
