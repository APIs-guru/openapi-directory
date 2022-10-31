package operations

import (
	"openapi/pkg/models/shared"
)

type LogsGetAllResponse struct {
	Body        []byte
	ContentType string
	Logs        []shared.Log
	StatusCode  int64
}
