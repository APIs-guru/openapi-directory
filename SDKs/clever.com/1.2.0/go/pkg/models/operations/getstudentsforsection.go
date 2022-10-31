package operations

import (
	"openapi/pkg/models/shared"
)

type GetStudentsForSectionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetStudentsForSectionQueryParams struct {
	EndingBefore  *string `queryParam:"style=form,explode=true,name=ending_before"`
	Limit         *int64  `queryParam:"style=form,explode=true,name=limit"`
	StartingAfter *string `queryParam:"style=form,explode=true,name=starting_after"`
}

type GetStudentsForSectionRequest struct {
	PathParams  GetStudentsForSectionPathParams
	QueryParams GetStudentsForSectionQueryParams
}

type GetStudentsForSectionResponse struct {
	ContentType      string
	NotFound         *shared.NotFound
	StatusCode       int64
	StudentsResponse *shared.StudentsResponse
}
