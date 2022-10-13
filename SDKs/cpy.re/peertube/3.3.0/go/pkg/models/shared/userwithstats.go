package shared

import (
	"time"
)

type UserWithStatsRoleLabelEnum string

const (
	UserWithStatsRoleLabelEnumUser          UserWithStatsRoleLabelEnum = "User"
	UserWithStatsRoleLabelEnumModerator     UserWithStatsRoleLabelEnum = "Moderator"
	UserWithStatsRoleLabelEnumAdministrator UserWithStatsRoleLabelEnum = "Administrator"
)

type UserWithStats struct {
	AbusesAcceptedCount          *int64                      `json:"abusesAcceptedCount"`
	AbusesCount                  *int64                      `json:"abusesCount"`
	AbusesCreatedCount           *int64                      `json:"abusesCreatedCount"`
	Account                      *Account                    `json:"account"`
	AutoPlayNextVideo            *bool                       `json:"autoPlayNextVideo"`
	AutoPlayNextVideoPlaylist    *bool                       `json:"autoPlayNextVideoPlaylist"`
	AutoPlayVideo                *bool                       `json:"autoPlayVideo"`
	Blocked                      *bool                       `json:"blocked"`
	BlockedReason                *string                     `json:"blockedReason"`
	CreatedAt                    *string                     `json:"createdAt"`
	Email                        *string                     `json:"email"`
	EmailVerified                *bool                       `json:"emailVerified"`
	ID                           map[string]interface{}      `json:"id"`
	LastLoginDate                *time.Time                  `json:"lastLoginDate"`
	NoInstanceConfigWarningModal *bool                       `json:"noInstanceConfigWarningModal"`
	NoWelcomeModal               *bool                       `json:"noWelcomeModal"`
	NsfwPolicy                   *NsfwPolicyEnum             `json:"nsfwPolicy"`
	PluginAuth                   *string                     `json:"pluginAuth"`
	Role                         *int64                      `json:"role"`
	RoleLabel                    *UserWithStatsRoleLabelEnum `json:"roleLabel"`
	Theme                        *string                     `json:"theme"`
	Username                     *string                     `json:"username"`
	VideoChannels                []interface{}               `json:"videoChannels"`
	VideoCommentsCount           *int64                      `json:"videoCommentsCount"`
	VideoQuota                   *int64                      `json:"videoQuota"`
	VideoQuotaDaily              *int64                      `json:"videoQuotaDaily"`
	VideosCount                  *int64                      `json:"videosCount"`
	WebtorrentEnabled            *bool                       `json:"webtorrentEnabled"`
}
