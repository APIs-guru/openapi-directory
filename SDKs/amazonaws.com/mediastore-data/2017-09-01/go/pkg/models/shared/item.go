package shared

import (
	"time"
)

type Item struct {
	ContentLength *int64        `json:"ContentLength"`
	ContentType   *string       `json:"ContentType"`
	ETag          *string       `json:"ETag"`
	LastModified  *time.Time    `json:"LastModified"`
	Name          *string       `json:"Name"`
	Type          *ItemTypeEnum `json:"Type"`
}
