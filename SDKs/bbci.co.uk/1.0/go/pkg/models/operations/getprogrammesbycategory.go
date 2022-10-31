package operations

import (
	"openapi/pkg/models/shared"
)

type GetProgrammesByCategoryPathParams struct {
	Category string `pathParam:"style=simple,explode=false,name=category"`
}

type GetProgrammesByCategoryQueryParams struct {
	Availability shared.AvailabilityEnum `queryParam:"style=form,explode=true,name=availability"`
	Lang         shared.LangEnum         `queryParam:"style=form,explode=true,name=lang"`
	Page         int64                   `queryParam:"style=form,explode=true,name=page"`
	PerPage      int64                   `queryParam:"style=form,explode=true,name=per_page"`
	Rights       shared.RightsEnum       `queryParam:"style=form,explode=true,name=rights"`
}

type GetProgrammesByCategoryRequest struct {
	PathParams  GetProgrammesByCategoryPathParams
	QueryParams GetProgrammesByCategoryQueryParams
}

type GetProgrammesByCategoryResponse struct {
	ContentType string
	StatusCode  int64
	Ibl         *interface{}
}
