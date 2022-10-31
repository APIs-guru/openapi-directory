package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelsQueryParams struct {
	Lang   shared.LangEnum `queryParam:"style=form,explode=true,name=lang"`
	Region *string         `queryParam:"style=form,explode=true,name=region"`
}

type GetChannelsRequest struct {
	QueryParams GetChannelsQueryParams
}

type GetChannelsResponse struct {
	ContentType string
	StatusCode  int64
	Ibl         *interface{}
}
