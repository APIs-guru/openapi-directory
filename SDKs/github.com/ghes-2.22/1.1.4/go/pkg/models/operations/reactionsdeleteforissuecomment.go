package operations

type ReactionsDeleteForIssueCommentPathParams struct {
	CommentID  int64  `pathParam:"style=simple,explode=false,name=comment_id"`
	Owner      string `pathParam:"style=simple,explode=false,name=owner"`
	ReactionID int64  `pathParam:"style=simple,explode=false,name=reaction_id"`
	Repo       string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReactionsDeleteForIssueCommentRequest struct {
	PathParams ReactionsDeleteForIssueCommentPathParams
}

type ReactionsDeleteForIssueCommentResponse struct {
	ContentType string
	StatusCode  int64
}
