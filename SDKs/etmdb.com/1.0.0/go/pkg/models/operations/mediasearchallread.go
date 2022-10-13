package operations

type MediaSearchallReadPathParams struct {
	User string `pathParam:"style=simple,explode=false,name=user"`
}

type MediaSearchallReadRequest struct {
	PathParams MediaSearchallReadPathParams
}

type MediaSearchallReadResponse struct {
	ContentType string
	StatusCode  int64
}
