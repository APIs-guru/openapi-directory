package operations

import (
	"openapi/pkg/models/shared"
)

type CheckReadyStatusRequest struct {
	Request shared.CheckReadyStatusRequest `request:"mediaType=application/json"`
}

type CheckReadyStatusResponse struct {
	ContentType string
	Example13   *shared.Example13
	StatusCode  int64
}
