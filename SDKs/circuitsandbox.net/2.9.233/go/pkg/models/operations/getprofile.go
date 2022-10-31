package operations

import (
	"openapi/pkg/models/shared"
)

type GetProfileSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetProfileRequest struct {
	Security GetProfileSecurity
}

type GetProfileResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
