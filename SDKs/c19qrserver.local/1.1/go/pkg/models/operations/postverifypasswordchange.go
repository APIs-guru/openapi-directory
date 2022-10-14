package operations

import (
	"openapi/pkg/models/shared"
)

type PostVerifyPasswordChangeRequestBodySample struct {
	GUID     *string `json:"guid,omitempty"`
	Password *string `json:"password,omitempty"`
}

type PostVerifyPasswordChangeRequest struct {
	Request PostVerifyPasswordChangeRequestBodySample `request:"mediaType=application/json"`
}

type PostVerifyPasswordChangeResponse struct {
	ContentType  string
	StatusCode   int64
	InvalidToken *shared.InvalidToken
}
