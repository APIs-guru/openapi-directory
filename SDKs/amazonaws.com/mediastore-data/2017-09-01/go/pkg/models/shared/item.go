package shared

import (
	"time"
)

type Item struct {
	ContentLength *int64        `json:"ContentLength,omitempty"`
	ContentType   *string       `json:"ContentType,omitempty"`
	ETag          *string       `json:"ETag,omitempty"`
	LastModified  *time.Time    `json:"LastModified,omitempty"`
	Name          *string       `json:"Name,omitempty"`
	Type          *ItemTypeEnum `json:"Type,omitempty"`
}
