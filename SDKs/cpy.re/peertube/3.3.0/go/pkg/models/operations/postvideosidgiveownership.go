package operations

import (
	"openapi/pkg/models/shared"
)

type PostVideosIDGiveOwnershipPathParams struct {
	ID interface{} `pathParam:"style=simple,explode=false,name=id"`
}

type PostVideosIDGiveOwnershipRequestBody struct {
	Username string `form:"name=username"`
}

type PostVideosIDGiveOwnershipSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PostVideosIDGiveOwnershipRequest struct {
	PathParams PostVideosIDGiveOwnershipPathParams
	Request    PostVideosIDGiveOwnershipRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security   PostVideosIDGiveOwnershipSecurity
}

type PostVideosIDGiveOwnershipResponse struct {
	ContentType string
	StatusCode  int64
}
