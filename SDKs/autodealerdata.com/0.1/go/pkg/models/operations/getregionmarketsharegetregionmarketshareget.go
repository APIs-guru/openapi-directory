package operations

import (
	"openapi/pkg/models/shared"
)

type GetRegionMarketShareGetRegionMarketShareGetQueryParams struct {
	Jwt        string  `queryParam:"style=form,explode=true,name=jwt"`
	RegionName *string `queryParam:"style=form,explode=true,name=regionName"`
}

type GetRegionMarketShareGetRegionMarketShareGetRequest struct {
	QueryParams GetRegionMarketShareGetRegionMarketShareGetQueryParams
}

type GetRegionMarketShareGetRegionMarketShareGetResponse struct {
	ContentType         string
	GenericResponse     *shared.GenericResponse
	HTTPValidationError *shared.HTTPValidationError
	StatusCode          int64
}
