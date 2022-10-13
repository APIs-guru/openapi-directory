package operations

import (
	"openapi/pkg/models/shared"
)

type GetIPAddressesQueryParams struct {
	Cursor  *string `queryParam:"style=form,explode=true,name=cursor"`
	PerPage *int32  `queryParam:"style=form,explode=true,name=per_page"`
}

type GetIPAddressesRequest struct {
	QueryParams GetIPAddressesQueryParams
}

type GetIPAddressesResponse struct {
	ContentType       string
	IPAddressEntities []shared.IPAddressEntity
	StatusCode        int64
}
