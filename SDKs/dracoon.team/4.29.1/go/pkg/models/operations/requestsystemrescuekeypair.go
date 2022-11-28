package operations

import (
	"openapi/pkg/models/shared"
)

type RequestSystemRescueKeyPairQueryParams struct {
	Version *string `queryParam:"style=form,explode=true,name=version"`
}

type RequestSystemRescueKeyPairHeaders struct {
	XSdsAuthToken  *string      `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
}

type RequestSystemRescueKeyPairRequest struct {
	QueryParams RequestSystemRescueKeyPairQueryParams
	Headers     RequestSystemRescueKeyPairHeaders
}

type RequestSystemRescueKeyPairResponseOutput struct {
	ContentType          string
	ErrorResponse        *shared.ErrorResponse
	StatusCode           int64
	UserKeyPairContainer *shared.UserKeyPairContainerOutput
}
