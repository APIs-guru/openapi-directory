package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteUsersMeAvatarSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DeleteUsersMeAvatarRequest struct {
	Security DeleteUsersMeAvatarSecurity
}

type DeleteUsersMeAvatarResponse struct {
	ContentType string
	StatusCode  int64
}
