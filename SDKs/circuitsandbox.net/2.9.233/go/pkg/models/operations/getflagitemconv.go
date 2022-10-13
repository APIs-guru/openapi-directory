package operations

import (
	"openapi/pkg/models/shared"
)

type GetFlagItemConvSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetFlagItemConvRequest struct {
	Security GetFlagItemConvSecurity
}

type GetFlagItemConvResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
