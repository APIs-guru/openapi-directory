package operations

import (
	"openapi/pkg/models/shared"
)

type GetXsdResponse struct {
	Body        []byte
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
