package operations

type MessagesDeletePathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	LogID string `pathParam:"style=simple,explode=false,name=logId"`
}

type MessagesDeleteRequest struct {
	PathParams MessagesDeletePathParams
}

type MessagesDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
