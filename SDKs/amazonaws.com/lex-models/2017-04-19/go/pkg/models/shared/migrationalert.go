package shared

// MigrationAlert
// Provides information about alerts and warnings that Amazon Lex sends during a migration. The alerts include information about how to resolve the issue.
type MigrationAlert struct {
	Details       []string                `json:"details,omitempty"`
	Message       *string                 `json:"message,omitempty"`
	ReferenceUrLs []string                `json:"referenceURLs,omitempty"`
	Type          *MigrationAlertTypeEnum `json:"type,omitempty"`
}
