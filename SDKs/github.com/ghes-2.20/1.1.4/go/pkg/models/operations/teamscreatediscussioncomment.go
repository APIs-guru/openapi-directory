package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsCreateDiscussionCommentPathParams struct {
	DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
	TeamID           int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsCreateDiscussionCommentRequestBody struct {
	Body string `json:"body"`
}

type TeamsCreateDiscussionCommentRequest struct {
	PathParams TeamsCreateDiscussionCommentPathParams
	Request    *TeamsCreateDiscussionCommentRequestBody `request:"mediaType=application/json"`
}

type TeamsCreateDiscussionCommentResponse struct {
	ContentType           string
	StatusCode            int64
	TeamDiscussionComment *shared.TeamDiscussionComment
}
