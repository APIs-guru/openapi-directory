package operations

import (
	"openapi/pkg/models/shared"
)

type DelUserPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DelUserSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DelUserRequest struct {
	PathParams DelUserPathParams
	Security   DelUserSecurity
}

type DelUserResponse struct {
	ContentType string
	StatusCode  int64
}
