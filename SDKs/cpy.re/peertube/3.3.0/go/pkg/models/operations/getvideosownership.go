package operations

import (
	"openapi/pkg/models/shared"
)

type GetVideosOwnershipSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetVideosOwnershipRequest struct {
	Security GetVideosOwnershipSecurity
}

type GetVideosOwnershipResponse struct {
	ContentType string
	StatusCode  int64
}
