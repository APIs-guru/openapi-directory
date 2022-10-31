package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSystemDefaultsHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type UpdateSystemDefaultsRequest struct {
	Headers UpdateSystemDefaultsHeaders
	Request shared.UpdateSystemDefaults `request:"mediaType=application/json"`
}

type UpdateSystemDefaultsResponse struct {
	ContentType    string
	ErrorResponse  *shared.ErrorResponse
	StatusCode     int64
	SystemDefaults *shared.SystemDefaults
}
