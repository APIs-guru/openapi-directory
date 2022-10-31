package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeachersForSectionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetTeachersForSectionQueryParams struct {
	EndingBefore  *string `queryParam:"style=form,explode=true,name=ending_before"`
	Limit         *int64  `queryParam:"style=form,explode=true,name=limit"`
	StartingAfter *string `queryParam:"style=form,explode=true,name=starting_after"`
}

type GetTeachersForSectionRequest struct {
	PathParams  GetTeachersForSectionPathParams
	QueryParams GetTeachersForSectionQueryParams
}

type GetTeachersForSectionResponse struct {
	ContentType      string
	NotFound         *shared.NotFound
	StatusCode       int64
	TeachersResponse *shared.TeachersResponse
}
