package operations

import (
	"openapi/pkg/models/shared"
)

type RequestSyslogConfigHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RequestSyslogConfigRequest struct {
	Headers RequestSyslogConfigHeaders
}

type RequestSyslogConfigResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
	SyslogConfig  *shared.SyslogConfig
}
