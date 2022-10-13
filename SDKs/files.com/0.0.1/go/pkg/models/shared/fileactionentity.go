package shared

type FileActionEntity struct {
	FileMigrationID *int32  `json:"file_migration_id"`
	Status          *string `json:"status"`
}
