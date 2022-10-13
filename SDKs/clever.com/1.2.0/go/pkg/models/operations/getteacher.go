package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeacherPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetTeacherQueryParams struct {
	Include *string `queryParam:"style=form,explode=true,name=include"`
}

type GetTeacherRequest struct {
	PathParams  GetTeacherPathParams
	QueryParams GetTeacherQueryParams
}

type GetTeacherResponse struct {
	ContentType     string
	NotFound        *shared.NotFound
	StatusCode      int64
	TeacherResponse *shared.TeacherResponse
}
