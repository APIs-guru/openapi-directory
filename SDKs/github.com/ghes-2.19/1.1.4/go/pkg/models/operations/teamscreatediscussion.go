package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsCreateDiscussionPathParams struct {
	TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsCreateDiscussionRequestBody struct {
	Body    string `json:"body"`
	Private *bool  `json:"private"`
	Title   string `json:"title"`
}

type TeamsCreateDiscussionRequest struct {
	PathParams TeamsCreateDiscussionPathParams
	Request    *TeamsCreateDiscussionRequestBody `request:"mediaType=application/json"`
}

type TeamsCreateDiscussionResponse struct {
	ContentType    string
	StatusCode     int64
	TeamDiscussion *shared.TeamDiscussion
}
