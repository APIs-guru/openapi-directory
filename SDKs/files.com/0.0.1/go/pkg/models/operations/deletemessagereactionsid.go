package operations

type DeleteMessageReactionsIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteMessageReactionsIDRequest struct {
	PathParams DeleteMessageReactionsIDPathParams
}

type DeleteMessageReactionsIDResponse struct {
	ContentType string
	StatusCode  int64
}
