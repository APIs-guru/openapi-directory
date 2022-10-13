package shared

import (
	"time"
)

type UpdateFileRequest struct {
	Classification        *int32            `json:"classification"`
	Expiration            *ObjectExpiration `json:"expiration"`
	Name                  *string           `json:"name"`
	Notes                 *string           `json:"notes"`
	TimestampCreation     *time.Time        `json:"timestampCreation"`
	TimestampModification *time.Time        `json:"timestampModification"`
}
