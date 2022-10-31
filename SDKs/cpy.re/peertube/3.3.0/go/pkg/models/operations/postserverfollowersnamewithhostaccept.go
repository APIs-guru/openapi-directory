package operations

import (
	"openapi/pkg/models/shared"
)

type PostServerFollowersNameWithHostAcceptPathParams struct {
	NameWithHost string `pathParam:"style=simple,explode=false,name=nameWithHost"`
}

type PostServerFollowersNameWithHostAcceptSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PostServerFollowersNameWithHostAcceptRequest struct {
	PathParams PostServerFollowersNameWithHostAcceptPathParams
	Security   PostServerFollowersNameWithHostAcceptSecurity
}

type PostServerFollowersNameWithHostAcceptResponse struct {
	ContentType string
	StatusCode  int64
}
