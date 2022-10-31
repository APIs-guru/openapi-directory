package operations

import (
	"openapi/pkg/models/shared"
)

type GetSchoolAdminsQueryParams struct {
	EndingBefore  *string `queryParam:"style=form,explode=true,name=ending_before"`
	Limit         *int64  `queryParam:"style=form,explode=true,name=limit"`
	StartingAfter *string `queryParam:"style=form,explode=true,name=starting_after"`
	Where         *string `queryParam:"style=form,explode=true,name=where"`
}

type GetSchoolAdminsRequest struct {
	QueryParams GetSchoolAdminsQueryParams
}

type GetSchoolAdminsResponse struct {
	ContentType          string
	SchoolAdminsResponse *shared.SchoolAdminsResponse
	StatusCode           int64
}
