package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteStoryPathParams struct {
	StoryGid string `pathParam:"style=simple,explode=false,name=story_gid"`
}

type DeleteStoryQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type DeleteStoryRequest struct {
	PathParams  DeleteStoryPathParams
	QueryParams DeleteStoryQueryParams
}

type DeleteStory200ApplicationJSON struct {
	Data map[string]interface{} `json:"data,omitempty"`
}

type DeleteStoryResponse struct {
	ContentType                         string
	ErrorResponse                       *shared.ErrorResponse
	StatusCode                          int64
	DeleteStory200ApplicationJSONObject *DeleteStory200ApplicationJSON
}
