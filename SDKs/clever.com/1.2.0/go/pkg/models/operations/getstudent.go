package operations

import (
	"openapi/pkg/models/shared"
)

type GetStudentPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetStudentQueryParams struct {
	Include *string `queryParam:"style=form,explode=true,name=include"`
}

type GetStudentRequest struct {
	PathParams  GetStudentPathParams
	QueryParams GetStudentQueryParams
}

type GetStudentResponse struct {
	ContentType     string
	NotFound        *shared.NotFound
	StatusCode      int64
	StudentResponse *shared.StudentResponse
}
