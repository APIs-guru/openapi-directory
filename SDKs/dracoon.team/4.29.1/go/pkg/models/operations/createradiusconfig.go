package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRadiusConfigHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type CreateRadiusConfigRequest struct {
	Headers CreateRadiusConfigHeaders
	Request shared.RadiusConfigCreateRequest `request:"mediaType=application/json"`
}

type CreateRadiusConfigResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	RadiusConfig  *shared.RadiusConfig
	StatusCode    int64
}
