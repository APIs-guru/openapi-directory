package operations

import (
	"openapi/pkg/models/shared"
)

type RequestSystemRescueKeyPairQueryParams struct {
	Version *string `queryParam:"style=form,explode=true,name=version"`
}

type RequestSystemRescueKeyPairHeaders struct {
	XSdsAuthToken  *string      `header:"name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"name=X-Sds-Date-Format"`
}

type RequestSystemRescueKeyPairRequest struct {
	QueryParams RequestSystemRescueKeyPairQueryParams
	Headers     RequestSystemRescueKeyPairHeaders
}

type RequestSystemRescueKeyPairResponse struct {
	ContentType          string
	ErrorResponse        *shared.ErrorResponse
	StatusCode           int64
	UserKeyPairContainer *shared.UserKeyPairContainer
}
