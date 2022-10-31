package operations

import (
	"openapi/pkg/models/shared"
)

type GetProgrammesByChannelPathParams struct {
	Channel string `pathParam:"style=simple,explode=false,name=channel"`
}

type GetProgrammesByChannelQueryParams struct {
	Availability shared.AvailabilityEnum `queryParam:"style=form,explode=true,name=availability"`
	Lang         shared.LangEnum         `queryParam:"style=form,explode=true,name=lang"`
	Page         int64                   `queryParam:"style=form,explode=true,name=page"`
	PerPage      int64                   `queryParam:"style=form,explode=true,name=per_page"`
	Rights       shared.RightsEnum       `queryParam:"style=form,explode=true,name=rights"`
}

type GetProgrammesByChannelRequest struct {
	PathParams  GetProgrammesByChannelPathParams
	QueryParams GetProgrammesByChannelQueryParams
}

type GetProgrammesByChannelResponse struct {
	ContentType string
	StatusCode  int64
	Ibl         *interface{}
}
