package operations

type TeamsDeleteDiscussionCommentPathParams struct {
	CommentNumber    int64 `pathParam:"style=simple,explode=false,name=comment_number"`
	DiscussionNumber int64 `pathParam:"style=simple,explode=false,name=discussion_number"`
	TeamID           int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsDeleteDiscussionCommentRequest struct {
	PathParams TeamsDeleteDiscussionCommentPathParams
}

type TeamsDeleteDiscussionCommentResponse struct {
	ContentType string
	StatusCode  int64
}
