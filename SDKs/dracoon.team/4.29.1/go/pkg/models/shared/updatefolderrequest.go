package shared

import (
	"time"
)

// UpdateFolderRequest
// Request model for updating folder's metadata
type UpdateFolderRequest struct {
	Name                  *string    `json:"name,omitempty"`
	Notes                 *string    `json:"notes,omitempty"`
	TimestampCreation     *time.Time `json:"timestampCreation,omitempty"`
	TimestampModification *time.Time `json:"timestampModification,omitempty"`
}
