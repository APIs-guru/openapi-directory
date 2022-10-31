package operations

import (
	"openapi/pkg/models/shared"
)

type GetSchoolsForDistrictPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSchoolsForDistrictQueryParams struct {
	EndingBefore  *string `queryParam:"style=form,explode=true,name=ending_before"`
	Limit         *int64  `queryParam:"style=form,explode=true,name=limit"`
	StartingAfter *string `queryParam:"style=form,explode=true,name=starting_after"`
	Where         *string `queryParam:"style=form,explode=true,name=where"`
}

type GetSchoolsForDistrictRequest struct {
	PathParams  GetSchoolsForDistrictPathParams
	QueryParams GetSchoolsForDistrictQueryParams
}

type GetSchoolsForDistrictResponse struct {
	ContentType     string
	NotFound        *shared.NotFound
	SchoolsResponse *shared.SchoolsResponse
	StatusCode      int64
}
