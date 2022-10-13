package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSyslogConfigHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type UpdateSyslogConfigRequest struct {
	Headers UpdateSyslogConfigHeaders
	Request shared.UpdateSyslogConfig `request:"mediaType=application/json"`
}

type UpdateSyslogConfigResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
	SyslogConfig  *shared.SyslogConfig
}
