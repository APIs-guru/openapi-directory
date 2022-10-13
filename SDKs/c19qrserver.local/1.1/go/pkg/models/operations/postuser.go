package operations

import (
	"openapi/pkg/models/shared"
)

type PostUserRequestBodySample struct {
	Admin    *bool   `json:"admin"`
	Email    *string `json:"email"`
	Name     *string `json:"name"`
	ReadOnly *bool   `json:"read_only"`
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
