package operations

import (
	"openapi/pkg/models/shared"
)

type GetStoryPathParams struct {
	StoryGid string `pathParam:"style=simple,explode=false,name=story_gid"`
}

type GetStoryQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetStoryRequest struct {
	PathParams  GetStoryPathParams
	QueryParams GetStoryQueryParams
}

type GetStory200ApplicationJSON struct {
	Data *shared.StoryResponse `json:"data,omitempty"`
}

type GetStoryResponse struct {
	ContentType                      string
	ErrorResponse                    *shared.ErrorResponse
	StatusCode                       int64
	GetStory200ApplicationJSONObject *GetStory200ApplicationJSON
}
