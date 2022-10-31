package operations

import (
	"openapi/pkg/models/shared"
)

type SetUserFileKeysHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type SetUserFileKeysRequest struct {
	Headers SetUserFileKeysHeaders
	Request shared.UserFileKeySetBatchRequest `request:"mediaType=application/json"`
}

type SetUserFileKeysResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
