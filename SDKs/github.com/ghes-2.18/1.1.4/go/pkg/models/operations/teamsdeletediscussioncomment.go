package operations

type TeamsDeleteDiscussionCommentPathParams struct {
	CommentNumber    int64 `pathParam:"style=simple,explode=false,name=comment_number"`
	DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
	TeamID           int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsDeleteDiscussionCommentHeaders struct {
	Accept string `header:"style=simple,explode=false,name=accept"`
}

type TeamsDeleteDiscussionCommentRequest struct {
	PathParams TeamsDeleteDiscussionCommentPathParams
	Headers    TeamsDeleteDiscussionCommentHeaders
}

type TeamsDeleteDiscussionCommentResponse struct {
	ContentType string
	StatusCode  int64
}
