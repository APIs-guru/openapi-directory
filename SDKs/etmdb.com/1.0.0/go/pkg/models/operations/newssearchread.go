package operations

type NewsSearchReadPathParams struct {
	Title string `pathParam:"style=simple,explode=false,name=title"`
}

type NewsSearchReadRequest struct {
	PathParams NewsSearchReadPathParams
}

type NewsSearchReadResponse struct {
	ContentType string
	StatusCode  int64
}
