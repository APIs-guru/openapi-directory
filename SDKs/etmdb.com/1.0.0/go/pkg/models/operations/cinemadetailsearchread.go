package operations



type CinemaDetailSearchReadPathParams struct {
    CinemaName string `pathParam:"style=simple,explode=false,name=cinema_name"`
    
}

type CinemaDetailSearchReadRequest struct {
    PathParams CinemaDetailSearchReadPathParams 
    
}

type CinemaDetailSearchReadResponse struct {
    ContentType string 
    StatusCode int64 
    
}

