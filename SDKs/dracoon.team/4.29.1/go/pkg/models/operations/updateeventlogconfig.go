package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEventlogConfigHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type UpdateEventlogConfigRequest struct {
	Headers UpdateEventlogConfigHeaders
	Request shared.UpdateEventlogConfig `request:"mediaType=application/json"`
}

type UpdateEventlogConfigResponse struct {
	ContentType    string
	ErrorResponse  *shared.ErrorResponse
	EventlogConfig *shared.EventlogConfig
	StatusCode     int64
}
