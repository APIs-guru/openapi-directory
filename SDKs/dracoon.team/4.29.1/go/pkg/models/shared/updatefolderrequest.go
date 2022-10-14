package shared

import (
	"time"
)

type UpdateFolderRequest struct {
	Name                  *string    `json:"name,omitempty"`
	Notes                 *string    `json:"notes,omitempty"`
	TimestampCreation     *time.Time `json:"timestampCreation,omitempty"`
	TimestampModification *time.Time `json:"timestampModification,omitempty"`
}
