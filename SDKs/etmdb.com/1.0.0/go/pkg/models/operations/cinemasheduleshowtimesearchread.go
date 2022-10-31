package operations



type CinemaSheduleShowtimeSearchReadPathParams struct {
    MovieTitle string `pathParam:"style=simple,explode=false,name=movie_title"`
    
}

type CinemaSheduleShowtimeSearchReadRequest struct {
    PathParams CinemaSheduleShowtimeSearchReadPathParams 
    
}

type CinemaSheduleShowtimeSearchReadResponse struct {
    ContentType string 
    StatusCode int64 
    
}

