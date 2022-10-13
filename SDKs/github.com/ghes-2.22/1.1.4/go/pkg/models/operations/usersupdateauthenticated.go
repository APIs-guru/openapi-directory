package operations

import (
	"openapi/pkg/models/shared"
)

type UsersUpdateAuthenticatedRequestBody struct {
	Bio             *string `json:"bio"`
	Blog            *string `json:"blog"`
	Company         *string `json:"company"`
	Email           *string `json:"email"`
	Hireable        *bool   `json:"hireable"`
	Location        *string `json:"location"`
	Name            *string `json:"name"`
	TwitterUsername *string `json:"twitter_username"`
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
