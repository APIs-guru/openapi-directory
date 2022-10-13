package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeachersForDistrictPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetTeachersForDistrictQueryParams struct {
	EndingBefore  *string `queryParam:"style=form,explode=true,name=ending_before"`
	Limit         *int64  `queryParam:"style=form,explode=true,name=limit"`
	StartingAfter *string `queryParam:"style=form,explode=true,name=starting_after"`
	Where         *string `queryParam:"style=form,explode=true,name=where"`
}

type GetTeachersForDistrictRequest struct {
	PathParams  GetTeachersForDistrictPathParams
	QueryParams GetTeachersForDistrictQueryParams
}

type GetTeachersForDistrictResponse struct {
	ContentType      string
	NotFound         *shared.NotFound
	StatusCode       int64
	TeachersResponse *shared.TeachersResponse
}
