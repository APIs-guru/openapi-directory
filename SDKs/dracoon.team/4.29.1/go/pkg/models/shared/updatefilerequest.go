package shared

import (
	"time"
)

type UpdateFileRequest struct {
	Classification        *int32            `json:"classification,omitempty"`
	Expiration            *ObjectExpiration `json:"expiration,omitempty"`
	Name                  *string           `json:"name,omitempty"`
	Notes                 *string           `json:"notes,omitempty"`
	TimestampCreation     *time.Time        `json:"timestampCreation,omitempty"`
	TimestampModification *time.Time        `json:"timestampModification,omitempty"`
}
