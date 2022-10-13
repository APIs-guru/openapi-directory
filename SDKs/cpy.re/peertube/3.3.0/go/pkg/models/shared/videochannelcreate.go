package shared

import (
	"time"
)

type VideoChannelCreateOwnerAccount struct {
	ID   *int64  `json:"id"`
	UUID *string `json:"uuid"`
}

type VideoChannelCreate struct {
	Description  *string                         `json:"description"`
	DisplayName  string                          `json:"displayName"`
	ID           map[string]interface{}          `json:"id"`
	IsLocal      *bool                           `json:"isLocal"`
	Name         string                          `json:"name"`
	OwnerAccount *VideoChannelCreateOwnerAccount `json:"ownerAccount"`
	Support      *string                         `json:"support"`
	UpdatedAt    *time.Time                      `json:"updatedAt"`
}
