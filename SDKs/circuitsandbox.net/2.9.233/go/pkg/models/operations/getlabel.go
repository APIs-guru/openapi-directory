package operations

import (
	"openapi/pkg/models/shared"
)

type GetLabelSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetLabelRequest struct {
	Security GetLabelSecurity
}

type GetLabelResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
