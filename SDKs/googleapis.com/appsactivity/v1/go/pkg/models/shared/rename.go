package shared

// Rename
// Contains information about a renametype event.
type Rename struct {
	NewTitle *string `json:"newTitle,omitempty"`
	OldTitle *string `json:"oldTitle,omitempty"`
}
