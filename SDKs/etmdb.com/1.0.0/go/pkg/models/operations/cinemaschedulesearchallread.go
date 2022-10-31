package operations

type CinemaScheduleSearchallReadPathParams struct {
	Param string `pathParam:"style=simple,explode=false,name=param"`
}

type CinemaScheduleSearchallReadRequest struct {
	PathParams CinemaScheduleSearchallReadPathParams
}

type CinemaScheduleSearchallReadResponse struct {
	ContentType string
	StatusCode  int64
}
