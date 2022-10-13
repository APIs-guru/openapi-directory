package operations

import (
	"openapi/pkg/models/shared"
)

type RequestSoftwareVersionHeaders struct {
	XSdsDateFormat *interface{} `header:"name=X-Sds-Date-Format"`
}

type RequestSoftwareVersionRequest struct {
	Headers RequestSoftwareVersionHeaders
}

type RequestSoftwareVersionResponse struct {
	ContentType         string
	ErrorResponse       *shared.ErrorResponse
	SoftwareVersionData *shared.SoftwareVersionData
	StatusCode          int64
}
