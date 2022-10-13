package operations

import (
	"openapi/pkg/models/shared"
)

type GetSectionsForDistrictPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSectionsForDistrictQueryParams struct {
	EndingBefore  *string `queryParam:"style=form,explode=true,name=ending_before"`
	Limit         *int64  `queryParam:"style=form,explode=true,name=limit"`
	StartingAfter *string `queryParam:"style=form,explode=true,name=starting_after"`
	Where         *string `queryParam:"style=form,explode=true,name=where"`
}

type GetSectionsForDistrictRequest struct {
	PathParams  GetSectionsForDistrictPathParams
	QueryParams GetSectionsForDistrictQueryParams
}

type GetSectionsForDistrictResponse struct {
	ContentType      string
	NotFound         *shared.NotFound
	SectionsResponse *shared.SectionsResponse
	StatusCode       int64
}
