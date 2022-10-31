package operations

import (
	"openapi/pkg/models/shared"
)

type GetPostRollsPathParams struct {
	Pid string `pathParam:"style=simple,explode=false,name=pid"`
}

type GetPostRollsQueryParams struct {
	Availability shared.AvailabilityEnum `queryParam:"style=form,explode=true,name=availability"`
	Rights       shared.RightsEnum       `queryParam:"style=form,explode=true,name=rights"`
}

type GetPostRollsRequest struct {
	PathParams  GetPostRollsPathParams
	QueryParams GetPostRollsQueryParams
}

type GetPostRollsResponse struct {
	ContentType string
	StatusCode  int64
	Ibl         *interface{}
}
