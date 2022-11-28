package shared

// PendingModifiedRelationalDatabaseValues
// Describes a pending database value modification.
type PendingModifiedRelationalDatabaseValues struct {
	BackupRetentionEnabled *bool   `json:"backupRetentionEnabled,omitempty"`
	EngineVersion          *string `json:"engineVersion,omitempty"`
	MasterUserPassword     *string `json:"masterUserPassword,omitempty"`
}
