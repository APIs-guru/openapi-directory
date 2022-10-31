package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeachersQueryParams struct {
	EndingBefore  *string `queryParam:"style=form,explode=true,name=ending_before"`
	Limit         *int64  `queryParam:"style=form,explode=true,name=limit"`
	StartingAfter *string `queryParam:"style=form,explode=true,name=starting_after"`
	Where         *string `queryParam:"style=form,explode=true,name=where"`
}

type GetTeachersRequest struct {
	QueryParams GetTeachersQueryParams
}

type GetTeachersResponse struct {
	ContentType      string
	StatusCode       int64
	TeachersResponse *shared.TeachersResponse
}
