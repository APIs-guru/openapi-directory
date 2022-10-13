package shared

import (
	"time"
)

type CreateFileUploadRequest struct {
	Classification        *int32            `json:"classification"`
	DirectS3Upload        *bool             `json:"directS3Upload"`
	Expiration            *ObjectExpiration `json:"expiration"`
	Name                  string            `json:"name"`
	Notes                 *string           `json:"notes"`
	ParentID              int64             `json:"parentId"`
	Size                  *int64            `json:"size"`
	TimestampCreation     *time.Time        `json:"timestampCreation"`
	TimestampModification *time.Time        `json:"timestampModification"`
}
