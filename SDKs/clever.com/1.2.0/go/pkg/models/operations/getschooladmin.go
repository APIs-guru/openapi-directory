package operations

import (
	"openapi/pkg/models/shared"
)

type GetSchoolAdminPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSchoolAdminQueryParams struct {
	Include *string `queryParam:"style=form,explode=true,name=include"`
}

type GetSchoolAdminRequest struct {
	PathParams  GetSchoolAdminPathParams
	QueryParams GetSchoolAdminQueryParams
}

type GetSchoolAdminResponse struct {
	ContentType         string
	NotFound            *shared.NotFound
	SchoolAdminResponse *shared.SchoolAdminResponse
	StatusCode          int64
}
