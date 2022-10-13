package operations

import (
	"openapi/pkg/models/shared"
)

type GetProfileSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type GetProfileRequest struct {
	Security GetProfileSecurity
}

type GetProfileResponse struct {
	ContentType string
	Profile     *shared.Profile
	StatusCode  int64
}
