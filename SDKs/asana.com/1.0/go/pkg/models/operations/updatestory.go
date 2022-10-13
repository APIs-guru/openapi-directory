package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateStoryPathParams struct {
	StoryGid string `pathParam:"style=simple,explode=false,name=story_gid"`
}

type UpdateStoryQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type UpdateStoryRequestBody struct {
	Data *shared.StoryRequest `json:"data"`
}

type UpdateStoryRequest struct {
	PathParams  UpdateStoryPathParams
	QueryParams UpdateStoryQueryParams
	Request     UpdateStoryRequestBody `request:"mediaType=application/json"`
}

type UpdateStory200ApplicationJSON struct {
	Data *shared.StoryResponse `json:"data"`
}

type UpdateStoryResponse struct {
	ContentType                         string
	ErrorResponse                       *shared.ErrorResponse
	StatusCode                          int64
	UpdateStory200ApplicationJSONObject *UpdateStory200ApplicationJSON
}
