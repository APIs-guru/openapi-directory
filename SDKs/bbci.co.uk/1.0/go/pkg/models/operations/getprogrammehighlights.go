package operations

import (
	"openapi/pkg/models/shared"
)

type GetProgrammeHighlightsQueryParams struct {
	Availability shared.AvailabilityEnum `queryParam:"style=form,explode=true,name=availability"`
	Lang         shared.LangEnum         `queryParam:"style=form,explode=true,name=lang"`
	Mixin        []string                `queryParam:"style=form,explode=true,name=mixin"`
	Rights       shared.RightsEnum       `queryParam:"style=form,explode=true,name=rights"`
}

type GetProgrammeHighlightsRequest struct {
	QueryParams GetProgrammeHighlightsQueryParams
}

type GetProgrammeHighlightsResponse struct {
	ContentType string
	StatusCode  int64
	Ibl         *interface{}
}
