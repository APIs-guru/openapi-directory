package operations

type DeleteMessageCommentReactionsIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteMessageCommentReactionsIDRequest struct {
	PathParams DeleteMessageCommentReactionsIDPathParams
}

type DeleteMessageCommentReactionsIDResponse struct {
	ContentType string
	StatusCode  int64
}
