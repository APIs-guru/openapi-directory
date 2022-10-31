package operations



type MovieCastSearchReadPathParams struct {
    MovieTitle string `pathParam:"style=simple,explode=false,name=movie_title"`
    
}

type MovieCastSearchReadRequest struct {
    PathParams MovieCastSearchReadPathParams 
    
}

type MovieCastSearchReadResponse struct {
    ContentType string 
    StatusCode int64 
    
}

