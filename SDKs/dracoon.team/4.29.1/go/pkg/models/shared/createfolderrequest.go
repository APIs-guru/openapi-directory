package shared

import (
	"time"
)

type CreateFolderRequest struct {
	Name                  string     `json:"name"`
	Notes                 *string    `json:"notes"`
	ParentID              int64      `json:"parentId"`
	TimestampCreation     *time.Time `json:"timestampCreation"`
	TimestampModification *time.Time `json:"timestampModification"`
}
