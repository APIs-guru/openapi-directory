package shared

import (
	"time"
)

// CreateShareUploadChannelRequest
// Request model for creating an upload channel
type CreateShareUploadChannelRequest struct {
	DirectS3Upload        *bool      `json:"directS3Upload,omitempty"`
	Name                  string     `json:"name"`
	Password              *string    `json:"password,omitempty"`
	Size                  *int64     `json:"size,omitempty"`
	TimestampCreation     *time.Time `json:"timestampCreation,omitempty"`
	TimestampModification *time.Time `json:"timestampModification,omitempty"`
}
