package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeachersForStudentPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetTeachersForStudentQueryParams struct {
	EndingBefore  *string `queryParam:"style=form,explode=true,name=ending_before"`
	Limit         *int64  `queryParam:"style=form,explode=true,name=limit"`
	StartingAfter *string `queryParam:"style=form,explode=true,name=starting_after"`
}

type GetTeachersForStudentRequest struct {
	PathParams  GetTeachersForStudentPathParams
	QueryParams GetTeachersForStudentQueryParams
}

type GetTeachersForStudentResponse struct {
	ContentType      string
	NotFound         *shared.NotFound
	StatusCode       int64
	TeachersResponse *shared.TeachersResponse
}
