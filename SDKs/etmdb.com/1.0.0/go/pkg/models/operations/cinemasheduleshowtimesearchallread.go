package operations



type CinemaSheduleShowtimeSearchallReadPathParams struct {
    Param string `pathParam:"style=simple,explode=false,name=param"`
    
}

type CinemaSheduleShowtimeSearchallReadRequest struct {
    PathParams CinemaSheduleShowtimeSearchallReadPathParams 
    
}

type CinemaSheduleShowtimeSearchallReadResponse struct {
    ContentType string 
    StatusCode int64 
    
}

