package operations

import (
	"openapi/pkg/models/shared"
)

type EnforceLoginPasswordChangeHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type EnforceLoginPasswordChangeRequest struct {
	Headers EnforceLoginPasswordChangeHeaders
}

type EnforceLoginPasswordChangeResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
