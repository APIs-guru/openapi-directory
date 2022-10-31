package operations

type DeleteMessageCommentsIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteMessageCommentsIDRequest struct {
	PathParams DeleteMessageCommentsIDPathParams
}

type DeleteMessageCommentsIDResponse struct {
	ContentType string
	StatusCode  int64
}
