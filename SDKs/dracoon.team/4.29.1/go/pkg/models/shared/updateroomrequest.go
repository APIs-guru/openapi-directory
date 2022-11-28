package shared

import (
	"time"
)

// UpdateRoomRequest
// Request model for updating room's metadata
type UpdateRoomRequest struct {
	Name                  *string    `json:"name,omitempty"`
	Notes                 *string    `json:"notes,omitempty"`
	Quota                 *int64     `json:"quota,omitempty"`
	TimestampCreation     *time.Time `json:"timestampCreation,omitempty"`
	TimestampModification *time.Time `json:"timestampModification,omitempty"`
}
