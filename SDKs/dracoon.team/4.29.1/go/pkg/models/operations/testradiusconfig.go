package operations

import (
	"openapi/pkg/models/shared"
)

type TestRadiusConfigHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type TestRadiusConfigRequest struct {
	Headers TestRadiusConfigHeaders
}

type TestRadiusConfigResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
