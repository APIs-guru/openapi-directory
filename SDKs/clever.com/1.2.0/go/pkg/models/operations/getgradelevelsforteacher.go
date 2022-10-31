package operations

import (
	"openapi/pkg/models/shared"
)

type GetGradeLevelsForTeacherPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetGradeLevelsForTeacherRequest struct {
	PathParams GetGradeLevelsForTeacherPathParams
}

type GetGradeLevelsForTeacherResponse struct {
	ContentType         string
	GradeLevelsResponse *shared.GradeLevelsResponse
	NotFound            *shared.NotFound
	StatusCode          int64
}
