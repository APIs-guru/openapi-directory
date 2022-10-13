package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteServerFollowingHostOrHandlePathParams struct {
	HostOrHandle string `pathParam:"style=simple,explode=false,name=hostOrHandle"`
}

type DeleteServerFollowingHostOrHandleSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DeleteServerFollowingHostOrHandleRequest struct {
	PathParams DeleteServerFollowingHostOrHandlePathParams
	Security   DeleteServerFollowingHostOrHandleSecurity
}

type DeleteServerFollowingHostOrHandleResponse struct {
	ContentType string
	StatusCode  int64
}
