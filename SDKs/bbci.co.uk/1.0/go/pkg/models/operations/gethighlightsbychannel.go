package operations

import (
	"openapi/pkg/models/shared"
)

type GetHighlightsByChannelPathParams struct {
	Channel string `pathParam:"style=simple,explode=false,name=channel"`
}

type GetHighlightsByChannelQueryParams struct {
	Availability shared.AvailabilityEnum `queryParam:"style=form,explode=true,name=availability"`
	Lang         shared.LangEnum         `queryParam:"style=form,explode=true,name=lang"`
	Live         *bool                   `queryParam:"style=form,explode=true,name=live"`
	Mixin        []string                `queryParam:"style=form,explode=true,name=mixin"`
	Rights       shared.RightsEnum       `queryParam:"style=form,explode=true,name=rights"`
}

type GetHighlightsByChannelRequest struct {
	PathParams  GetHighlightsByChannelPathParams
	QueryParams GetHighlightsByChannelQueryParams
}

type GetHighlightsByChannelResponse struct {
	ContentType string
	StatusCode  int64
	Ibl         *interface{}
}
