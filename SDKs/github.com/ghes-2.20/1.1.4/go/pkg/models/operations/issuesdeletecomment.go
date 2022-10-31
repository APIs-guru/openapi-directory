package operations

type IssuesDeleteCommentPathParams struct {
	CommentID int64  `pathParam:"style=simple,explode=false,name=comment_id"`
	Owner     string `pathParam:"style=simple,explode=false,name=owner"`
	Repo      string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesDeleteCommentRequest struct {
	PathParams IssuesDeleteCommentPathParams
}

type IssuesDeleteCommentResponse struct {
	ContentType string
	StatusCode  int64
}
