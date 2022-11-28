package shared

import (
	"time"
)

// MoveNode
// Moved node information
type MoveNode struct {
	ID                    int64      `json:"id"`
	Name                  *string    `json:"name,omitempty"`
	TimestampCreation     *time.Time `json:"timestampCreation,omitempty"`
	TimestampModification *time.Time `json:"timestampModification,omitempty"`
}
