package shared

import (
	"time"
)

type UpdateFolderRequest struct {
	Name                  *string    `json:"name"`
	Notes                 *string    `json:"notes"`
	TimestampCreation     *time.Time `json:"timestampCreation"`
	TimestampModification *time.Time `json:"timestampModification"`
}
