package operations

type GenreTypeSearchReadPathParams struct {
	GenreDescription string `pathParam:"style=simple,explode=false,name=genre_description"`
}

type GenreTypeSearchReadRequest struct {
	PathParams GenreTypeSearchReadPathParams
}

type GenreTypeSearchReadResponse struct {
	ContentType string
	StatusCode  int64
}
