package shared

import (
"time")


type UserWithStatsRoleLabelEnum string

const (
    UserWithStatsRoleLabelEnumUser UserWithStatsRoleLabelEnum = "User"
UserWithStatsRoleLabelEnumModerator UserWithStatsRoleLabelEnum = "Moderator"
UserWithStatsRoleLabelEnumAdministrator UserWithStatsRoleLabelEnum = "Administrator"
)


type UserWithStats struct {
    AbusesAcceptedCount *int64 `json:"abusesAcceptedCount,omitempty"`
    AbusesCount *int64 `json:"abusesCount,omitempty"`
    AbusesCreatedCount *int64 `json:"abusesCreatedCount,omitempty"`
    Account *Account `json:"account,omitempty"`
    AutoPlayNextVideo *bool `json:"autoPlayNextVideo,omitempty"`
    AutoPlayNextVideoPlaylist *bool `json:"autoPlayNextVideoPlaylist,omitempty"`
    AutoPlayVideo *bool `json:"autoPlayVideo,omitempty"`
    Blocked *bool `json:"blocked,omitempty"`
    BlockedReason *string `json:"blockedReason,omitempty"`
    CreatedAt *string `json:"createdAt,omitempty"`
    Email *string `json:"email,omitempty"`
    EmailVerified *bool `json:"emailVerified,omitempty"`
    ID map[string]interface{} `json:"id,omitempty"`
    LastLoginDate *time.Time `json:"lastLoginDate,omitempty"`
    NoInstanceConfigWarningModal *bool `json:"noInstanceConfigWarningModal,omitempty"`
    NoWelcomeModal *bool `json:"noWelcomeModal,omitempty"`
    NsfwPolicy *NsfwPolicyEnum `json:"nsfwPolicy,omitempty"`
    PluginAuth *string `json:"pluginAuth,omitempty"`
    Role *int64 `json:"role,omitempty"`
    RoleLabel *UserWithStatsRoleLabelEnum `json:"roleLabel,omitempty"`
    Theme *string `json:"theme,omitempty"`
    Username *string `json:"username,omitempty"`
    VideoChannels []interface{} `json:"videoChannels,omitempty"`
    VideoCommentsCount *int64 `json:"videoCommentsCount,omitempty"`
    VideoQuota *int64 `json:"videoQuota,omitempty"`
    VideoQuotaDaily *int64 `json:"videoQuotaDaily,omitempty"`
    VideosCount *int64 `json:"videosCount,omitempty"`
    WebtorrentEnabled *bool `json:"webtorrentEnabled,omitempty"`
    
}

