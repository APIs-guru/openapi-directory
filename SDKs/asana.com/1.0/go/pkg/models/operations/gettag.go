package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagPathParams struct {
	TagGid string `pathParam:"style=simple,explode=false,name=tag_gid"`
}

type GetTagQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetTagRequest struct {
	PathParams  GetTagPathParams
	QueryParams GetTagQueryParams
}

type GetTag200ApplicationJSON struct {
	Data *shared.TagResponse `json:"data"`
}

type GetTagResponse struct {
	ContentType                    string
	ErrorResponse                  *shared.ErrorResponse
	StatusCode                     int64
	GetTag200ApplicationJSONObject *GetTag200ApplicationJSON
}
