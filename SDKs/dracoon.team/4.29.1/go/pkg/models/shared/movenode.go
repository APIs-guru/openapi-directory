package shared

import (
	"time"
)

type MoveNode struct {
	ID                    int64      `json:"id"`
	Name                  *string    `json:"name,omitempty"`
	TimestampCreation     *time.Time `json:"timestampCreation,omitempty"`
	TimestampModification *time.Time `json:"timestampModification,omitempty"`
}
