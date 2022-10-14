package operations

import (
	"openapi/pkg/models/shared"
)

type PutUsersMeNotificationSettingsRequestBody struct {
	AbuseAsModerator              *int64 `json:"abuseAsModerator,omitempty"`
	AutoInstanceFollowing         *int64 `json:"autoInstanceFollowing,omitempty"`
	BlacklistOnMyVideo            *int64 `json:"blacklistOnMyVideo,omitempty"`
	CommentMention                *int64 `json:"commentMention,omitempty"`
	MyVideoImportFinished         *int64 `json:"myVideoImportFinished,omitempty"`
	MyVideoPublished              *int64 `json:"myVideoPublished,omitempty"`
	NewCommentOnMyVideo           *int64 `json:"newCommentOnMyVideo,omitempty"`
	NewFollow                     *int64 `json:"newFollow,omitempty"`
	NewInstanceFollower           *int64 `json:"newInstanceFollower,omitempty"`
	NewUserRegistration           *int64 `json:"newUserRegistration,omitempty"`
	NewVideoFromSubscription      *int64 `json:"newVideoFromSubscription,omitempty"`
	VideoAutoBlacklistAsModerator *int64 `json:"videoAutoBlacklistAsModerator,omitempty"`
}

type PutUsersMeNotificationSettingsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PutUsersMeNotificationSettingsRequest struct {
	Request  *PutUsersMeNotificationSettingsRequestBody `request:"mediaType=application/json"`
	Security PutUsersMeNotificationSettingsSecurity
}

type PutUsersMeNotificationSettingsResponse struct {
	ContentType string
	StatusCode  int64
}
