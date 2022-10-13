package shared

import (
	"time"
)

type CreateShareUploadChannelRequest struct {
	DirectS3Upload        *bool      `json:"directS3Upload"`
	Name                  string     `json:"name"`
	Password              *string    `json:"password"`
	Size                  *int64     `json:"size"`
	TimestampCreation     *time.Time `json:"timestampCreation"`
	TimestampModification *time.Time `json:"timestampModification"`
}
