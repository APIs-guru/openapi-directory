package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsUpdateDiscussionCommentLegacyPathParams struct {
	CommentNumber    int64 `pathParam:"style=simple,explode=false,name=comment_number"`
	DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
	TeamID           int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsUpdateDiscussionCommentLegacyRequestBody struct {
	Body string `json:"body"`
}

type TeamsUpdateDiscussionCommentLegacyRequest struct {
	PathParams TeamsUpdateDiscussionCommentLegacyPathParams
	Request    *TeamsUpdateDiscussionCommentLegacyRequestBody `request:"mediaType=application/json"`
}

type TeamsUpdateDiscussionCommentLegacyResponse struct {
	ContentType           string
	StatusCode            int64
	TeamDiscussionComment *shared.TeamDiscussionComment
}
