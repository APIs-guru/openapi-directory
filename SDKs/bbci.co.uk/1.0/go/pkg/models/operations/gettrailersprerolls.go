package operations

import (
	"openapi/pkg/models/shared"
)

type GetTrailersPreRollsPathParams struct {
	Pid string `pathParam:"style=simple,explode=false,name=pid"`
}

type GetTrailersPreRollsQueryParams struct {
	Availability shared.AvailabilityEnum `queryParam:"style=form,explode=true,name=availability"`
	Rights       shared.RightsEnum       `queryParam:"style=form,explode=true,name=rights"`
}

type GetTrailersPreRollsRequest struct {
	PathParams  GetTrailersPreRollsPathParams
	QueryParams GetTrailersPreRollsQueryParams
}

type GetTrailersPreRollsResponse struct {
	ContentType string
	StatusCode  int64
	Ibl         *interface{}
}
