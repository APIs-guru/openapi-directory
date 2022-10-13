package shared

import (
	"time"
)

type ExternalConnection struct {
	AccessToken       *string    `json:"AccessToken"`
	AccessTokenSecret *string    `json:"AccessTokenSecret"`
	Data              *string    `json:"Data"`
	ExpiresOn         *time.Time `json:"ExpiresOn"`
	ExternalUserID    *string    `json:"ExternalUserId"`
	ExternalUsername  *string    `json:"ExternalUsername"`
	ID                *int32     `json:"Id"`
	Provider          *string    `json:"Provider"`
	UserID            *int32     `json:"UserId"`
}
