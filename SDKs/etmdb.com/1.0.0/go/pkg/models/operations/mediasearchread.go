package operations

type MediaSearchReadPathParams struct {
	MovieTitle string `pathParam:"style=simple,explode=false,name=movie_title"`
}

type MediaSearchReadRequest struct {
	PathParams MediaSearchReadPathParams
}

type MediaSearchReadResponse struct {
	ContentType string
	StatusCode  int64
}
