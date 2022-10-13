package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsUpdateDiscussionLegacyPathParams struct {
	DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
	TeamID           int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsUpdateDiscussionLegacyRequestBody struct {
	Body  *string `json:"body"`
	Title *string `json:"title"`
}

type TeamsUpdateDiscussionLegacyRequest struct {
	PathParams TeamsUpdateDiscussionLegacyPathParams
	Request    *TeamsUpdateDiscussionLegacyRequestBody `request:"mediaType=application/json"`
}

type TeamsUpdateDiscussionLegacyResponse struct {
	ContentType    string
	StatusCode     int64
	TeamDiscussion *shared.TeamDiscussion
}
