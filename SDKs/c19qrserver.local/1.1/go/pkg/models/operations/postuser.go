package operations

import (
	"openapi/pkg/models/shared"
)

type PostUserRequestBodySample struct {
	Admin    *bool   `json:"admin,omitempty"`
	Email    *string `json:"email,omitempty"`
	Name     *string `json:"name,omitempty"`
	ReadOnly *bool   `json:"read_only,omitempty"`
}

type PostUserRequest struct {
	Request PostUserRequestBodySample `request:"mediaType=application/json"`
}

type PostUserResponse struct {
	ContentType        string
	StatusCode         int64
	CreateUserResponse *shared.CreateUserResponse
	InvalidToken       *shared.InvalidToken
}
