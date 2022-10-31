package operations

import (
	"openapi/pkg/models/shared"
)

type GetDistrictForSectionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetDistrictForSectionRequest struct {
	PathParams GetDistrictForSectionPathParams
}

type GetDistrictForSectionResponse struct {
	ContentType      string
	DistrictResponse *shared.DistrictResponse
	NotFound         *shared.NotFound
	StatusCode       int64
}
