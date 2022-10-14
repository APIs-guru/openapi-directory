package shared

type PendingModifiedRelationalDatabaseValues struct {
	BackupRetentionEnabled *bool   `json:"backupRetentionEnabled,omitempty"`
	EngineVersion          *string `json:"engineVersion,omitempty"`
	MasterUserPassword     *string `json:"masterUserPassword,omitempty"`
}
