package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsUpdateDiscussionCommentPathParams struct {
	CommentNumber    int64 `pathParam:"style=simple,explode=false,name=comment_number"`
	DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
	TeamID           int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsUpdateDiscussionCommentRequestBody struct {
	Body string `json:"body"`
}

type TeamsUpdateDiscussionCommentRequest struct {
	PathParams TeamsUpdateDiscussionCommentPathParams
	Request    *TeamsUpdateDiscussionCommentRequestBody `request:"mediaType=application/json"`
}

type TeamsUpdateDiscussionCommentResponse struct {
	ContentType           string
	StatusCode            int64
	TeamDiscussionComment *shared.TeamDiscussionComment
}
