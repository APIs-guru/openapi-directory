package operations

import (
	"openapi/pkg/models/shared"
)

type SetProgressPathParams struct {
	ID interface{} `pathParam:"style=simple,explode=false,name=id"`
}

type SetProgressSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type SetProgressRequest struct {
	PathParams SetProgressPathParams
	Request    interface{} `request:"mediaType=application/json"`
	Security   SetProgressSecurity
}

type SetProgressResponse struct {
	ContentType string
	StatusCode  int64
}
