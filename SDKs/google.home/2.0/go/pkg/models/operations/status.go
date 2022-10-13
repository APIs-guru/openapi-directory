package operations

import (
	"openapi/pkg/models/shared"
)

type StatusResponse struct {
	ContentType string
	Example110  *shared.Example110
	StatusCode  int64
}
