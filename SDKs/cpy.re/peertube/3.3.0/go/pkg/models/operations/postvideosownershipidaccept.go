package operations

import (
	"openapi/pkg/models/shared"
)

type PostVideosOwnershipIDAcceptPathParams struct {
	ID interface{} `pathParam:"style=simple,explode=false,name=id"`
}

type PostVideosOwnershipIDAcceptSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PostVideosOwnershipIDAcceptRequest struct {
	PathParams PostVideosOwnershipIDAcceptPathParams
	Security   PostVideosOwnershipIDAcceptSecurity
}

type PostVideosOwnershipIDAcceptResponse struct {
	ContentType string
	StatusCode  int64
}
