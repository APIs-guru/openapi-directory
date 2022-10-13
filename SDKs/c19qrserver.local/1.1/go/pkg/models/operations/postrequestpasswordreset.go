package operations

import (
	"openapi/pkg/models/shared"
)

type PostRequestPasswordResetRequestBodySample struct {
	Email *string `json:"email"`
}

type PostRequestPasswordResetRequest struct {
	Request PostRequestPasswordResetRequestBodySample `request:"mediaType=application/json"`
}

type PostRequestPasswordResetResponse struct {
	ContentType                  string
	StatusCode                   int64
	InvalidToken                 *shared.InvalidToken
	RequestPasswordResetResponse *shared.RequestPasswordResetResponse
}
