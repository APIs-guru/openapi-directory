package shared

import (
	"time"
)

type VideoChannelUpdateOwnerAccount struct {
	ID   *int64  `json:"id"`
	UUID *string `json:"uuid"`
}

type VideoChannelUpdate struct {
	BulkVideosSupportUpdate *bool                           `json:"bulkVideosSupportUpdate"`
	Description             *string                         `json:"description"`
	DisplayName             *string                         `json:"displayName"`
	ID                      map[string]interface{}          `json:"id"`
	IsLocal                 *bool                           `json:"isLocal"`
	OwnerAccount            *VideoChannelUpdateOwnerAccount `json:"ownerAccount"`
	Support                 *string                         `json:"support"`
	UpdatedAt               *time.Time                      `json:"updatedAt"`
}
