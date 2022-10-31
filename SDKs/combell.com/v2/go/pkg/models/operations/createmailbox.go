package operations

import (
	"openapi/pkg/models/shared"
)

type CreateMailboxRequest struct {
	Request *shared.CreateMailboxRequest `request:"mediaType=application/json"`
}

type CreateMailboxResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
