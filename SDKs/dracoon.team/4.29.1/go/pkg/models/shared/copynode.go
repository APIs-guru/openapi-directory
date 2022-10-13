package shared

import (
	"time"
)

type CopyNode struct {
	ID                    int64      `json:"id"`
	Name                  *string    `json:"name"`
	TimestampCreation     *time.Time `json:"timestampCreation"`
	TimestampModification *time.Time `json:"timestampModification"`
}
