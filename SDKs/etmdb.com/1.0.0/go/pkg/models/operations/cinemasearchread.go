package operations



type CinemaSearchReadPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type CinemaSearchReadRequest struct {
    PathParams CinemaSearchReadPathParams 
    
}

type CinemaSearchReadResponse struct {
    ContentType string 
    StatusCode int64 
    
}

