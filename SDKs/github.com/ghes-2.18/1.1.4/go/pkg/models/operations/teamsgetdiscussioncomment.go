package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsGetDiscussionCommentPathParams struct {
	CommentNumber    int64 `pathParam:"style=simple,explode=false,name=comment_number"`
	DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
	TeamID           int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsGetDiscussionCommentHeaders struct {
	Accept string `header:"name=accept"`
}

type TeamsGetDiscussionCommentRequest struct {
	PathParams TeamsGetDiscussionCommentPathParams
	Headers    TeamsGetDiscussionCommentHeaders
}

type TeamsGetDiscussionCommentResponse struct {
	ContentType           string
	StatusCode            int64
	TeamDiscussionComment *shared.TeamDiscussionComment
}
