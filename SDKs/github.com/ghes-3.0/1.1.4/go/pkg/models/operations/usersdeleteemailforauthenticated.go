package operations

import (
	"openapi/pkg/models/shared"
)

type UsersDeleteEmailForAuthenticatedRequestBody1 struct {
	Emails []string `json:"emails"`
}

type UsersDeleteEmailForAuthenticatedRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type UsersDeleteEmailForAuthenticatedResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	ValidationError *shared.ValidationError
}
