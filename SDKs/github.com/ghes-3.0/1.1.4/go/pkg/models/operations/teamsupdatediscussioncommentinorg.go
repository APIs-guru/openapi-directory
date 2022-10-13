package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsUpdateDiscussionCommentInOrgPathParams struct {
	CommentNumber    int64  `pathParam:"style=simple,explode=false,name=comment_number"`
	DiscussionNumber int64  `pathParam:"style=simple,explode=false,name=discussion_number"`
	Org              string `pathParam:"style=simple,explode=false,name=org"`
	TeamSlug         string `pathParam:"style=simple,explode=false,name=team_slug"`
}

type TeamsUpdateDiscussionCommentInOrgRequestBody struct {
	Body string `json:"body"`
}

type TeamsUpdateDiscussionCommentInOrgRequest struct {
	PathParams TeamsUpdateDiscussionCommentInOrgPathParams
	Request    *TeamsUpdateDiscussionCommentInOrgRequestBody `request:"mediaType=application/json"`
}

type TeamsUpdateDiscussionCommentInOrgResponse struct {
	ContentType           string
	StatusCode            int64
	TeamDiscussionComment *shared.TeamDiscussionComment
}
