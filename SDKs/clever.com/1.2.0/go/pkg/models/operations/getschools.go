package operations

import (
	"openapi/pkg/models/shared"
)

type GetSchoolsQueryParams struct {
	EndingBefore  *string `queryParam:"style=form,explode=true,name=ending_before"`
	Limit         *int64  `queryParam:"style=form,explode=true,name=limit"`
	StartingAfter *string `queryParam:"style=form,explode=true,name=starting_after"`
	Where         *string `queryParam:"style=form,explode=true,name=where"`
}

type GetSchoolsRequest struct {
	QueryParams GetSchoolsQueryParams
}

type GetSchoolsResponse struct {
	ContentType     string
	SchoolsResponse *shared.SchoolsResponse
	StatusCode      int64
}
