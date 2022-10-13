package operations

import (
	"openapi/pkg/models/shared"
)

type RequestEventlogConfigHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RequestEventlogConfigRequest struct {
	Headers RequestEventlogConfigHeaders
}

type RequestEventlogConfigResponse struct {
	ContentType    string
	ErrorResponse  *shared.ErrorResponse
	EventlogConfig *shared.EventlogConfig
	StatusCode     int64
}
