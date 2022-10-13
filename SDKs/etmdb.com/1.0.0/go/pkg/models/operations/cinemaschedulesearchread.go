package operations

type CinemaScheduleSearchReadPathParams struct {
	MovieTitle string `pathParam:"style=simple,explode=false,name=movie_title"`
}

type CinemaScheduleSearchReadRequest struct {
	PathParams CinemaScheduleSearchReadPathParams
}

type CinemaScheduleSearchReadResponse struct {
	ContentType string
	StatusCode  int64
}
