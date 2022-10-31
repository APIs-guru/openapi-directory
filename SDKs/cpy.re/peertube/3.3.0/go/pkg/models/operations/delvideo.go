package operations

import (
	"openapi/pkg/models/shared"
)

type DelVideoPathParams struct {
	ID interface{} `pathParam:"style=simple,explode=false,name=id"`
}

type DelVideoSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DelVideoRequest struct {
	PathParams DelVideoPathParams
	Security   DelVideoSecurity
}

type DelVideoResponse struct {
	ContentType string
	StatusCode  int64
}
