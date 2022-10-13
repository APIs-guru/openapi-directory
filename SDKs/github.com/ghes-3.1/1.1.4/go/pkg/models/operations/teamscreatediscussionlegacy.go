package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsCreateDiscussionLegacyPathParams struct {
	TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsCreateDiscussionLegacyRequestBody struct {
	Body    string `json:"body"`
	Private *bool  `json:"private"`
	Title   string `json:"title"`
}

type TeamsCreateDiscussionLegacyRequest struct {
	PathParams TeamsCreateDiscussionLegacyPathParams
	Request    *TeamsCreateDiscussionLegacyRequestBody `request:"mediaType=application/json"`
}

type TeamsCreateDiscussionLegacyResponse struct {
	ContentType    string
	StatusCode     int64
	TeamDiscussion *shared.TeamDiscussion
}
