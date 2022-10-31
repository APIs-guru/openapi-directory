package operations

type MessagesHidePathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	LogID string `pathParam:"style=simple,explode=false,name=logId"`
}

type MessagesHideRequest struct {
	PathParams MessagesHidePathParams
}

type MessagesHideResponse struct {
	ContentType string
	StatusCode  int64
}
