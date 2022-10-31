package operations

import (
	"openapi/pkg/models/shared"
)

type AppDeviceIDRequest struct {
	Request shared.AppDeviceIDRequest `request:"mediaType=application/json"`
}

type AppDeviceIDResponse struct {
	ContentType string
	Example11   *shared.Example11
	StatusCode  int64
}
