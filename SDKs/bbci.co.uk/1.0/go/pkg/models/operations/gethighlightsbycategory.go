package operations

import (
	"openapi/pkg/models/shared"
)

type GetHighlightsByCategoryPathParams struct {
	Category string `pathParam:"style=simple,explode=false,name=category"`
}

type GetHighlightsByCategoryQueryParams struct {
	Availability shared.AvailabilityEnum `queryParam:"style=form,explode=true,name=availability"`
	Lang         shared.LangEnum         `queryParam:"style=form,explode=true,name=lang"`
	Mixin        []string                `queryParam:"style=form,explode=true,name=mixin"`
	Rights       shared.RightsEnum       `queryParam:"style=form,explode=true,name=rights"`
}

type GetHighlightsByCategoryRequest struct {
	PathParams  GetHighlightsByCategoryPathParams
	QueryParams GetHighlightsByCategoryQueryParams
}

type GetHighlightsByCategoryResponse struct {
	ContentType string
	StatusCode  int64
	Ibl         *interface{}
}
