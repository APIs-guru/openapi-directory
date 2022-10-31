package operations

type DeleteMessagesIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteMessagesIDRequest struct {
	PathParams DeleteMessagesIDPathParams
}

type DeleteMessagesIDResponse struct {
	ContentType string
	StatusCode  int64
}
