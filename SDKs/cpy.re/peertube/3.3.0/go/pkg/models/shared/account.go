package shared

import (
	"time"
)

type Account struct {
	Avatar                *interface{}           `json:"avatar"`
	CreatedAt             *time.Time             `json:"createdAt"`
	Description           *string                `json:"description"`
	DisplayName           *string                `json:"displayName"`
	FollowersCount        *int64                 `json:"followersCount"`
	FollowingCount        *int64                 `json:"followingCount"`
	Host                  *string                `json:"host"`
	HostRedundancyAllowed *bool                  `json:"hostRedundancyAllowed"`
	ID                    *int64                 `json:"id"`
	Name                  *string                `json:"name"`
	UpdatedAt             *time.Time             `json:"updatedAt"`
	URL                   *string                `json:"url"`
	UserID                map[string]interface{} `json:"userId"`
}
