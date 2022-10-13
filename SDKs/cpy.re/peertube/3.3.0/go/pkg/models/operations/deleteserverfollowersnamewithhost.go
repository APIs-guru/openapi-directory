package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteServerFollowersNameWithHostPathParams struct {
	NameWithHost string `pathParam:"style=simple,explode=false,name=nameWithHost"`
}

type DeleteServerFollowersNameWithHostSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DeleteServerFollowersNameWithHostRequest struct {
	PathParams DeleteServerFollowersNameWithHostPathParams
	Security   DeleteServerFollowersNameWithHostSecurity
}

type DeleteServerFollowersNameWithHostResponse struct {
	ContentType string
	StatusCode  int64
}
