package operations

import (
	"openapi/pkg/models/shared"
)

type SetEqualizerValuesRequest struct {
	Request shared.SetEqualizerValuesRequest `request:"mediaType=application/json"`
}

type SetEqualizerValuesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
