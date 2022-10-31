package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveUserKeyPairQueryParams struct {
	Version *string `queryParam:"style=form,explode=true,name=version"`
}

type RemoveUserKeyPairHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type RemoveUserKeyPairRequest struct {
	QueryParams RemoveUserKeyPairQueryParams
	Headers     RemoveUserKeyPairHeaders
}

type RemoveUserKeyPairResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
