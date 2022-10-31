package operations

type FilmographySearchReadPathParams struct {
	MovieTitle string `pathParam:"style=simple,explode=false,name=movie_title"`
}

type FilmographySearchReadRequest struct {
	PathParams FilmographySearchReadPathParams
}

type FilmographySearchReadResponse struct {
	ContentType string
	StatusCode  int64
}
