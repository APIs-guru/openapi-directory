package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsGetDiscussionCommentInOrgPathParams struct {
	CommentNumber    int64  `pathParam:"style=simple,explode=false,name=comment_number"`
	DiscussionNumber int64  `pathParam:"style=simple,explode=false,name=discussion_number"`
	Org              string `pathParam:"style=simple,explode=false,name=org"`
	TeamSlug         string `pathParam:"style=simple,explode=false,name=team_slug"`
}

type TeamsGetDiscussionCommentInOrgRequest struct {
	PathParams TeamsGetDiscussionCommentInOrgPathParams
}

type TeamsGetDiscussionCommentInOrgResponse struct {
	ContentType           string
	StatusCode            int64
	TeamDiscussionComment *shared.TeamDiscussionComment
}
