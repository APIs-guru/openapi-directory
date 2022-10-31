package operations

import (
	"openapi/pkg/models/shared"
)

type ChangeDiscoverabilityRequest struct {
	Request shared.ChangeDiscoverabilityRequest `request:"mediaType=application/json"`
}

type ChangeDiscoverabilityResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
