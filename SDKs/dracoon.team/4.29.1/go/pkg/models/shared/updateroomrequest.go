package shared

import (
	"time"
)

type UpdateRoomRequest struct {
	Name                  *string    `json:"name"`
	Notes                 *string    `json:"notes"`
	Quota                 *int64     `json:"quota"`
	TimestampCreation     *time.Time `json:"timestampCreation"`
	TimestampModification *time.Time `json:"timestampModification"`
}
