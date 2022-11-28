package shared

import (
	"time"
)

type FireteamFireteamMember struct {
	BungieNetUserInfo               *UserUserInfoCard
	CharacterID                     *int64
	DateJoined                      *time.Time
	DestinyUserInfo                 *FireteamFireteamUserInfoCard
	HasMicrophone                   *bool
	LastPlatformInviteAttemptDate   *time.Time
	LastPlatformInviteAttemptResult *int64
}
