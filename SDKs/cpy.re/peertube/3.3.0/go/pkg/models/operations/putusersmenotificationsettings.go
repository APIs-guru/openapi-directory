package operations

import (
	"openapi/pkg/models/shared"
)

type PutUsersMeNotificationSettingsRequestBody struct {
	AbuseAsModerator              *int64 `json:"abuseAsModerator"`
	AutoInstanceFollowing         *int64 `json:"autoInstanceFollowing"`
	BlacklistOnMyVideo            *int64 `json:"blacklistOnMyVideo"`
	CommentMention                *int64 `json:"commentMention"`
	MyVideoImportFinished         *int64 `json:"myVideoImportFinished"`
	MyVideoPublished              *int64 `json:"myVideoPublished"`
	NewCommentOnMyVideo           *int64 `json:"newCommentOnMyVideo"`
	NewFollow                     *int64 `json:"newFollow"`
	NewInstanceFollower           *int64 `json:"newInstanceFollower"`
	NewUserRegistration           *int64 `json:"newUserRegistration"`
	NewVideoFromSubscription      *int64 `json:"newVideoFromSubscription"`
	VideoAutoBlacklistAsModerator *int64 `json:"videoAutoBlacklistAsModerator"`
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
