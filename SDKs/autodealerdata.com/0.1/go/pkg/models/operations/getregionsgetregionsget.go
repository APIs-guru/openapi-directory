package operations

import (
	"openapi/pkg/models/shared"
)

type GetRegionsGetRegionsGetQueryParams struct {
	Jwt string `queryParam:"style=form,explode=true,name=jwt"`
}

type GetRegionsGetRegionsGetRequest struct {
	QueryParams GetRegionsGetRegionsGetQueryParams
}

type GetRegionsGetRegionsGetResponse struct {
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	RegionResp          *shared.RegionResp
	StatusCode          int64
}
