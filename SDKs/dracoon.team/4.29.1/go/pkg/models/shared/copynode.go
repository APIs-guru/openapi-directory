package shared

import (
	"time"
)

// CopyNode
// Copied node information
type CopyNode struct {
	ID                    int64      `json:"id"`
	Name                  *string    `json:"name,omitempty"`
	TimestampCreation     *time.Time `json:"timestampCreation,omitempty"`
	TimestampModification *time.Time `json:"timestampModification,omitempty"`
}
