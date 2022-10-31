package operations

import (
	"openapi/pkg/models/shared"
)

type PostServerFollowersNameWithHostRejectPathParams struct {
	NameWithHost string `pathParam:"style=simple,explode=false,name=nameWithHost"`
}

type PostServerFollowersNameWithHostRejectSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PostServerFollowersNameWithHostRejectRequest struct {
	PathParams PostServerFollowersNameWithHostRejectPathParams
	Security   PostServerFollowersNameWithHostRejectSecurity
}

type PostServerFollowersNameWithHostRejectResponse struct {
	ContentType string
	StatusCode  int64
}
