package shared

import (
	"time"
)

// Upload
// Metadata returned for an upload operation.
type Upload struct {
	AccountID          *string    `json:"accountId,omitempty"`
	CustomDataSourceID *string    `json:"customDataSourceId,omitempty"`
	Errors             []string   `json:"errors,omitempty"`
	ID                 *string    `json:"id,omitempty"`
	Kind               *string    `json:"kind,omitempty"`
	Status             *string    `json:"status,omitempty"`
	UploadTime         *time.Time `json:"uploadTime,omitempty"`
}
