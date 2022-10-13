package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsGetDiscussionLegacyPathParams struct {
	DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
	TeamID           int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsGetDiscussionLegacyRequest struct {
	PathParams TeamsGetDiscussionLegacyPathParams
}

type TeamsGetDiscussionLegacyResponse struct {
	ContentType    string
	StatusCode     int64
	TeamDiscussion *shared.TeamDiscussion
}
