package operations

import (
	"openapi/pkg/models/shared"
)

type RebootandFactoryResetRequest struct {
	Request shared.RebootandFactoryResetRequest `request:"mediaType=application/json"`
}

type RebootandFactoryResetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
