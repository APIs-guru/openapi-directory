package shared

import (
	"time"
)

type Account struct {
	Avatar                *interface{}           `json:"avatar,omitempty"`
	CreatedAt             *time.Time             `json:"createdAt,omitempty"`
	Description           *string                `json:"description,omitempty"`
	DisplayName           *string                `json:"displayName,omitempty"`
	FollowersCount        *int64                 `json:"followersCount,omitempty"`
	FollowingCount        *int64                 `json:"followingCount,omitempty"`
	Host                  *string                `json:"host,omitempty"`
	HostRedundancyAllowed *bool                  `json:"hostRedundancyAllowed,omitempty"`
	ID                    *int64                 `json:"id,omitempty"`
	Name                  *string                `json:"name,omitempty"`
	UpdatedAt             *time.Time             `json:"updatedAt,omitempty"`
	URL                   *string                `json:"url,omitempty"`
	UserID                map[string]interface{} `json:"userId,omitempty"`
}
