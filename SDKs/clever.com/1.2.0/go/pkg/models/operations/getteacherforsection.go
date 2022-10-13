package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeacherForSectionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetTeacherForSectionRequest struct {
	PathParams GetTeacherForSectionPathParams
}

type GetTeacherForSectionResponse struct {
	ContentType     string
	NotFound        *shared.NotFound
	StatusCode      int64
	TeacherResponse *shared.TeacherResponse
}
