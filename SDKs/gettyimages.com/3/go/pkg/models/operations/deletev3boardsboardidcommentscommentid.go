package operations

type DeleteV3BoardsBoardIDCommentsCommentIDPathParams struct {
	BoardID   string `pathParam:"style=simple,explode=false,name=board_id"`
	CommentID string `pathParam:"style=simple,explode=false,name=comment_id"`
}

type DeleteV3BoardsBoardIDCommentsCommentIDRequest struct {
	PathParams DeleteV3BoardsBoardIDCommentsCommentIDPathParams
}

type DeleteV3BoardsBoardIDCommentsCommentIDResponse struct {
	ContentType string
	StatusCode  int64
}
