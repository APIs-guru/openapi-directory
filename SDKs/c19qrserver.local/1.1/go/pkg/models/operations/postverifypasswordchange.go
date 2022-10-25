package operations

import (
	"openapi/pkg/models/shared"
)

type PostVerifyPasswordChangeSample struct {
	GUID     *string `json:"guid,omitempty"`
	Password *string `json:"password,omitempty"`
}

type PostVerifyPasswordChangeRequest struct {
	Request PostVerifyPasswordChangeSample `request:"mediaType=application/json"`
}

type PostVerifyPasswordChangeResponse struct {
	ContentType  string
	StatusCode   int64
	InvalidToken *shared.InvalidToken
}
