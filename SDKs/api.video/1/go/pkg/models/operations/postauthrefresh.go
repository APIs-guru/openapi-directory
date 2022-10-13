package operations

import (
	"openapi/pkg/models/shared"
)

type PostAuthRefreshRequest struct {
	Request *shared.RefreshTokenPayload `request:"mediaType=application/json"`
}

type PostAuthRefreshResponse struct {
	ContentType string
	StatusCode  int64
	AccessToken *shared.AccessToken
	BadRequest  *shared.BadRequest
}
