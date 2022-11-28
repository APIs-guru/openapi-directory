package shared

// FileActionEntity
// Move file/folder
type FileActionEntity struct {
	FileMigrationID *int32  `json:"file_migration_id,omitempty"`
	Status          *string `json:"status,omitempty"`
}
