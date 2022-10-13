package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUploadSharesHeaders struct {
	XSdsAuthToken  *string      `header:"name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"name=X-Sds-Date-Format"`
}

type UpdateUploadSharesRequest struct {
	Headers UpdateUploadSharesHeaders
	Request shared.UpdateUploadSharesBulkRequest `request:"mediaType=application/json"`
}

type UpdateUploadSharesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
