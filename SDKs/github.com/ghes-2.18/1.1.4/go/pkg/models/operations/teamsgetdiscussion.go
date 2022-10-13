package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsGetDiscussionPathParams struct {
	DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
	TeamID           int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsGetDiscussionHeaders struct {
	Accept string `header:"name=accept"`
}

type TeamsGetDiscussionRequest struct {
	PathParams TeamsGetDiscussionPathParams
	Headers    TeamsGetDiscussionHeaders
}

type TeamsGetDiscussionResponse struct {
	ContentType    string
	StatusCode     int64
	TeamDiscussion *shared.TeamDiscussion
}
