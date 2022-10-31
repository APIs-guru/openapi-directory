package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsCreateDiscussionInOrgPathParams struct {
	Org      string `pathParam:"style=simple,explode=false,name=org"`
	TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
}

type TeamsCreateDiscussionInOrgRequestBody struct {
	Body    string `json:"body"`
	Private *bool  `json:"private,omitempty"`
	Title   string `json:"title"`
}

type TeamsCreateDiscussionInOrgRequest struct {
	PathParams TeamsCreateDiscussionInOrgPathParams
	Request    *TeamsCreateDiscussionInOrgRequestBody `request:"mediaType=application/json"`
}

type TeamsCreateDiscussionInOrgResponse struct {
	ContentType    string
	StatusCode     int64
	TeamDiscussion *shared.TeamDiscussion
}
