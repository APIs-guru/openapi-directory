package operations

type ReactionsDeleteForCommitCommentPathParams struct {
	CommentID  int64  `pathParam:"style=simple,explode=false,name=comment_id"`
	Owner      string `pathParam:"style=simple,explode=false,name=owner"`
	ReactionID int64  `pathParam:"style=simple,explode=false,name=reaction_id"`
	Repo       string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReactionsDeleteForCommitCommentRequest struct {
	PathParams ReactionsDeleteForCommitCommentPathParams
}

type ReactionsDeleteForCommitCommentResponse struct {
	ContentType string
	StatusCode  int64
}
