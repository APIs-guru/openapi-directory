package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveSystemRescueKeyPairQueryParams struct {
	Version *string `queryParam:"style=form,explode=true,name=version"`
}

type RemoveSystemRescueKeyPairHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type RemoveSystemRescueKeyPairRequest struct {
	QueryParams RemoveSystemRescueKeyPairQueryParams
	Headers     RemoveSystemRescueKeyPairHeaders
}

type RemoveSystemRescueKeyPairResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
