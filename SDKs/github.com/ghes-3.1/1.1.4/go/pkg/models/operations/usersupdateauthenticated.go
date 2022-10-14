package operations

import (
	"openapi/pkg/models/shared"
)

type UsersUpdateAuthenticatedRequestBody struct {
	Bio             *string `json:"bio,omitempty"`
	Blog            *string `json:"blog,omitempty"`
	Company         *string `json:"company,omitempty"`
	Email           *string `json:"email,omitempty"`
	Hireable        *bool   `json:"hireable,omitempty"`
	Location        *string `json:"location,omitempty"`
	Name            *string `json:"name,omitempty"`
	TwitterUsername *string `json:"twitter_username,omitempty"`
}

type UsersUpdateAuthenticatedRequest struct {
	Request *UsersUpdateAuthenticatedRequestBody `request:"mediaType=application/json"`
}

type UsersUpdateAuthenticatedResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	PrivateUser     *shared.PrivateUser
	ValidationError *shared.ValidationError
}
